import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  Spacer,
  Text,
  MenuItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Chart from "./Chart";

const NavBar = () => {
  return (
    <Flex bg={"gray.200"} justify={"space-between"} alignItems={"center"}>
      <div className="test"></div>
      <Heading as={"h6"}>YANIX</Heading>
      <Spacer></Spacer>
      <Menu>
        <MenuButton as={Text}>
          Home
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} to={"/pages"}>
            Featured Products
          </MenuItem>
          <MenuItem>Best Sellers</MenuItem>
          <MenuItem>New Arrivals</MenuItem>
          <MenuItem>Seasonal Offers</MenuItem>
        </MenuList>
      </Menu>
      <Link to={"/shop"}>
        <Text p={"10px"}>Shop</Text>
      </Link>
      <Link to={"/pages"}>
        <Text p={"10px"}>
          Pages <ChevronDownIcon />
        </Text>
      </Link>
      <Link to={"/about-us"}>
        <Text p={"10px"}>About Us</Text>
      </Link>
      <Link to={"/blog"}>
        <Text p={"10px"}>Blog</Text>
      </Link>
      <Spacer />
      <Chart />
      <SearchIcon mx={"10px"} cursor={"pointer"} boxSize={"1.5em"} />
    </Flex>
  );
};

export default NavBar;
