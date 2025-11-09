import Forms from "../components/Forms/Forms";
import { useLogin } from "../hooks/useLogin";


function Login() {
  return (
    <>
      <Forms useMutationHook={useLogin} />
    </>
  );
}

export default Login;
