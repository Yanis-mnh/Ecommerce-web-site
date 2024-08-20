import { ChevronDownIcon, SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  Spacer,
  Text,
  MenuItem,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import { useState } from "react";

const serchBar = (openSerch: boolean) => {
  return (
    openSerch && (
      <Input
        margin={"0 0 0 10px"}
        width={"50%"}
        size={"md"}
        placeholder="Search Product"
      />
    )
  );
};

const NavBar = () => {
  const [openSerch, setOpenSerch] = useState(false);
  return (
    <Flex
      minH={"3em"}
      bg={"gray.200"}
      justify={"space-between"}
      alignItems={"center"}
      position={"sticky"}
    >
      <div className="test"></div>
      <Heading as={"h6"}>YANIX</Heading>
      <Spacer></Spacer>
      {!openSerch && (
        <>
          <Menu>
            <MenuButton as={Text} cursor={"pointer"}>
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
          <Menu>
            <MenuButton>
              {" "}
              Pages <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to={"/pages"}>
                Featured Products
              </MenuItem>
              <MenuItem>FAQ</MenuItem>
              <MenuItem>Contact Us</MenuItem>
              <MenuItem>Track Order</MenuItem>
              <MenuItem>Login/Register</MenuItem>
            </MenuList>
          </Menu>
          <Link to={"/about-us"}>
            <Text p={"10px"}>About Us</Text>
          </Link>
          <Link to={"/blog"}>
            <Text p={"10px"}>Blog</Text>
          </Link>
        </>
      )}
      <Spacer />
      <Chart />
      {serchBar(openSerch)}

      <Button
        bg={"transparent"}
        _active={"transparent"}
        mx={"10px"}
        cursor={"pointer"}
        boxSize={"1.5em"}
        leftIcon={openSerch ? <SmallCloseIcon /> : <SearchIcon />}
        onClick={() => {
          setOpenSerch(!openSerch);
        }}
      />
    </Flex>
  );
};

export default NavBar;
