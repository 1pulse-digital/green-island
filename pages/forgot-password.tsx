import React, { useState } from "react";
import { Input } from "../components/input";
import Button from "../components/button";
import { forgotPassword } from "../lib/api";
import { toast } from "react-hot-toast";

const ResetPasswordPage = () => {
  const [values, setValues] = useState({
    email: "",
    result: "",
  });

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleReset = async () => {
    if (!values.email) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      await forgotPassword(values.email);
      setValues({ email: "", result: "A password reset link has been sent to your email. Please check your mailbox" });
    } catch (e) {
      toast.error("Something went wrong, we could reset your password");
    }

  };

  return (
    <div className={"h-screen w-full bg-white grid content-center"}>
      <div className={"container grid justify-center gap-6"}>
        {values.result === "" && (
          <>
            <h1 className={"text-5xl text-primary"}>Forgot password?</h1>
            <Input
              id={"email"}
              label={"Email"}
              value={values.email}
              type={"email"}
              onChange={handleChange("email")}
            />
            <Button color={"primary"} onClick={handleReset}>Request reset</Button>
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
