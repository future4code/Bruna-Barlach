import React from "react";
import { divHeader } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory()
    return (
        <divHeader>
            <button onClick={() => goToFeed(history)}>Feed</button>
            <button onClick={() => goToLogin(history)}>Login</button>
        </divHeader>
    )
}

export default Header