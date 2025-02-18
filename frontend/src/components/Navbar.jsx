import React from "react";

import { Button, Container, Flex, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCarStore } from "../store/car";
import { CiCirclePlus } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";

// this will be present in every page

const Navbar = () => {
  const { filterCars, fetchCars } = useCarStore();
  const handleFilterCar = async () => {
    filterCars();
  };
  const retrieveCar = async () => {
    fetchCars();
  };
  return (
    <Container maxW={"1140px"} px={4} bgColor="gray.300">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Button
          onClick={() => retrieveCar()}
          variant="white"
          size="sm"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
        >
          <Link to={"/"}>Show entire inventory </Link>
        </Button>

        <Flex gap="2">
          <Button
            onClick={() => handleFilterCar()}
            variant="white"
            size="sm"
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
          >
            <Link to={"/"}>Show all inventory older than 5 yrs</Link>
          </Button>
        </Flex>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiCirclePlus fontSize={20} />
            </Button>
          </Link>
          <Link to={"/update"}>
            <Button>
              <MdUpdate fontSize={20} />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
