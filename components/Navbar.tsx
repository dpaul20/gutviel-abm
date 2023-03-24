import { Box, Flex, Text } from "@chakra-ui/react";
import Link from 'next/link'

const links = ["Products", "Categories", "Brands"];

export default function Navbar() {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={8}
      py={4}
      bg="gray.800"
      color="white"
    >
      <Box>Logo</Box>
      <Flex align="center">
        <Link href="/">
          <Text
            ml={4}
            fontSize="lg"
            fontWeight="semibold"
            cursor="pointer"
            _hover={{ color: "gray.300" }}
          >
            Home
          </Text>
        </Link>
        {links.map((link) => (
          <Link href={`/${link.toLowerCase()}`} key={link}>
            <Text
              ml={4}
              fontSize="lg"
              fontWeight="semibold"
              cursor="pointer"
              _hover={{ color: "gray.300" }}
            >
              {link}
            </Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
