import React, { useState } from "react";
import { Input } from "../components/input";
import Button from "../components/button";
import { forgotPassword } from "../lib/api";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const ResetPasswordPage = () => {
  const router = useRouter();

  // check if this was a forced redirect from strapi
  const type = router.query.t as string;
  const [values, setValues] = useState({
    email: (router.query.email as string) || "",
    result: "",
  });

  const [isLoading, setLoading] = useState(false);

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleReset = async () => {
    if (!values.email) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      setLoading(true);
      await forgotPassword(values.email);
      setLoading(false);
      setValues({ email: "", result: "A password reset link has been sent to your email. Please check your mailbox" });
    } catch (e) {
      setLoading(false);
      toast.error("Something went wrong, we could reset your password");
    }

  };

  return (
    <div className={"h-screen w-full bg-white grid place-items-center p-8"}>
      <div className={"container grid justify-center gap-6"}>
        {values.result === "" && (
          <>
            {type === "redirect" && (
              <>
                <h1 className={"text-4xl text-primary"}>Please reset your password</h1>
                <span className={"text-xl text-primary"}>Your account requires a password reset to be activated</span>
              </>
            )}
            {type !== "redirect" && (
              <h1 className={"text-5xl text-primary"}>Forgot password?</h1>
            )}
            <Input
              id={"email"}
              label={"Email"}
              value={values.email}
              type={"email"}
              onChange={handleChange("email")}
            />
            <Button color={"primary"} onClick={handleReset} disabled={isLoading}>Request reset</Button>
          </>
        )}
        {values.result && (
          <>
            <h1 className={"text-5xl text-primary"}>Reset link sent</h1>
            <p className={"text-primary text-md"}>{values.result}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
