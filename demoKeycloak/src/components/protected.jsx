import keycloak from "../hooks/keycloak";
import { useEffect, useRef } from "react";
import axios from "axios";

function Protected() {

  const isRun = useRef(false);
  useEffect(() => {

    if (isRun.current) return;

    isRun.current = true;

    axios
      .get('/documents')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))

  }, [])


  return (
    <>
      <div>
        protected
      </div>

      <button onClick={() => keycloak.logout()}>LogOut</button>

      {/* check if user authenticated */}
      {/* !!keycloak.authenticated */}

    </>
  )
}
export default Protected;
