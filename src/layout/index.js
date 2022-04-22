import React, { useEffect } from "react";
import ApplicationTopBar from "./SubComponents/ApplicationTopBar";
import LeftSideBar from "./SubComponents/LeftSideBar";

import LayoutProvider, { useLayoutContext } from "./LayoutContext";
import { Grid } from "@mui/material";

const Layout = ({ children, pageName }) => {
  return (
    <LayoutProvider pageName={pageName}>
      <ApplicationTopBar />
      <LeftSideBar />
      <Grid p={"30px"}>{children}</Grid>
    </LayoutProvider>
  );
};

export default Layout;
