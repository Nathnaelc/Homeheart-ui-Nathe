import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Text from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageCard from "../LandingPage/Hero";
import { useState } from "react";

const LoginForm = ({ handleLoginSubmit }) => {
  const defaultTheme = createTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    handleLoginSubmit({
      identifier: username,
      identifier: email,
      password,
    });
 
        if (password !== "correctPassword") {
          setPasswordError(true);
          return;
        } else {
          setPasswordError(false);
          handleSignIn({ email, password });
        }
  };

  const handleGoogleLogin = () => {
    // Redirect the user to the Google login page
    window.location.href = "http://localhost:3001/auth/google";
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSignIn}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email or Username"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <Typography color="error">Incorrect password!</Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#7E9BB6", color: "#ffffff" }}
              sx={{ mt: 3, mb: 6 }}
            >
              Sign In
            </Button>
            <Button
              type="button"
              fullWidth
              variant="contained"
              style={{ backgroundColor: "#7E9BB6", color: "#ffffff" }}
              sx={{ mt: 16, mb: 4 }}
              onClick={handleGoogleLogin}
            >
              Sign In with Google
            </Button>
          </Box>
          <Text sx={{ mt: 1, mb: 2 }}>
            Don't have an account? <Link href="/register">Register</Link>
          </Text>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
