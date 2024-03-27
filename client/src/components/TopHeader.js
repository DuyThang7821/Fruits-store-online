import React, { memo, useState } from "react";
import icons from "../ultils/icons";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
import { apiLogin } from "../apis/user";
const { MdEmail, FaFacebook, FaLinkedinIn, FaTwitter, FaUserCircle } = icons;
const TopHeader = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidFields, setInvalidFields] = useState([]);
  const [loggedInEmail, setLoggedInEmail] = useState("");

  const handleLoginClick = async () => {
    try {
      const res = await apiLogin(email, password);
      if (res && res.data) {
        toast.success(`Logged in as ${email}`);
        handleClose();
        setLoggedInEmail(email);
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      toast.error("An error occurred during login");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Clear the corresponding error message if the user entered the correct formatting
    if (name === "email") {
      if (value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setInvalidFields((prev) =>
          prev.filter((field) => field.name !== "email")
        );
      }
      setEmail(value);
    } else if (name === "password") {
      if (value.length >= 6) {
        setInvalidFields((prev) =>
          prev.filter((field) => field.name !== "password")
        );
      }
      setPassword(value);
    }
  };

  const handleInputBlur = () => {
    setInvalidFields([]); // Clear the error message before checking again
    // Check email fields
    if (email.trim() === "") {
      // Case 2: click out without typing anything
      setInvalidFields((prev) => [
        ...prev,
        { name: "email", mes: "This field cannot be left empty" },
      ]);
    } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      // case 1: Incorrect email
      setInvalidFields((prev) => [
        ...prev,
        { name: "email", mes: "Invalid email, please check the correct email" },
      ]);
    }

    // 
    if (password.trim() === "") {
      // Case 4: click out without entering anything
      setInvalidFields((prev) => [
        ...prev,
        { name: "password", mes: "This field cannot be left empty" },
      ]);
    } else if (password.length < 6) {
      // Case 3: The entered password is missing characters
      setInvalidFields((prev) => [
        ...prev,
        { name: "password", mes: "Password needs 6 characters or more" },
      ]);
    }
  };

  const handlePasswordKeyUp = (event) => {
    const { value } = event.target;
    // Check if the password is not long enough after deletion
    if (value.length < 6) {
      setInvalidFields((prev) =>
        prev.some((field) => field.name === "password")
          ? prev
          : [...prev, { name: "password", mes: "Password needs 6 characters or more" }]
      );
    } else {
      // If the length is sufficient, remove the error message if any
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== "password")
      );
    }
  };
  const handleEmailKeyUp = (event) => {
    const { value } = event.target;
  
    // Check if the email is not in the correct format after the change
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.match(regex)) {
      setInvalidFields((prev) =>
        prev.some((field) => field.name === "email")
          ? prev
          : [...prev, { name: "email", mes: "Invalid email, please check the correct email" }]
      );
    } else {
      // 
      setInvalidFields((prev) =>
        prev.filter((field) => field.name !== "email")
      );
    }
  };
  return (
    <div className="flex items-center justify-center h-[47px] w-full bg-[#f5f5f5]">
      <div className="w-main flex items-center justify-between">
        <div className="flex items-center">
          <MdEmail />
          <span className="text-14 flex items-center border-r border-gray-300 px-2">
            Thang@gmail.com
          </span>
          <span className="px-2"></span>
          <span className="text-gray-500 text-14">
            Free Shipping for all Order of $99
          </span>
        </div>
        <div>
          <div className="flex items-center">
            <FaFacebook className="mr-8" size={16} />
            <FaTwitter className="mr-8" size={16} />
            <span className="relative">
              <FaLinkedinIn size={16} className="mr-2" />
              <span
                className="absolute top-0 h-full border-r border-gray-700"
                style={{ right: "-10px" }}
              ></span>
            </span>
            <FaUserCircle
              onClick={handleOpen}
              className="ml-8 mr-2 hover:text-white hover:bg-[#7fad39] bg-white rounded-full cursor-pointer"
              size={16}
            />
            <span
              className="cursor-pointer hover:text-[#7fad39]"
              onClick={handleOpen}
            >
              {loggedInEmail ? loggedInEmail : "Login"}
            </span>
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
                  width: 500,
                  height: 450,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  maxHeight: 450,
                  p: 4,
                  borderRadius: 2,
                  outline: "none",
                }}
                className="text-center"
              >
                <span
                  className="text-[#7fad39] font-bold text-4xl mt-5"
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Login
                </span>
                <div className="mt-10">
                  <div className="mb-5">
                    <input
                      className="border-gray-300 border focus:outline-none w-[437px] h-[52px] rounded-sm mb-2 p-2"
                      placeholder="Email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onKeyUp={handleEmailKeyUp}
                    />
                    {invalidFields.map(
                      (field, index) =>
                        field.name === "email" && (
                          <p key={index} className="text-red-500">
                            {field.mes}
                          </p>
                        )
                    )}
                  </div>
                  <div className="mb-5">
                    <input
                      className="border-gray-300 border focus:outline-none w-[437px] h-[52px] rounded-sm mb-2 p-2"
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      onKeyUp={handlePasswordKeyUp}
                    />
                    {invalidFields.map(
                      (field, index) =>
                        field.name === "password" && (
                          <p key={index} className="text-red-500">
                            {field.mes}
                          </p>
                        )
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-[437px] h-[39px] bg-[#7fad39] text-white mb-8 rounded-sm text-lg"
                  onClick={() => handleLoginClick()}
                >
                  Login
                </button>

                <div className="flex justify-between">
                  <a
                    className="text-blue-500 font-semibold"
                    href="http://localhost:3000/"
                  >
                    Go home
                  </a>
                  <a className="text-blue-500 font-semibold" href="register">
                    Create account
                  </a>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TopHeader);
