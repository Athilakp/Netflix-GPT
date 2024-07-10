export const checkValidateData = (name, email, password) => {
  const isNameValid = /^([A-Za-z][A-Za-z0-9_]{7,29})$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]{2,})$/.test(
    password
  );
  if (!isNameValid) return "Name is invalid";

  if (!isEmailValid) return "Email Id is invalid";
  if (!isPasswordValid) return "Password is invalid";
  return null;
};
