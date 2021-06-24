import React from "react";
import { DivHeader } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";


const Header = () => {
    const history = useHistory()
    return (
        <DivHeader>
            <button onClick={() => goToFeed(history)}>Feed</button>
            <button onClick={() => goToLogin(history)}>Login</button>
        </DivHeader>
    )
}

export default Header