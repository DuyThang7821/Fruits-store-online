import { mes, regex } from '../ultils/constants';

export const validate = (payload, setInvalidFields) => {
    let invalids = 0;

    if (payload.email.trim() === "" || payload.password.trim() === "") {
        invalids++;
        setInvalidFields((prev) => [
            ...prev,
            { name: "email", message: mes.emailRequired },
            { name: "password", message: mes.passwordRequired },
        ]);
    } else {
        if (!payload.email.match(regex.email)) {
            invalids++;
            setInvalidFields((prev) => [
                ...prev,
                { name: "email", message: mes.invalidEmailFormat },
            ]);
        }

        if (!regex.passwordLength.test(payload.password)) {
            invalids++;
            setInvalidFields((prev) => [
                ...prev,
                { name: "password", message: mes.passwordLength },
            ]);
        }
    }
    return invalids;
};
