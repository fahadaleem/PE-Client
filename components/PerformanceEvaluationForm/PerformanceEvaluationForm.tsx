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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BACKEND_URL } from "../../backendUrl";

export const PerformanceEvaluation = () => {
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
            <Button color="blue.400" fontWeight={200}>
              PN core values
            </Button>
            <Button color="blue.400" fontWeight={200}>
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
    </>
  );
};
