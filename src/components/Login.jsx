import "../style/Login.css";
import { Icon } from "@iconify/react";
import { useErrorCredentials } from "../Hook/useErrorCredentials.js";

const Login = () => {
  const { errorCredentials, actualizarState } = useErrorCredentials();

  return (
    <main className="main">
      <div className="containerSection">
        <section className="section1">
          <div className="title">
            <h1>TO-DO list</h1>
          </div>
          <div className="info">
            <h2>Welcome!</h2>
            <h3>to our new website</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              accusamus! Rerum magnam porro facilis dolorem at quia eos nemo
              nam.
            </p>
            <figure>
              <Icon
                className="redes"
                icon="mdi:instagram"
                color="white"
                width="30"
                height="30"
              />
              <Icon
                className="redes"
                icon="ic:baseline-facebook"
                color="white"
                width="30"
                height="30"
              />
              <Icon
                className="redes"
                icon="mdi:twitter"
                color="white"
                width="30"
                height="30"
              />
              <Icon
                className="redes"
                icon="mdi:github"
                color="white"
                width="30"
                height="30"
              />
            </figure>
          </div>
        </section>
        <form
          className="section2"
          onSubmit={(ev) => {
            ev.preventDefault();
            actualizarState(ev.target.email.value, ev.target.password.value);
          }}
        >
          <h2>Sign In</h2>
          <div className="input">
            <input
              type="email"
              className={errorCredentials ? "animation" : ""}
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <Icon
              className={errorCredentials ? "icon iconAnimation" : "icon"}
              icon="ic:baseline-email"
              width="20"
              height="20"
            />
          </div>
          <div className="input">
            <input
              type="password"
              className={errorCredentials ? "animation" : ""}
              name="password"
              placeholder="Password"
              autoComplete="off"
              required
            />
            <Icon
              className={errorCredentials ? "icon iconAnimation" : "icon"}
              icon="uil:padlock"
              width="20"
              height="20"
            />
          </div>
          <div className="optionPassword">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Sign In</button>
          <p>Don't have an account? Sign Up</p>
        </form>
      </div>
    </main>
  );
};
export default Login;
