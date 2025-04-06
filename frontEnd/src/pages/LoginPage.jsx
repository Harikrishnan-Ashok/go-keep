import { Stack, Typography } from "@mui/material";
import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <Stack overflow={"hidden"} width={"100%"} height={"95vh"} direction={"column"}>
      <Stack
        flex={1} 
        justifyContent="center" 
        alignItems="center"
        gap={2}
      >
        <Typography variant="h2">GO-KEEP</Typography>
        <Typography variant="subtitle1"> A complete Solution for All your Notes in a single place</Typography>
      </Stack>

      <Stack
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <LoginForm />
      </Stack>
    </Stack>
  );
}
