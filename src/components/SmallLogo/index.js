import React from "react";
import * as C from "./styles";
import smallLogoSoft from "../../images/smallLogoSoft.png"

const SmallLogo = () => {
  return (
    <C.SmallLogo>
        <img src={smallLogoSoft} style={{width: "100%", height: "100%"}}/>
    </C.SmallLogo>
  );
};

export default SmallLogo;
