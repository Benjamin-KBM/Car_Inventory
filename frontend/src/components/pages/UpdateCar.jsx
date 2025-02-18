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

const UpdateCar = () => {
  const [updateCar, setUpdateCar] = useState({
    make: "",
    model: "",
    image_url: "",
    registration_number: "",
    price: "",
    current_owner: "",
  });
  // --------------------------------------------------------------------------
  const { updateMoreThanOneCar } = useCarStore();
  const handleUpdateCar = async () => {
    const { success } = await updateMoreThanOneCar(updateCar);

    if (!success) {
      alert("Inventory has been updated");
    } else {
      alert("Inventory not updated");
    }
    setUpdateCar({
      make: "",
      model: "",
      image_url: "",
      registration_number: "",
      price: "",
      current_owner: "",
    });
  };
  return (
    <Container maxW={"800px"}>
      <VStack spacing={8}>
        <Heading p={4} as={"h1"} size={"2xl"} textAlign={"center"} mb={4}>
          Make change across the entire inventory
        </Heading>

        <Box w={"full"} p={6} rounded={"lg"} shadow={"md"} bgColor="gray.300">
          <VStack spacing={4}>
            <Field label="Make">
              <Input
                placeholder="Add Make"
                name="make"
                type="string"
                value={updateCar.make}
                onChange={(e) =>
                  setUpdateCar({ ...updateCar, make: e.target.value })
                }
              />
            </Field>
            {/* ------------------------------------------------------------------ */}
            <Field label="Model">
              <Input
                placeholder="Price"
                name="price"
                type="string"
                value={updateCar.model}
                onChange={(e) =>
                  setUpdateCar({ ...updateCar, model: e.target.value })
                }
              />
            </Field>
            {/* --------------------------------------------------------------------- */}
            <Field label="Image Url">
              <Input
                placeholder="Image URL"
                name="image"
                type="string"
                value={updateCar.image_url}
                onChange={(e) =>
                  setUpdateCar({ ...updateCar, image_url: e.target.value })
                }
              />
            </Field>
            {/* ----------------------------------------------------------------- */}
            <Field label="Registration Number">
              <Input
                placeholder="Registration Number"
                name="registration_number"
                type="number"
                value={updateCar.registration_number}
                onChange={(e) =>
                  setUpdateCar({
                    ...updateCar,
                    registration_number: e.target.value,
                  })
                }
              />
            </Field>
            {/* ------------------------------------------------------------------ */}
            <Field label="Price">
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updateCar.price}
                onChange={(e) =>
                  setUpdateCar({ ...updateCar, price: e.target.value })
                }
              />
            </Field>
            {/* -------------------------------------------------------------------- */}

            <Field label="Current Owner">
              <Input
                placeholder="Current Owner"
                name="image"
                type="string"
                value={updateCar.current_owner}
                onChange={(e) =>
                  setUpdateCar({ ...updateCar, current_owner: e.target.value })
                }
              />
            </Field>

            <Button onClick={handleUpdateCar} w="full">
              Update Cars
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default UpdateCar;
