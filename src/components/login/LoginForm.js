import React from 'react';

function LoginForm({ onLogin }) {
  return (
    <form onSubmit={onLogin}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;