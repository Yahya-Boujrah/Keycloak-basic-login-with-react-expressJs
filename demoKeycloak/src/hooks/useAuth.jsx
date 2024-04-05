import { useState, useEffect, useRef } from "react";
import keycloak from "./keycloak";


function useAuth() {
    const isRun = useRef(false);
    const [isLogin, setLogin] = useState(false);

    useEffect(() => {
        if (isRun.current) return;

        isRun.current = true;

        keycloak
            .init({
                onLoad: "login-required",
            })
            .then((res) => {
                setLogin(res);
            });
    }, [])

    return isLogin;

}

export default useAuth;