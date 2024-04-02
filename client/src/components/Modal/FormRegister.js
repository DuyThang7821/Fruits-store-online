import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { validate } from "../../ultils/helpers";
import { apiRegister } from "../../apis/user";
import { toast } from "react-toastify";
import { message } from "../../ultils/constants";

const FormRegister = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "admin",
    isActive: true,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    setInvalidFields((prev) => prev.filter((field) => field.name !== name));
  };

  const handleRegisterClick = () => {
    setInvalidFields([]);
    if (data.password !== data.confirmPassword) {
      setInvalidFields(prev => [...prev, { name: "confirmPassword", message: message.comparePassword }]);
      toast.error(message.comparePassword);
      return; 
    }
    const isValid = validate(data, setInvalidFields, false); 
    if (isValid) {
      apiRegister(data)
        .then(() => {
          toast.success("Register successful");
          setData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            role: "admin",
            isActive: true,
          });
        })
        .catch((error) => {
          toast.error(
            "Registration Error",
            error.response ? error.response.data.message : "Unknown error"
          );
        });
    }
  };
  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 557,
            height: 720,
            maxWidth: "90vw",
            maxHeight: "100vh",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            className="text-[#7fad39] font-bold text-4xl mt-5"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Register
          </span>

          <form className="mt-10" style={{ width: "100%" }}>
            <div className="mb-5 flex gap-2">
              <div className="flex flex-col flex-1">
                <input
                  className="border-gray-300 border focus:outline-none h-[51px] rounded-md p-2"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  required
                  value={data.firstName}
                  onChange={handleInputChange}
                />
                {invalidFields.map(
                  (field, index) =>
                    field.name === "firstName" && (
                      <p key={index} className="text-red-500">
                        {field.message}
                      </p>
                    )
                )}
              </div>

              <div className="flex flex-col flex-1 px-2">
                <input
                  className="border-gray-300 border focus:outline-none h-[51px] rounded-md p-2"
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  required
                  value={data.lastName}
                  onChange={handleInputChange}
                />
                {invalidFields.map(
                  (field, index) =>
                    field.name === "lastName" && (
                      <p key={index} className="text-red-500">
                        {field.message}
                      </p>
                    )
                )}
              </div>
            </div>

            <div className="mb-5">
              <input
                className="border-gray-300 border focus:outline-none w-[483px] h-[51px] rounded-md mb-2 p-2"
                placeholder="Email"
                type="email"
                name="email"
                required
                value={data.email}
                onChange={handleInputChange}
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
              <input
                className="border-gray-300 border focus:outline-none w-[483px] h-[51px] rounded-md mb-2 p-2"
                placeholder="Phone Number"
                type="text"
                name="phone"
                required
                value={data.phone}
                onChange={handleInputChange}
              />
              {invalidFields.map(
                (field, index) =>
                  field.name === "phone" && (
                    <p key={index} className="text-red-500">
                      {field.message}
                    </p>
                  )
              )}
            </div>
            <div className="mb-5">
              <input
                className="border-gray-300 border focus:outline-none w-[483px] h-[51px] rounded-md mb-2 p-2"
                placeholder="Password"
                type="password"
                name="password"
                required
                value={data.password}
                onChange={handleInputChange}
              />
              {invalidFields.map(
                (field, index) =>
                  field.name === "password" && (
                    <p key={index} className="text-red-500 mb-5">
                      {field.message}
                    </p>
                  )
              )}
            </div>

            <div className="mb-5">
              <input
                className="border-gray-300 border focus:outline-none w-[483px] h-[51px] rounded-md mb-2 p-2"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
                required
                value={data.confirmPassword}
                onChange={handleInputChange}
              />
              {invalidFields.map(
                (field, index) =>
                  field.name === "confirmPassword" && (
                    <p key={index} className="text-red-500">
                      {field.message}
                    </p>
                  )
              )}
            </div>

            <button
              type="button"
              className="w-[483px] h-[39px] bg-[#7fad39] text-white mb-8 rounded-md text-lg"
              onClick={handleRegisterClick}
            >
              Register
            </button>

            <div className="flex justify-between">
              <Link
                className="text-blue-500 font-semibold mb-10"
                href="http://localhost:3000/"
              >
                Go home
              </Link>
              <button className="text-blue-500 font-semibold mb-10 px-2">
                Go to Login
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default FormRegister;
