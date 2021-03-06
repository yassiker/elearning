import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Colors } from '../../Lib/Themes';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginComponent = ({
  onChangePassword,
  onChangeUserName,
  submitLogin,
  loading,
  passwordFieldIsEmpty,
  emailFieldIsEmpty,
}) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            onChange={onChangeUserName}
            error={emailFieldIsEmpty}
            helperText={emailFieldIsEmpty && 'Email field is empty!'}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangePassword}
            error={passwordFieldIsEmpty}
            helperText={passwordFieldIsEmpty && 'Password field is empty!'}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={submitLogin}
            style={{ backgroundColor: Colors.green, color: Colors.white }}
          >
            {'Sign In'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgetPassword" variant="body2" style={{ color: Colors.green }}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2" style={{ color: Colors.green }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginComponent;
