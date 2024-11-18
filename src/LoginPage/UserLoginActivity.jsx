import React, { useState } from "react";
import firebase from "../FIREBASE/firebase";
import toast from "react-hot-toast";
import "./UserLoginActivity.css";

const UserLoginActivity = () => {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    const { name, email, password, confirm_password } = formData;
    setError("");

    if (!name || !email || !password || !confirm_password) {
      setError("All fields are required");
      return;
    }

    if (password !== confirm_password) {
      setError("Passwords do not match");
      return;
    }

    const registerPromise = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await firebase.database().ref("users").child(user.uid).set({ name, email });
        await user.sendEmailVerification();
        setFormType("login");
      });

    toast.promise(registerPromise, {
      loading: "Registering, please wait...",
      success: "Registration successful! Email sent for verification.",
      error: (err) =>
        err.code === "auth/email-already-in-use"
          ? "Email is already registered."
          : "Failed to register.",
    });
  };

  const handleLogin = async () => {
    const { email, password } = formData;
    setError("");

    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    const loginPromise = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          throw new Error("Please verify your email before logging in");
        }
        toast.success("Login successfully");
      });

    toast.promise(loginPromise, {
      loading: "Logging in, please wait...",
      success: "Login successful!",
      error: (err) =>
        err.message === "Please verify your email before logging in"
          ? "Please verify your email."
          : "Failed to login.",
    });
  };

  const handleForgotPassword = async () => {
    const { email } = formData;
    setError("");

    if (!email) {
      setError("Email is required");
      return;
    }

    const forgotPromise = firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setFormType("login");
        toast.success("Password reset email sent!");
      });

    toast.promise(forgotPromise, {
      loading: "Sending reset email...",
      success: "Password reset email sent!",
      error: "Failed to send password reset email.",
    });
  };

  const handleSubmit = () => {
    if (formType === "login") handleLogin();
    if (formType === "register") handleRegister();
    if (formType === "forgot") handleForgotPassword();
  };

  return (
    <div className="userlogin_container">
      <div className="userlogin_logo_text">
        <img className="userlogin_logo_text_img" alt="Logo" />
        <span className="userlogin_logo_text_span01">CBIT CAREERS</span>
      </div>
      <div className="userlogin_text_login">
        <div className="userlogin_text">
          <span className="userlogin_text_span01">Dear Candidate,</span>
          <span className="userlogin_text_span02">Welcome to CBIT CAREERS</span>
          <span className="userlogin_text_span03">New Users:</span>
          <span className="userlogin_text_span04">
            <span id="userlogin_text_span04">
              Login with your personal email id for new registration
            </span>
          </span>
          <span className="userlogin_text_span05">Existing Users:</span>
          <span className="userlogin_text_span06">
            <span id="userlogin_text_span06">
              Login with the username (Email Id)
            </span>
          </span>
        </div>
        <div className="userlogin_login">
          <div
            className="userlogin_login_container"
            style={{
              height: formType === "register" ? "450px" : "350px",
              overflowY: formType === "register" ? "auto" : "hidden",
            }}
          >
            <div className="login_container_title">
              <span className="login_container_title_span01">
                {formType === "login" && "Login"}
                {formType === "register" && "Register"}
                {formType === "forgot" && "Forgot Password"}
              </span>
            </div>
            <div
              className="login_conatiner_email_password"
              style={{
                overflowY: formType === "register" ? "auto" : "hidden",
              }}
            >
              {formType !== "forgot" && (
                <>
                  {formType === "register" && (
                    <div className="login_fr01_inner01">
                      <span className="span_fr01_inner01">Name</span>
                      <input
                        className="input_fr01_inner01"
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                  <div className="login_fr01_inner01">
                    <span className="span_fr01_inner01">Email</span>
                    <input
                      className="input_fr01_inner01"
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="login_fr01_inner02">
                    <span className="span_fr01_inner02">Password</span>
                    <input
                      className="input_fr01_inner02"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  {formType === "register" && (
                    <div className="login_fr01_inner04">
                      <span className="span_fr01_inner04">Confirm Password</span>
                      <input
                        className="input_fr01_inner04"
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        value={formData.confirm_password}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </>
              )}
              {formType === "forgot" && (
                <div className="login_fr01_inner01">
                  <span className="span_fr01_inner01">Email</span>
                  <input
                    className="input_fr01_inner01"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
            {error && <div className="error_message">{error}</div>}
            <div className="login_register_forgotpassword">
              {formType === "login" && (
                <>
                  <span
                    className="login_register_span01"
                    onClick={() => setFormType("register")}
                  >
                    Register
                  </span>
                  <span
                    className="login_forgotpassword_span02"
                    onClick={() => setFormType("forgot")}
                  >
                    Forgot Password?
                  </span>
                </>
              )}
              {(formType === "register" || formType === "forgot") && (
                <span
                  className="login_register_span01"
                  onClick={() => setFormType("login")}
                >
                  Back to Login
                </span>
              )}
            </div>
            <div className="login_container_submit">
              <button
                className="login_container_submit_button"
                onClick={handleSubmit}
              >
                {formType === "login" && "Login"}
                {formType === "register" && "Register"}
                {formType === "forgot" && "Submit"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginActivity;
