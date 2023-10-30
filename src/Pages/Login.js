import { Row, Col, Image, Input, notification, Spin } from "antd";
import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";


const Login = ({ onSubmit }) => {
    //   const dispatch = useDispatch();
    const [loginState, setLoginState] = useState({
        sucessMessage: '',
    });
    const validateForm = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = "username is required";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password !== "" && values.password.length < 5) {
            errors.password = "At least 5 characters required";
        }

        console.log("Validating errors -- ", errors);

        return errors;
    };

    //   LOGIN API CALL



    const handleSubmit = async (e) => {
        // doLogin(values);
        onSubmit(e.username, e.password);
        setLoginState((prev) => {
            return {
                ...prev,
                sucessMessage: "Logged in successfully"
            }
        })
        console.log("Values=====>", e);
    };
    return (
        <div className="login-container d-flex justify-content-center" style={{ height: "100vh" }}>


            <div className="lg-conatiner " style={{
                width: "40%",
                display: 'flex',
                alignSelf: 'center',
                flexDirection: 'column'
            }} >
                {/* {formSubmitting ? (
              <Spin spinning={formSubmitting} />
            ) : (
              <> */}
                <div className="flex lg-header justify-content-center">
                    {/* <div className="flex pb-4">
                    <Image
                      preview={false}
                      src={logo}
                      width={85}
                      className="cr-logo1"
                    />
                    <span className="flex items-center head-text pl-3 pt-3">
                      Court Royale
                    </span>
                  </div> */}
                    <h1>Sign In</h1>
                </div>
                <div className="mt-2 align-items-center">
                    <Formik
                        initialValues={{
                            username: "",
                            password: "",
                        }}
                        validate={validateForm}
                        onSubmit={handleSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            setFieldTouched,
                            isSubmitting,
                        }) => {
                            return (
                                <form
                                    name="loginForm"
                                    className="loginForm"
                                    action="#"
                                    method="POST"
                                >
                                    <div className="formik-field_wrap row auth_form pb-3">
                                        <div className="formik-field-left col col-12 auth_field contents">
                                            Username
                                            <Input
                                                style={{ padding: "10px 15px", width: "90%" }}
                                                id="username"
                                                value={values.username}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="form-control username"
                                                autoComplete="off"
                                                data-testid="username-input"
                                            />
                                            {errors.username && (
                                                <p
                                                    style={{
                                                        display: "flex",
                                                        marginBottom: "24px",
                                                        color: "red",
                                                        fontSize: "small",
                                                        margin: "0",
                                                    }}
                                                    data-testid="username-error"
                                                >
                                                    {errors.username}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="formik-field_wrap row auth_form">
                                        <div className="formik-field-left col col-12 auth_field contents">
                                            Password
                                            <Input.Password
                                                style={{ padding: "10px 15px", width: "90%" }}
                                                type="password"
                                                id="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="form-control password"
                                                autoComplete="off"
                                                data-testid="password-input"
                                            />
                                            {errors.password && (
                                                <p
                                                
                                                    style={{
                                                        display: "flex",
                                                        marginBottom: "24px",
                                                        color: "red",
                                                        fontSize: "small",
                                                        margin: "0",
                                                        
                                                    }}
                                                    data-testid="password-error"
                                                >
                                                    {errors.password}
                                                </p>
                                            ) }
                                        </div>
                                    </div>
                                    <div>
                                        {loginState.sucessMessage !== '' ? (
                                            <p
                                                style={{
                                                    display: "flex",
                                                    marginBottom: "24px",
                                                    color: "red",
                                                    fontSize: "small",
                                                    margin: "0",
                                                }}
                                            >
                                                {loginState.sucessMessage}
                                            </p>
                                        ) : null}
                                    </div>

                                    <div className="form-group mt-3 flex justify-content-center">
                                        <button
                                            className="btn_login bg-back"
                                            role="button" name="Login"
                                            style={{
                                                backgroundColor: "blue",
                                                color: "white",
                                                width: "50%",
                                                display: "flex",
                                                justifyContent: "center"
                                            }
                                            }
                                            type="submit"
                                            data-testid="submit-btn"
                                            onClick={handleSubmit}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </div>
                {/* </>
            )} */}
            </div>

        </div >
    );
};

export default Login;
