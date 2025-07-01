import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const SocialLogin = () => {

    const {signInWithGoogle} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || '/'

    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then(result => {
            console.log(result.user)
            navigate(from)
          })
          .catch(error => {
            console.log(error)
          })
    }
  return (
    <div>
      <div className="divider">OR</div>
     <div className="space-y-5 text-center">
   
         {/* GitHub */}
      {/* <button className="btn bg-black text-white border-black btn-block">
        <FaGithub />
        Login with GitHub
      </button> */}

      {/* Google */}
      <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5] ">
        <FaGoogle />
        Login with Google
      </button>

      {/* Facebook */}
      {/* <button className="btn bg-[#1A77F2] text-white border-[#005fd8] btn-block">
        <FaFacebook />
        Login with Facebook
      </button> */}

      {/* X */}
      {/* <button className="btn bg-black text-white border-black btn-block">
        <FaX />
        Login with X
      </button> */}
        
     </div>
    </div>
  );
};

export default SocialLogin;
