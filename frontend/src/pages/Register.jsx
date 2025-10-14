import Header from "../components/Header/Header";
import Forms from "../components/Forms/Forms";
import Footer from "../components/Footer/Footer";

function Register() {
  return (
    <>
      <Header />
      <Forms
        type="register"
        title="REGISTER"
        buttonText="CREATE ACCOUNT"
        linkText="LOG IN"
        linkPath="/login"
        imageSrc="/img/login.png"
      />
      <Footer noMargin />
    </>
  );
}

export default Register;
