import Forms from "../components/Forms/Forms";
import { useRegister } from "../hooks/useRegister";

function Register() {
  return (
    <>
      <Forms
        type="register"
        title="REGISTER"
        buttonText="CREATE ACCOUNT"
        linkText="LOG IN"
        linkPath="/login"
        imageSrc="/img/login.png"
        useMutationHook={useRegister}
      />
    </>
  );
}

export default Register;
