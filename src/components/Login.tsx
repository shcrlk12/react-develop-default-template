import ErrorMessage from "./ErrorMessage";
import InputField from "./InputField";
import Button from "./buttons/Button";
import { useState } from "react";

type LoginState = {
  isFieldsEmpty: boolean;
  isEmailValid: boolean;
  emailFieldLabel: string;
  passFieldLabel: string;
  error: {
    email: boolean;
    emailField: boolean;
    pass: boolean;
    message: string;
  };
  emailValue: string;
  passValue: string;
};

const Login = () => {
  const [state, setState] = useState<LoginState>({
    isFieldsEmpty: true,
    isEmailValid: false,
    emailFieldLabel: "email",
    passFieldLabel: "password",
    error: {
      email: false,
      emailField: false,
      pass: false,
      message: "",
    },
    emailValue: "",
    passValue: "",
  });

  function isFieldsEmpty() {
    if (!state.emailValue || !state.passValue) {
      /*this.setState({
        formHasError: true,
        errorMsg: 'Please fill all details'
      });*/
      setState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          pass: state.passValue === "",
          email: state.emailValue === "",
          message: "Please fill all details",
        },
      }));
      return true;
    } else {
      setState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          pass: false,
        },
      }));
      return false;
    }
  }

  function handleInput(field: string, value: string) {
    switch (field) {
      case "email":
        console.log(field);
        setState((prevState) => ({
          ...prevState,
          emailValue: value,
        }));
        break;
      case "password":
        console.log(field);
        setState((prevState) => ({
          ...prevState,
          passValue: value,
        }));
        break;
      default:
        break;
    }
  }

  function handleClick() {
    console.log("Any email error(s): ", state.error.email);
    console.log("Any pass error(s): ", state.error.pass);
    isEmailValid();
    if (!isFieldsEmpty() && !state.error.email && !state.error.pass)
      alert("완료");
  }

  function isEmailValid() {
    if (state.emailValue) {
      console.log(state.emailValue);
      const email = state.emailValue;
      const lastAtPos = email.lastIndexOf("@");
      const lastDotPos = email.lastIndexOf(".");

      if (
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.indexOf("@@") == -1 &&
        lastDotPos > 2 &&
        email.length - lastDotPos > 2
      ) {
        console.log("here");
        setState((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            email: false,
          },
        }));
      } else {
        console.log("ohoh");
        setState((prevState) => ({
          ...prevState,
          error: {
            ...prevState.error,
            email: true,
            message: "Invalid Email Format",
          },
        }));
        /*this.setState({
					formHasError: true,
					errorMsg: 'Invalid Email Format'
				});*/
      }
    } else {
      setState((prevState) => ({
        ...prevState,
        error: {
          ...prevState.error,
          email: false,
        },
      }));
    }
  }
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="w-[400px] h-[300px]  m-auto rounded-xl flex flex-col py-5">
        <div className="text-2xl font-bold text-center text-Zinc-950">
          Pico Pack
        </div>
        <ErrorMessage
          msg={state.error.message}
          show={state.error.email || state.error.pass}
        />

        <InputField
          onChange={handleInput}
          label={state.emailFieldLabel}
          name={state.emailFieldLabel}
          value={state.emailValue}
        />
        <InputField
          onChange={handleInput}
          label={state.passFieldLabel}
          name={state.passFieldLabel}
          value={state.passValue}
          type={state.passFieldLabel}
        />
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Login;
