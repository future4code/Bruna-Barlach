import React from "react"
import useInput from "../hooks/useinput"
import {BASE_URL} from "../constants/urls"
import axios from "axios";

const LoginPage = () => {

    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")

    const onClickLogin = () => {
        const body = {email, password}
        axios.post(`${BASE_URL}/login`, body)
    }

    return (
        <div>
            <h3>Página de Login</h3>
            <input value={email} onChange={handleEmail} placeholder="E-mail" />
            <input value={password} onChange={handlePassword} placeholder="Senha" />
            <button onClick={onClickLogin}>Login</button>
        </div>
    );


};
export default LoginPage;

