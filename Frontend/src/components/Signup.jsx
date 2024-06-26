import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div
        id="my_modal_2"
        className="flex justify-center h-screen items-center"
      >
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-5 px-3">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="flex flex-col py-1 border w-80 mt-3 rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-5 px-3">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex flex-col py-1 border w-80 mt-3 rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-5 px-3">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="flex flex-col py-1 border w-80 mt-3 rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex text-center justify-around mt-4">
                <button className="bg-red-600 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200">
                  Signup
                </button>
                <p>
                  Already having account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
