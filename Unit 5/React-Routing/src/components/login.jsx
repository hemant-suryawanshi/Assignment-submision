import { useContext } from "react";
import { AuthContext } from "../contexts/Authcontext";

import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { handleAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div>
      <input type="text" placeholder="Username" />

      <button
        onClick={() => {
          // make network req Post req.in/api/login with email and pass
          // token
          //change state of is Auth to true.

          handleAuth(true);

          // imperative.
          navigate(-2);
        }}
      >
        Submit
      </button>
    </div>
  );
};
