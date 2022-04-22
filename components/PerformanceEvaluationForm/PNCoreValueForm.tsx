import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Center,
  SimpleGrid,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
export const PNCoreValueForm = () => {
  const [value, setValue] = useState(1);
  const [data, setData] = useState([
    {
      sectionTitle: "Performance of Duties",
      sectionDescription:
        "Measure an officer ability to manage and get things done",
      questions: [
        {
          id: 1,
          questiontitle: "Test question",
          questionDescription: " How Well Student Performed?",
          options: [
            { OptionTitle: "first option", optionWeightage: 3 },
            { OptionTitle: "second option", optionWeightage: 6 },
            { OptionTitle: "third option", optionWeightage: 4 },
            { OptionTitle: "fourth option", optionWeightage: 5 },
          ],
        },
      ],
    },
  ]);

  return (
    <Box paddingLeft={8}>
      <Box pt={6}>
        <Center>
          <Heading
            color="rgb(132,159,247)"
            textAlign={"center"}
            fontWeight={"bold"}
            size="lg"
          >
            {data[0].sectionTitle.toUpperCase()}
          </Heading>
        </Center>
      </Box>
      <Box p={2}>
        <Center>
          <Text fontSize="md" textAlign={"center"} color="rgb(76,98,150)">
            {" "}
            {data[0].sectionDescription}{" "}
          </Text>
        </Center>
      </Box>
      {[1, 2, 3, 4].map(() => {
        return (
          <>
            <SimpleGrid mt={8}>
              <Box>
                <Heading
                  as="h1"
                  color="rgb(46,58,115)"
                  fontWeight={"bold"}
                  size="lg"
                  textAlign={"left"}
                >
                  {data[0].questions[0].questiontitle}
                </Heading>
              </Box>
              <Box mt={4}>
                <Heading
                  as="h6"
                  color="rgb(46,58,115)"
                  fontWeight={"bold"}
                  size="md"
                  textAlign={"left"}
                >
                  Question {data[0].questions[0].id} :
                  {data[0].questions[0].questionDescription}
                </Heading>
              </Box>
            </SimpleGrid>
            <SimpleGrid columns={1} spacing={4} pt={"40px"}>
              <Box>
                <RadioGroup
                  bg={"rgb(229,232,239)"}
                  width={"280px"}
                  p={"10px"}
                  borderRadius={"10px"}
                  value={value}
                >
                  <Stack direction="row">
                    <Box>
                      <Radio
                        colorScheme={"green"}
                        textAlign={"left"}
                        borderColor="rgb(58,70,123)"
                        value="1"
                      >
                        <Text
                          fontSize="lg"
                          fontWeight={"500"}
                          color={"rgb(88,97,143)"}
                        >
                          First
                        </Text>
                      </Radio>
                    </Box>
                  </Stack>
                </RadioGroup>
              </Box>
              <Box>
                <RadioGroup
                  bg={"rgb(229,232,239)"}
                  width={"280px"}
                  p={"10px"}
                  borderRadius={"10px"}
                >
                  <Stack direction="row">
                    <Radio
                      borderColor="rgb(58,70,123)"
                      colorScheme={"green"}
                      textAlign={"left"}
                      value="2"
                    >
                      <Text
                        fontSize="lg"
                        fontWeight={"500"}
                        color={"rgb(88,97,143)"}
                      >
                        Second
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <Box>
                <RadioGroup
                  bg={"rgb(229,232,239)"}
                  width={"280px"}
                  p={"10px"}
                  borderRadius={"10px"}
                >
                  <Stack direction="row">
                    <Radio
                      colorScheme={"green"}
                      borderColor={"rgb(58,70,123)"}
                      textAlign={"left"}
                      value="3"
                    >
                      <Text
                        fontSize="lg"
                        fontWeight={"500"}
                        color={"rgb(88,97,143)"}
                      >
                        Third
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <Box>
                <RadioGroup
                  bg={"rgb(229,232,239)"}
                  width={"280px"}
                  p={"10px"}
                  borderRadius={"10px"}
                >
                  <Stack direction="row">
                    <Radio
                      borderColor="rgb(58,70,123)"
                      colorScheme={"green"}
                      textAlign={"left"}
                      value="4"
                    >
                      <Text
                        fontSize="lg"
                        fontWeight={"500"}
                        color={"rgb(88,97,143)"}
                      >
                        Fourth
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            </SimpleGrid>
          </>
        );
      })}
    </Box>
  );
};
