import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";

const Register = () => {
  const {register, formState: { errors }, handleSubmit} = useForm();
  const {createUser} = useAuth()

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="card w-full max-w-sm shrink-0 shadow-2xl">
          Create An Account!
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-700 font-bold">Email is a required</p>
            )}

            <label className="label">Password</label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-700 font-bold">Password is a required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-700 font-bold">
                Password must be 6 characters or longer is required
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p><small>Already have an account? <Link to={'/login'}>Login</Link></small></p>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
