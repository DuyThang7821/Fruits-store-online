import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { apiLogin } from "../../apis/user";
import { validate } from "../../ultils/helpers";
import { login } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FormLogin = ({
  show,
  handleCloseModal,
  handleOpenRegisterModal,
  handleSetLoggedInEmail,
}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [invalidFields, setInvalidFields] = useState([]);

  const handleOnclickInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    setInvalidFields((prev) => prev.filter((field) => field.name !== name));
  };

  const resetData = () => {
    setData({ email: "", password: "" });
  };
  const handleLoginClick = () => {
    setInvalidFields([]);
    const isValid = validate(data, setInvalidFields, true);
    if (isValid) {
      apiLogin(data)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Logged in successfully!",
            text: `Logged in as ${res.data.account.email}`,
          });
          handleSetLoggedInEmail(res.data.account.email);
          handleCloseModal();
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify(res.data.account)
          );
          resetData(data);
        })
        .catch((error) => {
          toast.error("Username or password incorrect", error);
        });
    }
};
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      dispatch(login(JSON.parse(loggedInUser)));
    }
  }, []);

  return (
    <div>
      <Modal
        open={show}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 480,
            bgcolor: "background.paper",
            boxShadow: 24,
            maxHeight: 480,
            p: 4,
            borderRadius: 2,
            outline: "none",
          }}
          
        >
          <span
            className="text-[#7fad39] font-bold text-4xl  flex justify-center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Login
          </span>
          <form className="mt-10">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                className="border-gray-300 border focus:outline-none w-[437px] h-[52px] rounded-sm mb-2 p-2"
                placeholder="Email"
                type="email"
                name="email"
                value={data.email}
                onChange={handleOnclickInputChange}
                required
              />
              {invalidFields.map(
                (field, index) =>
                  field.name === "email" && (
                    <p key={index} className="text-red-500">
                      {field.message}
                    </p>
                  )
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                className="border-gray-300 border focus:outline-none w-[437px] h-[52px] rounded-sm mb-2 p-2"
                placeholder="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleOnclickInputChange}
                required
              />
              {invalidFields.map(
                (field, index) =>
                  field.name === "password" && (
                    <p key={index} className="text-red-500">
                      {field.message}
                    </p>
                  )
              )}
            </div>

            <button
              type="button"
              className="w-[437px] h-[39px] bg-[#7fad39] text-white mb-8 rounded-sm text-lg"
              onClick={handleLoginClick}
            >
              Login
            </button>
          </form>

          <div className="flex justify-between">
            <Link
              className="text-blue-500 font-semibold mb-20"
              href="http://localhost:3000/"
            >
              Go home
            </Link>
            <button
              className="text-blue-500 font-semibold mb-20"
              onClick={handleOpenRegisterModal}
            >
              Create account
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FormLogin;
