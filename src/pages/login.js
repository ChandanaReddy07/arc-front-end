import React from "react";
import "./login.css";

const Login = ({ setLogin }) => {
    return (
        <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div class="w-full  max-w-7xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  ">
                <div class="loginmain">
                    <div className="cancelparent">
                        <button
                            className="cancel"
                            onClick={() => {
                                setLogin(false);
                            }}
                        >
                            &times;
                        </button>
                    </div>
                    <div class="login">
                        <div class="section-1">
                            <div class="content">
                                <div class="image">
                                    <img
                                        src="/Assets/images/image 8.png"
                                        alt="arc"
                                    ></img>
                                </div>
                                <div class="text">
                                    Help our furry little friends find a home
                                    for themselves.
                                </div>
                            </div>
                        </div>
                        <div class="section-2">
                            <form class="form">
                                <div class="form-control">
                                    <label for="email">Email</label>
                                    <input
                                        class="loginp"
                                        type="text"
                                        required
                                        id="email"
                                        placeholder="example.mail@yourmail.com"
                                    ></input>
                                </div>
                                <div class="form-control">
                                    <label for="password">Password</label>
                                    <input
                                        class="loginp"
                                        type="password"
                                        required
                                        id="password"
                                        placeholder="Password"
                                    ></input>
                                </div>
                                <div className="buttonparent">
                                    <div class="buttons">
                                        <p class="signin button">Login</p>
                                        <p class="signup button">
                                            New User? Sign up
                                        </p>
                                    </div>
                                    <p class="or">OR</p>
                                    <div class="google button">
                                        <p>
                                            <img
                                                src="/Assets/images/google.png"
                                                alt="google"
                                                className="inline"
                                            />
                                            continue with google
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
