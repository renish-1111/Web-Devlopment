import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });z
  };

  // const onSubmit = (data) => console.log(data);

  const onSubmit = async (data) => {
    // await delay(2);
    if (data.password === data.username) {
      setError("myForm", { message: "username and password must not be same" });
    }
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let res = await r.text();
    console.log(data, res);
  };
  return (
    <>
      {isSubmitting && <div> Loading... </div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              minLength: { value: 3, message: "Min value is 3" },
              maxLength: { value: 20, message: "Max value is 20" },
              required: true,
            })}
            type="username"
            name="username"
            id=""
          />
          {errors.username && (
            <div style={{ color: "red" }}> {errors.username.message}</div>
          )}
          <input
            {...register("password", {
              minLength: { value: 8, message: "Enter eight char password" },
              maxLength: { value: 16, message: "Max lenght is 20" },
              required: true,
            })}
            type="password"
            name="password"
            id=""
          />
          {errors.password && (
            <div style={{ color: "red" }}> {errors.password.message}</div>
          )}

          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myForm && (
            <div style={{ color: "red" }}> {errors.myForm.message} </div>
          )}
        </form>
      </div>
    </>
  );
}

export default App;
