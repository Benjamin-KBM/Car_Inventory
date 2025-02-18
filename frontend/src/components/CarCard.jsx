import React from "react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  useDisclosure,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { useCarStore } from "../../src/store/car";
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";

const CarCard = ({ car }) => {
  // State to updated Car
  const [updatedCar, setUpdatedCar] = useState(car);
  //   -----------------------------------------------------------------------
  const { deleteCar, updateCar, putAllCars } = useCarStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   -----------------------------------------------------------------------
  // This deletes the selected car data based on the objects id
  const handleDeleteCar = async (pid) => {
    const { success, message } = await deleteCar(pid);
    if (!success) {
      alert(message);
    } else {
      alert(message);
    }
  };
  //   -----------------------------------------------------------------------
  // Updates one or more object based on the id
  const handleUpdateCar = async (pid, updatedCar) => {
    const { success } = await updateCar(pid, updatedCar);

    if (!success) {
      alert("Car info not updated");
    } else {
      alert("Car has been updated");
    }
    onClose();
  };
  // --------------------------------------------------------------------------
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={car.image_url}
        alt={car.current_owner}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading fontWeight="bold" as="h3" size="md" mb={2}>
          {car.make}
        </Heading>

        <Heading as="h3" size="sm" mb={2}>
          {car.model}
        </Heading>
        <Text textStyle="xs">
          Registration Number - {car.registration_number}
        </Text>
        <Text textStyle="xs"> Current Owner - {car.current_owner}</Text>
        <Text textStyle="xs" color="black" mb={4}>
          Model Year - {car.year}
        </Text>
        <Text fontWeight="bold" fontSize="xl" color="black" mb={4}>
          R{car.price}
        </Text>

        {/* --------------------------------------------------------------------- */}
        <HStack spacing={2}>
          <DialogRoot>
            <DialogTrigger asChild>
              <MdEdit />
            </DialogTrigger>
            <DialogContent bgColor="gray.300">
              <DialogHeader>
                <DialogTitle>Update Car Information</DialogTitle>
              </DialogHeader>
              <DialogBody pb="4">
                <Stack gap="4">
                  <Field label="Make">
                    <Input
                      placeholder="Add Make"
                      name="make"
                      type="string"
                      value={updatedCar.make}
                      onChange={(e) =>
                        setUpdatedCar({ ...updatedCar, make: e.target.value })
                      }
                    />
                  </Field>
                  <Field label="Model">
                    <Input
                      placeholder="Model"
                      name="Model"
                      type="string"
                      value={updatedCar.model}
                      onChange={(e) =>
                        setUpdatedCar({ ...updatedCar, model: e.target.value })
                      }
                    />
                  </Field>
                  <Field label="Image Url">
                    <Input
                      placeholder="Image URL"
                      name="image"
                      type="string"
                      value={updatedCar.image_url}
                      onChange={(e) =>
                        setUpdatedCar({
                          ...updatedCar,
                          image_url: e.target.value,
                        })
                      }
                    />
                  </Field>
                  <Field label="Registration Number">
                    <Input
                      placeholder="Registration Number"
                      name="registration_number"
                      type="number"
                      value={updatedCar.registration_number}
                      onChange={(e) =>
                        setUpdatedCar({
                          ...updatedCar,
                          registration_number: e.target.value,
                        })
                      }
                    />
                  </Field>
                  <Field label="Price">
                    <Input
                      placeholder="Price"
                      name="price"
                      type="number"
                      value={updatedCar.price}
                      onChange={(e) =>
                        setUpdatedCar({ ...updatedCar, price: e.target.value })
                      }
                    />
                  </Field>
                  <Field label="Current Owner">
                    <Input
                      placeholder="Current Owner"
                      name="Current Owner"
                      type="string"
                      value={updatedCar.current_owner}
                      onChange={(e) =>
                        setUpdatedCar({
                          ...updatedCar,
                          current_owner: e.target.value,
                        })
                      }
                    />
                  </Field>
                </Stack>
              </DialogBody>
              <DialogFooter>
                <DialogTrigger asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button onClick={() => handleUpdateCar(car._id, updatedCar)}>
                    update
                  </Button>
                </DialogTrigger>
              </DialogFooter>
            </DialogContent>
          </DialogRoot>
          {/* ------------------------------------------------------------------- */}
          <AiFillDelete onClick={() => handleDeleteCar(car._id)} />
        </HStack>
      </Box>
    </Box>
  );
};

export default CarCard;
