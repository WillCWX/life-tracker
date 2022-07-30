import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function LoginPage({ setAuth }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUser(e) {
    setUser(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!user || !password) {
      alert("Please enter your credentials");
      setUser("");
      setPassword("");
      return;
    }
    if (
      user !== process.env.REACT_APP_USERNAME ||
      password !== process.env.REACT_APP_PASSWORD
    ) {
      alert("Invalid Credentials");
      setUser("");
      setPassword("");
      return;
    }

    setAuth(true);
    navigate("/first/dashboard");
  }

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="Header">
          <Typography variant="h3" component="h1">
            <b>Welcome to Life Tracker!</b>
          </Typography>
        </div>
        <Typography variant="h5">Sign in to continue</Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-username"
            label="Username"
            value={user}
            onChange={handleUser}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="outlined-password"
            label="Password"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </>
  );
}
