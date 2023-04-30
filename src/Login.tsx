import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";
import './styles/components/Error.scss';
import { CommonStrings } from './i18n/en';

function LoginPage() {

  return (
    <div className="login-container">
      <TextInput
        placeholder="Username"
        value={""}
      />

      <TextInput
        placeholder="Password"
        type="password"
        value={""}
      />

      <div className="error">
        {CommonStrings.Error.Password.Length}

        <div>⚠</div>
      </div>

      <Button label="Login" isDisabled={false} />
    </div>
  );
}

export default LoginPage;
