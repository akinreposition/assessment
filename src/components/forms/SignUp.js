import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// import AutomainContext from "../../context/automain/automainContext";
// import Popup from 'reactjs-popup';
import Popup from "../Popup/Popup";
import showPwdImg from "../../assets/svg/show-password.svg";
import hidePwdImg from "../../assets/svg/hide-password.svg";

export const SignUp = () => {
  // const automainContext = useContext(AutomainContext);
  // const alertContext = useContext(AlertContext);
  const history = useHistory();

  //   const { userSignUp } = automainContext;
  const [full_name, setFirstName] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [isRevealPwd1, setIsRevealPwd1] = useState(false);

  const [buttonPopup, setButtonPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setButtonPopup(false);
    }, 4000);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    //   const signUpData = {first_name,mobile_number,email, password1,password2}
    //   userSignUp(signUpData);
    setTimeout(() => {
      history.push("/login");
    }, 5000);
  };
  return (
    <div>
      <div className="card ba b--black-10 center">
        <div className="signin">
          <h6 className="signin-accountExists ">
            Already have an account
            <Link to="/login">
              <strong> Login</strong>
            </Link>
          </h6>
          <form className="signin-form" onSubmit={onSubmit}>
            <h3 className="signin_form-header">Register</h3>
            <div className="input-field my-1">
              <input
                type="text"
                className="input-box"
                required
                name="first_name"
                value={full_name}
                onChange={(e) => setFirstName(e.target.value)}
                spellCheck="true"
              />
              <label htmlFor="Full Name">First Name</label>
            </div>
            <div className="input-field my-1">
              <input
                type="number"
                className="input-box"
                required
                name="mobile_number"
                value={mobile_number}
                onChange={(e) => setMobile_number(e.target.value)}
              />
              <label htmlFor="">Phone Number</label>
            </div>
            <div className="input-field my-1">
              <input
                type="email"
                className="input-box"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="Full Name">Email</label>
            </div>
            <div className="input-field my-1 pwd-container">
              <input
                type={isRevealPwd ? "text" : "password"}
                className="input-box"
                required
                pattern=".{8,}"
                name="New password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
              <label htmlFor="">New Password</label>
              <img
                title={isRevealPwd ? "Hide password" : "Show password"}
                src={isRevealPwd ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd((prevState) => !prevState)}
                alt="display password"
              />
            </div>
            <div className="input-field my-1 pwd-container">
              <input
                type={isRevealPwd1 ? "text" : "password"}
                className="input-box"
                required
                pattern=".{8,}"
                name="New password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <label htmlFor="">Confirm Password</label>
              <img
                title={isRevealPwd1 ? "Hide password" : "Show password"}
                src={isRevealPwd1 ? hidePwdImg : showPwdImg}
                onClick={() => setIsRevealPwd1((prevState) => !prevState)}
                alt="display password"
              />
            </div>
            <button
              className="signin-button "
              onClick={() => setButtonPopup(true)}
            >
              {" "}
              CREATE ACCOUNT
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3 className="checkmail">Check your mail </h3>
              <h5 className="checkmail-content">
                A verification Link have been sent to your Email
                {email}
              </h5>
            </Popup>
          </form>
        </div>
      </div>
    </div>
  );
};
