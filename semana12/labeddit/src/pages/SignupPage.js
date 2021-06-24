import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios"
import {BASE_URL} from "../constants/urls"

const SignupPage = () => {

  const {form, onChange, clear} = useForm({username: "", email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
    signup()
  }

  const signup = () => {
    axios.post(`${BASE_URL}/users/signup`, form)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }

  return (
    <>
      <div>
        <form onSubmit={onSubmitForm}>
          
        <input
          name={"username"}
          value={form.username}
          onChange={onChange}
          label={"username"}
          required
          type={"text"}
          >
          </input>

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
          >Fazer cadastro</button>

        </form>
        

      </div>
      
    </>
  );
};

export default SignupPage;