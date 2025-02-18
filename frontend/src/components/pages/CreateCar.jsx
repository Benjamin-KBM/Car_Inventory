import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { React, useState } from "react";
import { Field } from "@/components/ui/field";
import { useCarStore } from "../../store/car";

const CreateCar = () => {
  const [car, setCar] = useState({
    make: "",
    model: "",
    image_url: "",
    registration_number: "",
    price: "",
    current_owner: "",
    year: "",
  });
  // --------------------------------------------------------------------------
  const { createCar } = useCarStore();
  const handleAddCar = async () => {
    const { success, message } = await createCar(car);

    if (!success) {
      alert(message);
    } else {
      alert(message);
    }
    setCar({
      make: "",
      model: "",
      image_url: "",
      registration_number: "",
      price: "",
      current_owner: "",
      year: "",
    });
  };
  return (
    <Container maxW={"800px"}>
      <VStack spacing={8}>
        <Heading p={4} as={"h1"} size={"2xl"} textAlign={"center"} mb={4}>
          Create New Car
        </Heading>

        <Box w={"full"} p={6} rounded={"lg"} shadow={"md"} bgColor="gray.300">
          <VStack spacing={4}>
            <Field label="Make">
              <Input
                placeholder="Add Make"
                name="make"
                type="string"
                value={car.make}
                onChange={(e) => setCar({ ...car, make: e.target.value })}
              />
            </Field>
            {/* ------------------------------------------------------------------ */}
            <Field label="Model">
              <Input
                placeholder="Price"
                name="price"
                type="string"
                value={car.model}
                onChange={(e) => setCar({ ...car, model: e.target.value })}
              />
            </Field>
            {/* --------------------------------------------------------------------- */}
            <Field label="Image Url">
              <Input
                placeholder="Image URL"
                name="image"
                type="string"
                value={car.image_url}
                onChange={(e) => setCar({ ...car, image_url: e.target.value })}
              />
            </Field>
            {/* ----------------------------------------------------------------- */}
            <Field label="Registration Number">
              <Input
                placeholder="Registration Number"
                name="registration_number"
                type="number"
                value={car.registration_number}
                onChange={(e) =>
                  setCar({ ...car, registration_number: e.target.value })
                }
              />
            </Field>
            {/* ------------------------------------------------------------------ */}
            <Field label="Price">
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={car.price}
                onChange={(e) => setCar({ ...car, price: e.target.value })}
              />
            </Field>
            {/* -------------------------------------------------------------------- */}

            <Field label="Current Owner">
              <Input
                placeholder="Current Owner"
                name="image"
                type="string"
                value={car.current_owner}
                onChange={(e) =>
                  setCar({ ...car, current_owner: e.target.value })
                }
              />
            </Field>
            {/* ------------------------------------------------------------------ */}
            <Field label="Year the car was manufactured">
              <Input
                placeholder="Year"
                name="date"
                type="number"
                value={car.year}
                onChange={(e) => setCar({ ...car, year: e.target.value })}
              />
            </Field>
            <Button onClick={handleAddCar} w="full">
              Add Car
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreateCar;
