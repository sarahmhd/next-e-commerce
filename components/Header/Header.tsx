import HeaderLower from "../HeaderLower/HeaderLower";
import HeaderTop from "../HeaderTop/HeaderTop";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div>
      <HeaderTop />
      <HeaderLower />
    </div>
  );
}

export default Header;
