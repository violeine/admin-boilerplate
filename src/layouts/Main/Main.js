import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

import { Sidebar, Topbar, Footer } from "./components";
import SnackBar from "../../theme/SnackBar";
import styles from "./styles";

const Main = props => {
  const { classes, children } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? "persistent" : "temporary"}
      />
      <main className={classes.content}>
        {children}
        <SnackBar />
        <Footer />
      </main>
    </div>
  );
};

export default withStyles(styles)(Main);
