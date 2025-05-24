import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const SignupPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-black text-white flex flex-col items-center justify-center p-10">
        <div className="text-center">
          <img src="/logo192.png" alt="Logo" className="w-20 mx-auto mb-4" />
          <h1 className="text-4xl font-semibold">BookWorm</h1>
          <h2 className="text-xl mt-2">LIBRARY</h2>
          <p className="mt-6 mb-2">Already have an account?</p>
          <Button
            variant="outlined"
            className="mt-4 text-white border-white hover:bg-white hover:text-black"
          >
            Sign In
          </Button>
        </div>
      </div>

      {/* Right Panel - Sign Up Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <Box className="w-full max-w-md space-y-6">
          <Typography variant="h4" className="text-center font-semibold">
            Sign Up
          </Typography>

          <TextField fullWidth label="Username" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            variant="outlined"
          />

          <Button variant="contained" color="primary" fullWidth>
            Create Account
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default SignupPage;
