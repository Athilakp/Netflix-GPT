import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validation";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  const submitForm = () => {
    const message = checkValidateData(
      name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-rose-500">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={submitForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In now."}
        </p>
        <p className="p-4 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </p>
      </form>
    </div>
  );
};

export default Login;
