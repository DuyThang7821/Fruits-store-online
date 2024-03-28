import path from "./path"
export const navigation = [
    {
        id: 1,
        value: 'HOME',
        path: `/${path.HOME}`
    },
    {
        id: 2,
        value: 'SHOP',
        path: `/${path.SHOPS}`
    },
    {
        id: 3,
        value: 'PAGES',
        path: `/${path.PAGES}`
    },
    {
        id: 4,
        value: 'BLOG',
        path: `/${path.BLOGS}`
    },
    {
        id: 4,
        value: 'CONTACT',
        path: `/${path.CONTACTS}`
    },
]
export const mes = {
    emailRequired: "Email is required",
    invalidEmailFormat: "Invalid email format",
    passwordRequired: "Password is required",
    passwordLength: "Password needs at least 6 characters"
};

export const regex = {
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    passwordLength: /^.{6,}$/
};