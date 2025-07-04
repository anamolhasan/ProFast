import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../socialLogin/SocialLogin";
import axios from "axios";
import useAxios from "../../../hooks/useAxios";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const axiosInstance = useAxios();
   const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || '/'

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(async (result) => {
        console.log(result.user);

        // update userinfo in the database
        const userInfo = {
          email: data.email,
          role: "user",
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };

        const userRes = await axiosInstance.post("/users", userInfo);
        console.log(userRes);

        // update user profile in firebase
        const userProfile = {
          displayName: data.name,
          photoURL: profilePic,
        };
        updateUserProfile(userProfile)
          .then(() => {
            console.log("profile name pic updated");
            navigate(from)
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    console.log(image);

    const formData = new FormData();
    formData.append("image", image);

    const imagUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;

    const res = await axios.post(imagUploadUrl, formData);
    console.log(res.data);
  };
  return (
    <div className="card  w-full">
      <div className="card-body px-10 py-16">
        <h1 className="card text-4xl  font-bold shadow-2xl">
          Create An Account!
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input w-full"
              placeholder="enter your name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-700 font-bold">name is a required</p>
            )}

            {/* photo */}
            <label className="label">Email</label>
            <input
              onChange={handleImageUpload}
              type="file"
              className="input w-full"
              placeholder="Email"
            />

            {/* email */}
            <label className="label">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-700 font-bold">Email is a required</p>
            )}

            {/* password */}
            <label className="label">Password</label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              className="input w-full"
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
          <p>
            <small>
              Already have an account? <Link className="font-bold ml-1" to={"/login"}>Login</Link>
            </small>
          </p>
        </form>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
