import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex bg={"gray.200"} justify={"space-between"}>
      <Heading as={"h6"}>Turan</Heading>
      <Spacer></Spacer>
      <Link to={"/"}>
        <Text p={"10px"}>Home</Text>
      </Link>
      <Link to={"/shop"}>
        <Text p={"10px"}>Shop</Text>
      </Link>
      <Link to={"/pages"}>
        <Text p={"10px"}>Pages</Text>
      </Link>
      <Link to={"/about-us"}>
        <Text p={"10px"}>About Us</Text>
      </Link>
      <Link to={"/blog"}>
        <Text p={"10px"}>Blog</Text>
      </Link>
      <Spacer />
    </Flex>
  );
};

export default NavBar;
