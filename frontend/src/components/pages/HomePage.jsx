import React from "react";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCarStore } from "../../store/car";
import CarCard from "../../components/CarCard";
const HomePage = () => {
  const { fetchCars, cars } = useCarStore();
  useEffect(() => {
    fetchCars();
  }, [fetchCars]);
  console.log("cars", cars);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </SimpleGrid>

        {cars.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="black"
          >
            No car information found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Add car information
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
