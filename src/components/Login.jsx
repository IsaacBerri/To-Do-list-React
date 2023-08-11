import React from "react";
import "../style/Login.css";
import { Icon } from "@iconify/react";

const Login = () => {
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
              <Icon className="redes" icon="mdi:instagram" color="white" width="30" height="30" />
              <Icon 
                className="redes"
                icon="ic:baseline-facebook"
                color="white"
                width="30"
                height="30"
              />
              <Icon className="redes" icon="mdi:twitter" color="white" width="30" height="30" />
              <Icon className="redes" icon="mdi:github" color="white" width="30" height="30" />
            </figure>
          </div>
        </section>
        <form className="section2">
          <h2>Sign In</h2>
          <div className="input">
            <input type="text" placeholder="Email" required />
            <Icon className="icon" icon="ic:baseline-email" color="white" width="20" height="20" />
          </div>
          <div className="input">
            <input type="password" placeholder="Password" required />
            <Icon className="icon" icon="uil:padlock" color="white" width="20" height="20" />
          </div>
          <div className="optionPassword">
            <label><input type="checkbox" /> Remember me</label>
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
