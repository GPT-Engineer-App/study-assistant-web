import React, { useState } from "react";
import { ChakraProvider, Container, VStack, Heading, Input, Button, Text, Box, FormControl, FormLabel, InputGroup, InputRightElement, IconButton, useToast } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTrialActive, setIsTrialActive] = useState(true);
  const toast = useToast();

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Login Successful",
      description: "Welcome to your Study Assistant!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsTrialActive(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ChakraProvider>
      <Container centerContent p={4}>
        {!isLoggedIn ? (
          <VStack spacing={4} width="100%">
            <Heading>Student Study Assistant</Heading>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} placeholder="Enter your password" />
                <InputRightElement>
                  <IconButton icon={showPassword ? <FaEyeSlash /> : <FaEye />} onClick={toggleShowPassword} variant="unstyled" />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button colorScheme="blue" onClick={handleLogin}>
              Login
            </Button>
          </VStack>
        ) : (
          <VStack spacing={4} width="100%">
            <Heading>Welcome to Your Assistant</Heading>
            {isTrialActive ? <Text>Your trial period is active. Enjoy the features!</Text> : <Text>Your trial period has expired. Please subscribe to continue.</Text>}
            <Button colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </VStack>
        )}
      </Container>
    </ChakraProvider>
  );
};

export default Index;
