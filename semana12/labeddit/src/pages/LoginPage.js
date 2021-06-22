import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { goToSignUp } from "../routes/coordinator";

const LoginPage = () => {
  const {form, onChange, clear} = useForm({email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
  
  }

  const history = useHistory()

  return (
    <>
      <div>
        <form onSubmit={onSubmitForm}>
          <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"e-mail"}
          required
          type={"email"}
          >
          </input>

          <input
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"senha"}
          required
          type={"password"}
          >
          </input>

          <button
          type={"submit"}
          >Fazer login</button>

        </form>
        <button
          type={"submit"}
          onClick={() => goToSignUp(history)}
          >Fazer cadastro</button>

      </div>
      
    </>
  );
};

export default LoginPage;