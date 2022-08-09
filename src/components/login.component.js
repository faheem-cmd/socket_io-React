import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginCall } from "../utils/request";
import { TextField } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [hide, setHide] = useState(false);

  const handleNavigate = (e) => {
    e.preventDefault();
    console.log(email.length);
    if (email === "") {
      toast.info("Enter email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (password === "") {
      toast.info("Enter password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      loginCall(email, password)
        .then((res) => {
          if (res.status === "success") {
            console.log(res);
            toast.success("Successfully logged!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            notify(res.data.accessToken);
          } else {
            toast.warning("Inavlid Credentails !", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => {
          toast.warning("Inavlid Credentails !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  const notify = async (res) => {
    await localStorage.setItem("token", res);
    setTimeout(function () {
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>
            My Mess
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign In</h3>

            <div className="mb-3">
              <label>Email address</label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type={hide ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                  onClick={() => setHide(!hide)}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customCheck1"
                  style={{ paddingLeft: 10 }}
                >
                  Show password
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleNavigate(e)}
              >
                Submit
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
            <p className="forgot-password text-right" style={{ marginTop: 30 }}>
              Not <a href="#">Register ?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
