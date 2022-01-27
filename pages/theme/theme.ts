import { maxWidth } from "@mui/system";
import { createTheme } from "@mui/material";

const theme:any = createTheme({
  breakpoints: {
    values: {
      xs: 360,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl:1600,
    },
  },
});

export default theme;