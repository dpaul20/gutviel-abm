import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex direction="column" minHeight="100vh">
      <Navbar />
      <Flex flex="1">{children}</Flex>
      {/* Aquí podrías agregar un pie de página si lo deseas */}
    </Flex>
  );
}
