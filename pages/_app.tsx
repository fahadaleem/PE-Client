import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import { useAuth } from "../store/auth";
import { useEffect, useState } from "react";
import { LoginForm } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    setUserLoggedIn(isAuthenticated);
  }, [isAuthenticated]);
  return (
    <ChakraProvider theme={theme}>
      {/* {userLoggedIn ? <Component {...pageProps} /> : <LoginForm />} */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
