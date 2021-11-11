import React, { useState } from "react";
import { Input } from "../components/input";
import Button from "../components/button";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { resetPassword } from "../lib/api";

const ResetPasswordPage = () => {
  const router = useRouter();
  const { code } = router.query;

  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const parseCode = (): string => {
    return code as string;
  };

  const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleReset = async () => {
    if (values.newPassword !== values.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      await resetPassword(parseCode(), values.newPassword, values.confirmPassword);
      toast.success("Password updated");

      // redirect user back to login page
      router.push("/login").finally();
    } catch (e) {
      toast.error("Something went wrong, we could reset your password");
    }
  };
  return (
    <div className={"h-screen w-full bg-white grid content-center"}>
      <div className={"container grid justify-center gap-6"}>
        <h1 className={"text-5xl text-primary"}>Reset your password</h1>
        <Input
          id={"new-password"}
          label={"New Password"}
          value={values.newPassword}
          type={"password"}
          onChange={handleChange("newPassword")}
        />
        <Input
          id={"confirm-password"}
          label={"Confirm Password"}
          value={values.confirmPassword}
          type={"password"}
          onChange={handleChange("confirmPassword")}
        />
        <Button color={"primary"} onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
