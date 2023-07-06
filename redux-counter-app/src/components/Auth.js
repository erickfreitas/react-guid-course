import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  let authContent = (
    <form onSubmit={loginHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button>Login</button>
    </form>
  );

  if (isAuthenticated) {
    authContent = (
      <h2>Welcome! You are logged in</h2>
    );
  }

  return (
    <main className={classes.auth}>
      <section>{authContent}</section>
    </main>
  );
};

export default Auth;
