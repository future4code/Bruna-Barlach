import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../hooks/useForm";
import { goToFeed, goToSignUp } from "../routes/coordinator";
import axios from "axios"
import {BASE_URL} from "../constants/urls"
import useUnprotectedPage from "../hooks/useUnprotectedPage"

const LoginPage = () => {
  useUnprotectedPage()

  const {form, onChange, clear} = useForm({email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
    login()
  
  }

  const history = useHistory()

  const login = () => {
    axios.post(`${BASE_URL}/users/login`, form)
    .then(((res)=>{
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeed(history)
    }))
    .catch((err)=>alert("Erro no login"))
  }

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