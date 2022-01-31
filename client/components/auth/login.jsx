import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from '../../styles/components/auth/login.css';

function Login({
  loginFormIsOpen,
  setAuth,
}) {
  const isDev = process.env.NODE_ENV === 'development';
  const { darkmode } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [response, setResponse] = useState({
    success: false,
    message: '',
  });

  const [form, setForm] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const url = isDev ? 'http://localhost:8080/api/users/login' : '/api/users/login';

      const request = await (await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })).json();

      if (!request.success) throw request;

      setForm((prev) => ({
        ...prev,
        username: '',
        email: '',
        password: '',
        key: '',
      }));

      setResponse((prev) => ({
        ...prev,
        success: true,
        message: request.message,
      }));

      localStorage.setItem('token', request.data);

      dispatch({
        type: 'counter/isLoggedIn',
        payload: true,
      });

      setTimeout(() => {
        setAuth((prev) => ({
          ...prev,
          login: false,
          register: false,
        }))
      }, 1000);
    }
    catch (error0) {
      setResponse((prev) => ({
        ...prev,
        success: false,
        message: error0.message,
      }));
    }
  }

  return (
    <div className={`
      ${style.login}
      ${loginFormIsOpen && style.active}
      ${darkmode && style.dark}
    `}
    >
      <div className={style['login-wrap']}>
        <div className={style.header}>
          <div className={style.nav}>
            <h2 className={style.title}>Sign In</h2>
            <button
              type="button"
              className={style.btn}
              onClick={() => {
                setAuth((prev) => ({
                  ...prev,
                  login: false,
                }));
              }}
            >
              <box-icon name="x" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            </button>
          </div>
          <div className={style.response}>
            <p className={style.text}>{response.message}</p>
          </div>
        </div>
        <form method="post" className={style.form} onSubmit={handleSubmit}>
          <label htmlFor="usernameOrEmail" className={style.field}>
            <box-icon name="user" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <input
              type="text"
              name="usernameOrEmail"
              id="usernameOrEmail"
              className={style.control}
              placeholder="Username or Email"
              value={form.usernameOrEmail}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password" className={style.field}>
            <box-icon name="lock-open-alt" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <input
              type="password"
              name="password"
              id="password"
              className={style.control}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <div className={style.action}>
            <label htmlFor="remember" className={style.remember}>
              <input type="checkbox" name="remember" id="remember" />
              <p className={style.text}>Remember me</p>
            </label>
            <button type="button" className={style.btn}>Forgot password</button>
          </div>
          <button type="submit" className={style['submit-btn']}>Sign In</button>
        </form>
        <div className={style.footer}>
          <span className={style.ask}>
            <p className={style.text}>Don't have an account yet?</p>
            <button
              type="button"
              className={style.btn}
              onClick={() => {
                setAuth((prev) => ({
                  ...prev,
                  login: false,
                  register: true,
                }));
              }}
            >
              Sign Up
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
