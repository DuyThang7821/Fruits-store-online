export const validate = (payload, setInvalidFields) => {
    let invalids = 0;

    if (payload.email.trim() === "" || payload.password.trim() === "") {
        invalids++;
        setInvalidFields((prev) => [
            ...prev,
            { name: "email", message: "Email is required" },
            { name: "password", message: "Password is required" },
        ]);
    } else {
        if (!payload.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            invalids++;
            setInvalidFields((prev) => [
                ...prev,
                { name: "email", message: "Invalid email format" },
            ]);
        }

        if (payload.password.length < 6) {
            invalids++;
            setInvalidFields((prev) => [
                ...prev,
                { name: "password", message: "Password needs at least 6 characters" },
            ]);
        }
    }
    return invalids;
};
