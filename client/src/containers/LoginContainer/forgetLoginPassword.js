import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const ForgetLoginCredentials = () => {
  const classes = useStyles();
  return (
    <div style={{ flex: 1, height: "100%" }}>
      <Header noHeader />
      <Sidebar />
      <div
        className="content-wrapper"
        style={{
          display: "flex",
          flex: 1
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Forgot Password
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  id="email"
                  autoComplete="email"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  style={{ backgroundColor: "#008d4c", color: "white" }}
                >
                  Submit
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ForgetLoginCredentials;
