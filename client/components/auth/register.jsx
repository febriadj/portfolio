import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from '../../styles/components/auth/register.css';

function Register({
  registerFormIsOpen,
  setAuth,
}) {
  const isDev = process.env.NODE_ENV === 'development';
  const { darkmode } = useSelector((state) => state);

  const [response, setResponse] = useState({
    success: false,
    message: '',
  });

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    key: '',
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
      const url = isDev ? 'http://localhost:8080/api/users/register' : '/api/users/register';

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

      setTimeout(() => {
        setAuth((prev) => ({
          ...prev,
          login: true,
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
      ${style.register}
      ${registerFormIsOpen && style.active}
      ${darkmode && style.dark}
    `}
    >
      <div className={style['register-wrap']}>
        <div className={style.header}>
          <div className={style.nav}>
            <h2 className={style.title}>Sign Up</h2>
            <button
              type="button"
              className={style.btn}
              onClick={() => {
                setAuth((prev) => ({
                  ...prev,
                  register: false,
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
          <label htmlFor="username" className={style.field}>
            <box-icon name="user" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <input
              type="text"
              name="username"
              id="username"
              className={style.control}
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className={style.field}>
            <box-icon name="envelope" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <input
              type="email"
              name="email"
              id="email"
              className={style.control}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="key" className={style.field}>
            <box-icon name="key" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <input
              type="password"
              name="key"
              id="key"
              className={style.control}
              placeholder="Permission Key"
              value={form.key}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="regis-password" className={style.field}>
            <box-icon name="lock-open-alt" color={darkmode ? '#ffffffdd' : '#000000dd'}></box-icon>
            <input
              type="password"
              name="password"
              id="regis-password"
              className={style.control}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={style['submit-btn']}>Sign Up</button>
        </form>
        <div className={style.footer}>
          <span className={style.ask}>
            <p className={style.text}>Already have an account?</p>
            <button
              type="button"
              className={style.btn}
              onClick={() => {
                setAuth((prev) => ({
                  ...prev,
                  login: true,
                  register: false,
                }));
              }}
            >
              Sign In
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
