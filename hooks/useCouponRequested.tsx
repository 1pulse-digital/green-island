import createPersistedState from "use-persisted-state";

const useCouponRequestedState = createPersistedState("coupon-requested");

const useCouponRequested = (initialValue: boolean) => {
  const [requested, setRequested] = useCouponRequestedState(initialValue);

  return {
    couponRequested: requested,
    setCouponRequested: (value: boolean) => setRequested(value),
  };
};

export default useCouponRequested;
