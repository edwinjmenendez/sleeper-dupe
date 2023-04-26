import * as React from "react";
import styles from './App.module.css'
import { Routess } from "./components/signupRoutes/Routes";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";

function App() {
  return (
    <div className={styles['app-container']}  >
      <Routess />
        {/* <Signup /> */}
        {/* <Login /> */}
    </div>
  );
}



export default App;
