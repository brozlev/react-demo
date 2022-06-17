import React, { useState } from "react";
import { login } from "../api";
import {TextField} from "../components/TextField";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    // You can explicitly navigate the React Router routes with this hook.
    // https://reactrouterdotcom.fly.dev/docs/en/v6/hooks/use-routes
    const navigate = useNavigate();

    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const onUsernameInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {currentTarget} = e;
        if(currentTarget){
            setUsername(currentTarget.value)
        }
    }

    const onPasswordInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {currentTarget} = e;
        if(currentTarget){
            setPassword(currentTarget.value)
        }
    }

    const callLogin = async () => {
        await login(userName, password);
        navigate("/dogs");
    }

    const onLogin = (e: React.MouseEvent) => {
        callLogin()
    }

    return <div>
        <TextField isFocusedInitially={true} label="Username" onChange={onUsernameInputTextChange} value={userName} />
        <TextField isFocusedInitially={false} label="Password" onChange={onPasswordInputTextChange} value={password} />
        <button onClick={onLogin}>Login</button>
    </div>
}