import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  breakdownGeoResult,
  isMajorCity,
  ShippingAddress,
} from "../components/checkout/shippingAddress";
import { ShippingMethod } from "../components/checkout/shippingMethod";
import MainLayout from "../layouts/MainLayout";
import { MedicalAidDetails } from "../components/checkout/medicalAidDetails";
import { OrderSummary } from "../components/checkout/orderSummary";
import { PaymentMethod } from "../components/checkout/paymentMethod";
import payfastLogo from "../components/checkout/PayFast_logo_colour.png";
import { useCartContext } from "../contexts/cartContext";
import { useAuthContext } from "../contexts/authContext";
import { cancelOrder, getStrapiURL, saveProfileAddress } from "../lib/api";
import { parseErrorResponse } from "../utils/strapi";
import { toast } from "react-hot-toast";
import { Order } from "../types/order";
import Script from "next/script";
import Button from "../components/button";
import { Input } from "../components/input";
import { Disclaimer } from "../components/disclaimer";
import { MedicalAidDetailsType } from "../types/medicalAid";
import { geocodeByAddress } from "react-places-autocomplete";
import { useRouter } from "next/router";
import { sendEvent } from "../lib/gtag";

const Checkout = () => {
  const { user, authToken, setLoading } = useAuthContext();
  const { cartItems, clearCart } = useCartContext();
  const router = useRouter();
  const [medicalAidDetails, setMedicalAidDetails] =
    useState<MedicalAidDetailsType>({
      provider: user?.medical_aid_details?.provider || "",
      scheme_name: user?.medical_aid_details?.scheme_name || "",
      membership_number: user?.medical_aid_details?.membership_number || "",
      main_member: user?.medical_aid_details?.main_member || "",
    });

  const handleMedicalAidDetailsChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setMedicalAidDetails({
        ...medicalAidDetails,
        [name]: event.target.value,
      });
    };

  const [paymentStatus, setPaymentStatus] = useState<"paid" | "cancelled">();
  const [order, setOrder] = useState<Order>();
  const [email, setEmail] = useState(user?.email || "");

  // auto populate the user email if user is logged in
  useEffect(() => {
    setEmail(user?.email || "");
  }, [user]);


  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupons, setAppliedCoupons] = useState<string[]>([]);

  const [shipping, setShipping] = useState(true);
  const [shippingCost, setShippingCost] = useState<number>();

  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    company_name: "",
    phone_number: "",
    street_number: "",
    suburb: "",
    city: "",
    country: "",
    postal_code: "",
    formatted_address: user?.address || "",
    area: "",
    province: "",
    street: "",
  });

  // auto populate the user address if user is logged in
  useEffect(() => {
    if (user?.address && user.address && geocodeByAddress) {

      geocodeByAddress(user.address).then((geoResultList) => {
        if (!geoResultList || geoResultList.length < 1) {
          return;
        }
        const geoResult = geoResultList[0];
        breakdownGeoResult(geoResult);
        const addressBreakdown = breakdownGeoResult(geoResult);

        setShippingAddress(prev => ({ ...prev, ...addressBreakdown }));
      }).catch(e => {
        console.error("Could not parse user address:", e);
      });
    }
  }, [user]);

  // auto populate the user detials if user is logged in
  useEffect(() => {
    setShippingAddress(prev => ({ ...prev, first_name: user?.first_name || "", last_name: user?.last_name || "" }));
  }, [user]);

  const createOrder = async (): Promise<Order> => {
    const requestUrl = getStrapiURL("/orders");
    setLoading(true);
    let data;

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      if (authToken) {
        // @ts-ignore
        headers.Authorization = `Bearer ${authToken}`;
      }

      const response = await fetch(requestUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            ...item,
            product: {
              id: item.product.id,
              price: item.product.price,
              name: item.product.name,
            },
          })),
          billing_address: shippingAddress,
          shipping_address: shippingAddress,
          medical_aid_details: medicalAidDetails,
          description: "",
          // TODO: Do we want to include a customer note?
          customer_note: "",
          shipping,
          // TODO: This should ideally be calculated/confirmed in the back
          shipping_cost: shippingCost,
          email,
        }),
      });
      data = await response.json();
    } catch (e) {
      console.error(
        `Could not create order: ${e.message ? e.message : e.toString()}`,
      );
      setLoading(false);
      throw `Something went wrong with the order placement`;
    }
    if (data.error) {
      console.warn(`Order placement failed`, data);
      const combinedMessage = parseErrorResponse(data.message);
      setLoading(false);
      throw `Order placement failed: ${combinedMessage}`;
    } else {
      // order placement success
      console.debug(`Order placed: `, data);
      setLoading(false);
      return data;
    }
  };

  const createPayment = async (): Promise<{ payfastPaymentID: string }> => {
    const requestUrl = getStrapiURL("/payments");
    setLoading(true);
    let data;

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      if (authToken) {
        // @ts-ignore
        headers.Authorization = `Bearer ${authToken}`;
      }

      const response = await fetch(requestUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          email,
          orderID: order?.id,
        }),
      });
      data = await response.json();
    } catch (e) {
      console.error(
        `Could not create payment: ${e.message ? e.message : e.toString()}`,
      );
      setLoading(false);
      throw `Something went wrong with the order placement`;
    }

    if (data.error) {
      console.warn(`Creating a payment failed`, data);
      const combinedMessage = parseErrorResponse(data.message);
      setLoading(false);
      throw combinedMessage;
    } else {
      // success
      console.debug(`Payment created: `, data);
      sendEvent({ action: "add_payment_info" });


      setLoading(false);
      return data;
    }
  };

  const applyCoupon = async (): Promise<void> => {
    const requestUrl = getStrapiURL("/orders/apply-coupon");
    setLoading(true);
    let data;

    try {
      const headers = {
        "Content-Type": "application/json",
      };
      if (authToken) {
        // @ts-ignore
        headers.Authorization = `Bearer ${authToken}`;
      }

      const response = await fetch(requestUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          orderID: order?.id,
          couponCode: couponCode,
          email,
        }),
      });
      data = await response.json();
    } catch (e) {
      console.error(
        `Could not apply coupon: ${e.message ? e.message : e.toString()}`,
      );
      setLoading(false);
      toast.error(`Something went wrong while applying the coupon`);
      return;
    }

    if (data.error) {
      console.warn(`Applying coupon failed`, data);
      const combinedMessage = parseErrorResponse(data.message);
      setLoading(false);
      toast.error(`Applying coupon failed: ${combinedMessage}`);
    } else {
      // order placement success
      toast.success(`Coupon applied`);
      console.debug(`Coupon applied: `, data);
      setOrder(data);
      setAppliedCoupons([...appliedCoupons, couponCode]);
      setCouponCode("");
      setLoading(false);
      return data;
    }
  };

  const handlePlaceOrder = async () => {
    try {
      if (!cartItems || cartItems.length <= 0) {
        toast.error("You don't have any items in your cart");
        return;
      }
      const createOrderResult = await createOrder();
      setOrder(createOrderResult);
      toast.success("Your order has been placed, please proceed to payment");
      sendEvent({ action: "begin_checkout" });


      if (authToken && shippingAddress.formatted_address) {
        // save the user profile
        await saveProfileAddress(authToken, {
          address: shippingAddress.formatted_address,
          first_name: user?.first_name || shippingAddress.first_name,
          last_name: user?.last_name || shippingAddress.last_name,
        }).finally();
      }

    } catch (e) {
      console.error(`Order placement failed, can't proceed to payment: ${e.message ? e.message : e.toString()}`);
      toast.error(e.toString());
    }
  };


  const handleProceedToPayment = async () => {
    try {
      // prepare a function we can use to cancel the order
      const cancelFunc = async (orderID: number, uuid: string) => {
        await cancelOrder(orderID, uuid);
      };

      const { payfastPaymentID: uuid } = await createPayment();

      console.log(`Loading payfast popup with uuid '${uuid}'`);
      // trigger the payfast popup
      // @ts-ignore
      window.payfast_do_onsite_payment({ uuid: uuid }, function(result) {
        console.log("Payfast payment result = ", result);
        if (result === true) {
          // payment success
          setLoading(false);
          setPaymentStatus("paid");
          clearCart();
          sendEvent({ action: "purchase" });

          toast.success("Payment successful");
          router.push("/shop");
        } else {
          if (order?.id) {
            // cancel the order
            cancelFunc(order.id, uuid).finally(() => {
              setOrder(undefined);
            });
          }
          // payment failure
          setPaymentStatus("cancelled");
          toast.error("Payment cancelled");
        }
      });
    } catch (e) {
      const errMsg = `Could not initiate payment: ${e.message ? e.message : e.toString()}`;
      console.error(errMsg);
      toast.error(errMsg, { duration: 5000 });
    }
  };

  // calculate shipping cost
  useEffect(() => {
    if (!shipping) {
      setShippingCost(undefined);
      return;
    }

    if (isMajorCity(shippingAddress.city)) {
      setShippingCost(100);
      return;
    }

    setShippingCost(165);
  }, [shipping, shippingAddress.city]);

  return (
    <MainLayout>
      {/* Include the payfast script */}
      <Script src="https://www.payfast.co.za/onsite/engine.js" />
      <div className={"bg-gray-100 px-10 lg:px-20 xl:px-28 py-4 grid gap-4"}>
        <h6 className={"text-4xl"}>Checkout</h6>
        <p className={""}>
          Please enter your details below to complete your purchase.
        </p>
        <p className={"text-sm"}>
          Please note that you will need to submit your purchase to your Medical
          Aid provider to claim back.
        </p>

        <div className={"grid gap-4 lg:grid-cols-2 2xl:grid-cols-3"}>
          <div className={"grid gap-4"}>
            <ShippingMethod shipping={shipping} setShipping={setShipping} />
            {shipping && (
              <Wrapper
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""}
                libraries={["places"]}>
                <ShippingAddress
                  values={shippingAddress}
                  setValues={setShippingAddress}
                />
              </Wrapper>
            )}
          </div>

          <div className={"grid gap-4"}>
            <OrderSummary
              cartItems={cartItems}
              order={order}
              shippingCost={shippingCost}
            />
          </div>

          <div
            className={
              "grid gap-4 lg:col-span-2 lg:grid-cols-2 2xl:col-span-1 2xl:grid-cols-1"
            }>
            <MedicalAidDetails
              values={medicalAidDetails}
              handleChange={handleMedicalAidDetailsChange}
            />
            {order && (
              <>
                <PaymentMethod
                  email={email}
                  setEmail={setEmail}
                  applyCoupon={applyCoupon}
                  coupon={couponCode}
                  setCoupon={setCouponCode}
                  appliedCoupons={appliedCoupons}
                  handleProceedToPayment={handleProceedToPayment}
                />
              </>
            )}

            {!order && (
              <div className={"bg-white grid place-items-center "}>
                <div className={"space-y-8 grid place-items-center"}>
                  {!user && (
                    <div>
                      <Input
                        id={"email"}
                        label={"Enter your email address"}
                        value={email}
                        type={"email"}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {!email && (
                        <span className={"text-sm text-red-400"}>
                          *Please provide a valid email address
                        </span>
                      )}
                    </div>
                  )}
                  <Button
                    onClick={handlePlaceOrder}
                    color={"primary"}
                    disabled={!email}>
                    Proceed
                  </Button>
                  <span className={"text-primary"}>
                    Orders are processed within 7 working days
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={"grid justify-end"}>
          <span className={"text-sm text-gray-600"}>
            All payments are secured with Payfast
          </span>
          <div className="w-[200px]">
            <Image src={payfastLogo} alt="Payments made with Payfast" />
          </div>
        </div>
        <Disclaimer />
      </div>
    </MainLayout>
  );
};
export default Checkout;
