import { useState } from "react";
import { Outlet } from "react-router-dom";

import FooterComponent from "../partials/footer";
import HeaderComponent from "../partials/header";

export default function RootElement() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}
