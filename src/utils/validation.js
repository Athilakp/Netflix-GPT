export const checkValidateData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]{2,})$/.test(
    password
  );

  if (!isEmailValid) return "Email Id is invalid";
  if (!isPasswordValid) return "Password is invalid";
  return null;
};
