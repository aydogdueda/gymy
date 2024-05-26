import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Header, Button } from "semantic-ui-react";
import config from "../../config";
import "./Register.css";
import { type } from "os";

const Register = () => {
  const history = useNavigate();

  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [formstatus, setFormStatus] = useState(false);

  const cleanInput = () => {
    setpassword("");
    setemail("");
    setfirstName("");
    setlastName("");
  };

  const RegisterRequest = () => {
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      password !== ""
    ) {
      setFormStatus(true);
      setTimeout(() => {
        setFormStatus(false);
      }, 6000);
    }
  };
  return (
    <div className="register">
      <div className="register-form">
        <Header as="h2" style={{ color: "white" }}>
          Üye Ol
        </Header>
        <Form loading={formstatus}>
          <Form.Group widths="equal">
            <Form.Input
              value={firstname}
              required
              label="Adınız"
              control="input"
              placeholder="Adınız"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
            <Form.Input
              required
              value={lastname}
              label="Soyadınız"
              control="input"
              placeholder="Soyadınız"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Input
            required
            value={email}
            label="E-posta"
            placeholder="E-posta"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
          />
          <Form.Input
            required
            value={password}
            label="Şifre"
            placeholder="Şifre"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
          />
          <Form.Checkbox
            required
            label="Şartları ve Hükümleri kabul ediyorum"
          />

          <Button color="yellow" type="submit" onClick={RegisterRequest}>
            Üye Ol
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
