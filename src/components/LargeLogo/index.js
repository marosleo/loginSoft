import React from "react";
import * as C from "./styles";
import largeLogoSoft from "../../images/largeLogoSoft.jpg"

const Logo = () => {
  return (
    <C.Logo>
        <img src={largeLogoSoft} style={{width: "100%", height: "100%"}}/>
    </C.Logo>
  );
};

export default Logo;
