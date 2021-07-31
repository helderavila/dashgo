import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Helder Avila</Text>
        <Text color="gray.300" fontSize="small">oi@helderavila.com.br</Text>
      </Box>
      <Avatar
        size="md"
        name="Helder Avila"
        src="https://github.com/helderavila.png"
      />
    </Flex>
  )
}