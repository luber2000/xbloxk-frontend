import React, { Fragment, useState, useEffect, useContext } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";
import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn } from "../Constant";

import { useNavigate } from "react-router-dom";
import man from "../assets/images/dashboard/profile.png";

import CustomizerContext from "../_helper/Customizer";
// import OtherWay from "./OtherWay";
import { ToastContainer, toast } from "react-toastify";

import axios from 'axios';

const Signin = ({ selected }) => {
  
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const [rememberMe, setRememberMe] = useState(false); 

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", man);
    localStorage.setItem("Name", "Emay Walter");
  }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();

    try {
      // Realiza una solicitud POST al endpoint del backend
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/token`, new URLSearchParams({
      // const response = await axios.post(`${apiUrl}/token`, new URLSearchParams({
        username: email,
        password: password,
        // Asume que tienes un campo en el formulario para "recordar contraseña" que actualiza este estado
        remember: rememberMe
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // Si la respuesta es exitosa, almacena el token y actualiza el estado de inicio de sesión
      if (response.data.access_token) {
        localStorage.setItem('accessToken', response.data.access_token);
        // Aquí puedes decidir si también deseas almacenar el "refreshToken" o cualquier otra información
        localStorage.setItem('login', JSON.stringify(true));
        localStorage.setItem('Name', `${response.data.first_name} ${response.data.last_name}`);
        history(`${process.env.REACT_APP_PUBLIC_URL}/`);
        toast.success("Successfully logged in!..");
      }
    } catch (error) {
      // Manejar errores de inicio de sesión aquí
      console.error('Login error', error.response || error);
      toast.error("You entered wrong password or email!");
      localStorage.setItem('login', JSON.stringify(false));
    }
  };

  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <H4>{selected === "simpleLogin" ? "" : "Sign In With Simple Login"}</H4>
                  <P>{"Enter your email & password to login"}</P>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <div className="position-relative">
                      <Input className="form-control" type={togglePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password} />
                      <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                    </div>
                  </FormGroup>
                  <div className="position-relative form-group mb-0">
                    <div className="checkbox">
                      {/* <Input id="checkbox1" type="checkbox" /> */}
                      <Input id="checkbox1" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                      <Label className="text-muted" for="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                    <a className="link" href="#javascript">
                      {ForgotPassword}
                    </a>
                    <Btn attrBtn={{ color: "primary", className: "d-block w-100 mt-2", onClick: (e) => loginAuth(e) }}>{SignIn}</Btn>
                  </div>
                  {/* <OtherWay /> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signin;
