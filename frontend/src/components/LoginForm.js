import React from 'react';

function LoginForm() {
  return (
    <>
      <form className="form">
        <input className="form" placeholder="login" />
        <input className="form" placeholder="password" type="password" />
        <button className="btn">Login</button>
        <button className="btn">Proceed without login</button>
      </form>
    </>
  );
}

export default LoginForm;
