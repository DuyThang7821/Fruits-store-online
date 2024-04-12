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
  productLimit: 8,
  productLimitDetail: 4,
};
export const productInfoTabs = [
  {
    id: 1,
    name: "Description",
    content: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
    Vivamus suscipit tortor eget felis porttitor volutpat. 
    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. 
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    `,
  },

  {
    id: 2,
    name: "Infomation",
    content: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. 
    Vivamus suscipit tortor eget felis porttitor volutpat. 
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
    Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
    `,
  },

  {
    id: 3,
    name: "Reviews(1)",
    content: `Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. 
    Vivamus suscipit tortor eget felis porttitor volutpat. 
    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. 
    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
    Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.
    `,
  },
];
