import Image from "next/image";

import LoginForm from "../components/LoginForm";

export const metadata = {
  title: "Login",
  description: "Login Page",
};

const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="contianer mt-4 w-25">
        {/* <h1 className="text-center">SignUpPage</h1> */}
        <div className="text-center">
          <Image src="/blue.png" alt="logo" width="75" height="75" />
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default LoginPage;
