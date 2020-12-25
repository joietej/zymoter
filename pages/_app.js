import React from "react";
import { RecoilRoot } from "recoil";
import App from "../app/App";
import "../styles/app.scss";

const NextApp = (props) => {
  return (
    <RecoilRoot>
      <App {...props}></App>
    </RecoilRoot>
  );
};

export default NextApp;
