import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Component {...pageProps} />
        {/* Aquí podrías agregar un pie de página si lo deseas */}
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
