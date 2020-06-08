import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../store/actions/actions";
import "./login.css";

const Login = (props) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    props.attemptLogin(login).then((login) => {
      if (login) {
        props.history.push("/");
      }
    });
  };

  return (
    <div className="login-outerwrap">
      <div className="row no-gutters login-row">
        <div className="col-md-6 login-welcomepage">
          <div className="welcome-inner">
            <div className="login-welcomepage-logo">
              <a href="#">
                <img src="images/logo-1.png" alt="" />
              </a>
            </div>
            <h2>Welcome</h2>
            <p>Sign in to continue access pages</p>
          </div>
        </div>
        <div className="col-md-6 login-signinpage">
          <div className="login-inner">
            <h3>sign in</h3>
            <form action="">
              <input
                value={login.email}
                type="text"
                name="email"
                placeholder="Email Address"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="password"
                value={login.password}
                name="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
              />
            </form>
            <button onClick={() => handleSubmit()}>CONTINUE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (cred) => dispatch(loginUser(cred)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
