import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  HStack,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  SimpleGrid,
  Grid,
  GridItem,
  background,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PNCoreValueForm } from "./PNCoreValueForm";
import { BACKEND_URL } from "../../backendUrl";
import axios from "axios";

export const PerformanceEvaluation = () => {
  const [response, setResponse] = React.useState([{}]);
  const [pncore, setpncore] = useState();

  let evaluationForm = async (id: any) => {
    const resp = axios.get(`${BACKEND_URL}/api/sections/${id}`).then((res) => {
      const formData = res;
      setResponse(formData.data.data);
    });
  };
  console.log(response);
  return (
    <>
      <Box
        minH="100vh"
        d="flex"
        flexDirection="column"
        justifyContent="center"
        maxW="500px"
        mx="auto"
      >
        <Heading fontSize={"4xl"} color="brand.primary" textAlign="center">
          Performance Evaluation Form{" "}
        </Heading>
        <form>
          <Stack spacing={4} my={6}>
            <SimpleGrid columns={2} spacing={6}>
              <GridItem colSpan={[2, 1]}>
                <FormControl>
                  <FormLabel>Student Name</FormLabel>
                  <Input
                    type="text"
                    value={"Test"}
                    disabled
                    borderColor="brand.fieldBorder"
                    _focus={{
                      borderColor: "#000",
                      boxShadow: "0 0 0 1px #000",
                    }}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl>
                  <FormLabel>P No</FormLabel>
                  <Input
                    type="text"
                    value={123}
                    disabled
                    borderColor="brand.fieldBorder"
                    _focus={{
                      borderColor: "#000",
                      boxShadow: "0 0 0 1px #000",
                    }}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl>
                  <FormLabel>Course No</FormLabel>
                  <Input
                    type="text"
                    value={"ICS"}
                    disabled
                    borderColor="brand.fieldBorder"
                    _focus={{
                      borderColor: "#000",
                      boxShadow: "0 0 0 1px #000",
                    }}
                  />
                </FormControl>
              </GridItem>

              <GridItem colSpan={[2, 1]}>
                <FormControl id="email">
                  <FormLabel>Course Inch</FormLabel>
                  <Input
                    type="text"
                    value={"ABC"}
                    disabled
                    borderColor="brand.fieldBorder"
                    _focus={{
                      borderColor: "#000",
                      boxShadow: "0 0 0 1px #000",
                    }}
                  />
                </FormControl>
              </GridItem>
            </SimpleGrid>
            <Button
              onClick={() => {
                setpncore(true);
                evaluationForm(1);
              }}
              color="blue.400"
              fontWeight={200}
            >
              PN core values
            </Button>
            <Button
              onClick={() => {
                evaluationForm(2);
              }}
              color="blue.400"
              fontWeight={200}
            >
              Professional Atributes
            </Button>
            <Box d="flex" justifyContent="space-between">
              <Button w="33%" color="blue.400" fontWeight={200}>
                Slips
              </Button>
              <Button w="33%" color="blue.400" fontWeight={200}>
                Appreciation
              </Button>
              <Button w="33%" color="blue.400" fontWeight={200}>
                Warnings
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
      {pncore == true ? <PNCoreValueForm question={response} /> : ""}
    </>
  );
};
