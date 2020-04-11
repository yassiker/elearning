import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const AccountMenu = ({ logout, switchModes, applicationMode }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
  };

  const handleProfile = () => {
    console.log("Profile: ");
    setAnchorEl(null);
  };

  const handleAccount = () => {
    console.log("account: ");
    setAnchorEl(null);
  };

  const handleModeSwitch = () => {
    switchModes();
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar style={{ backgroundColor: "green" }}>
          <AccountCircleIcon />
        </Avatar>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleAccount}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem onClick={handleModeSwitch}>
          {applicationMode === "Teacher"
            ? "Switch to Student View"
            : "Switch to Teacher Menu"}
        </MenuItem>
      </Menu>
    </div>
  );
};
