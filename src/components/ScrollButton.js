import React from "react";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fab
      color="primary"
      aria-label="scroll-to-top"
      size="small"
      sx={{
        backgroundColor: "#6C63FF",
        position: "fixed",
        bottom: 15,
        right: 20,
      }}
      onClick={handleScrollToTop}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTopButton;
