import React, { useState } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

function googleLogin() {
  // const [name, setName] = useState(""); //Returns a stateful value, and a function to update it.
  // const [email, setEmail] = useState("");
  // const [url, setUrl] = useState("");
  const responseGoogle = response => {
    console.log(response);
  };

  return (
    <div className="google-login">
      <GoogleLogin
        clientId="1033457314298-onuge5u0f1k6tjnik9t9mfe9hm2bil47.apps.googleusercontent.com"
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            This is my custom Google button
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
