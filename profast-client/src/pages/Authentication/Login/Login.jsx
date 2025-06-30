import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
    const {register,
        formState: {errors}, 
        handleSubmit
    } = useForm()


    const onSubmit = data => {
        console.log(data)
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input 
          {...register('email')}
          type="email" 
          className="input" 
          placeholder="Email" 
          />

          <label className="label">Password</label>
          <input 
          {...register('password',{
            required: true,
            minLength: 6
          })}
          type="password" 
          className="input" 
          placeholder="Password" 
          />
          {
            errors.password?.type === 'required' && <p className="text-red-600 font-bold">Password is required</p>
          }
        {
            errors?.password?.type === 'minLength' && <p className="text-red-600 font-bold">Password Must be 6 characters or longer</p>
        }

          <div><a className="link link-hover">Forgot password?</a> </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p><small>New to this website? <Link to={'/register'}>Register</Link></small></p>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
