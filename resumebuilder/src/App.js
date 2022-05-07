import * as React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Routing from "./routing";

function App() {
  return (
    <div>
      <div align="center">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              edge="start"
              style={{
                marginRight: 20,
              }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            {/* <marquee
              align="center"
              direction="down"
              behaviour="alternate"
              hspace="20px"
            > */}
            <Typography
              align="center"
              variant="h4"
              style={{
                flexGrow: 1,
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: "fantasy",
              }}
            >
              RESUME BUILDER
            </Typography>
            {/* </marquee> */}
            <Button color="inherit">LOGIN</Button>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        <Routing />
      </div>
    </div>
  );
}
export default App;
