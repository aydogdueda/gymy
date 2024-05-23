import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "semantic-ui-react";
import { APP_BASE_URL } from "../../Config/Config";
import "./Register.css";
import { type } from "os";

export default function Register() {
  let history = useHistory();

  let [firstname, setfirstName] = useState("");
  let [lastname, setlastName] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let [formstatus, setFormStatus] = useState(false);

  let CleanInput = () => {
    setpassword("");
    setemail("");
    setfirstName("");
    setlastName("");
  };

  let RegisterRequest = () => {
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
        <Form Loading={formstatus}>
          <Form.Group widths="equal">
            <FormInput
              value={firstname}
              required
              Label="Adınız"
              control="input"
              placeholder="Adınız"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
            <FormInput
              required
              value={lastname}
              Label="Soyadınız"
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
            Label="E-posta"
            placeholder="E-posta"
            onChange={(e) => {
              setemail(e.target.value);
              type = "email";
            }}
          />
          <Form.Input
            required
            value={password}
            Label="Şifre"
            placeholder="Şifre"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
          />
          <Form.Checkbox
            required
            Label="Şartları ve Hükümleri kabul ediyorum"
          />

          <Button color="yellow" type="submit" onClick={RegisterRequest}>
            Üye Ol
          </Button>
        </Form>
      </div>
    </div>
  );
}
