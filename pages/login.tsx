import MainLayout from "../layouts/MainLayout";
import { Login as LoginComponent } from "../components/login";
import { useAuthContext } from "../contexts/authContext";
import { useRouter } from "next/router";

const Login = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  // If we are signed in, redirect to the home page
  if (user) {
    router.replace("/").finally();
  }

  return (
    <MainLayout>
      <LoginComponent />
    </MainLayout>
  );
};

export default Login;
