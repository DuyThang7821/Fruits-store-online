import path from "./path";
export const navigation = [
  {
    id: 1,
    value: "HOME",
    path: `/${path.HOME}`,
  },
  {
    id: 2,
    value: "SHOP",
    path: `/${path.SHOPS}`,
  },
  {
    id: 3,
    value: "PAGES",
    path: `/${path.PAGES}`,
  },
  {
    id: 4,
    value: "BLOG",
    path: `/${path.BLOGS}`,
  },
  {
    id: 4,
    value: "CONTACT",
    path: `/${path.CONTACTS}`,
  },
];
export const message = {
  firstNameRequired: "First name is required",
  lastNameRequired: "Last name is required",
  emailRequired: "Email is required",
  invalidEmailFormat: "Invalid email format",
  phoneRequired: "Phone is required",
  phoneLength: "Phone number needs at least 10 digits",
  phoneFormat: "Phone number is incorrect",
  passwordRequired: "Password is required",
  confirmPasswordRequired: "Confirm Password is required",
  passwordLength: "Password needs at least 6 characters",
  comparePassword: "Confirm Password do not match",
};

export const regex = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  passwordLength: /^.{6,}$/,
  regexPhone: /^(0?3[2-9]|0?5[689]|0?7[06-9]|0?8[1-689]|0?9[0-46-9])[0-9]{7}$/,
};

export const product = {
  productLimit: 8
};
