import Image from "next/image";
import SingUpForm from "../components/SingUpForm";

export const metadata = {
  title: "Sign Up",
  decription: "User Sign Page",
};

const SignUpPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="contianer mt-4 w-50">
        <div className="text-center">
          <Image src="/blue.png" alt="logo" width="75" height="75" />
        </div>

        <div className="card">
          <div className="card-body">
            <SingUpForm></SingUpForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
