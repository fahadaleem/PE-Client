/* eslint-disable */

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
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { set } from "react-hook-form";

export const PNCoreValueForm = () => {
  const [weight, setWeight] = React.useState("1");
  const [selected, setSelected] = useState("");
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: setSelected,
  });
  const group = getRootProps();

  const [eval, setEval] = useState([] );

  // const[questions,setquestions]=useState([])
  const [questions, setquestions] = useState([
    {
      questionTitle: "Test Question 1",
      questionId: 1,
      questionDescription: "Progress Of Student",
      options: [
        {
          optionTitle: "Option1",
          optionWeightage: "4",
        },
        { optionTitle: "Option2", optionWeightage: "1" },
        { optionTitle: "Option3", optionWeightage: "2" },
        { optionTitle: "Option4", optionWeightage: "3" },
        { optionTitle: "Option5", optionWeightage: "4" },
      ],
    },
    {
      questionTitle: "Test Question 2",
      questionId: 2,
      questionDescription: "Progress Of Student 1",
      options: [
        {
          optionTitle: "Option1",
          optionWeightage: "5",
        },
        { optionTitle: "Option2", optionWeightage: "5" },
        { optionTitle: "Option3", optionWeightage: "6" },
        { optionTitle: "Option4", optionWeightage: "7" },
        { optionTitle: "Option5", optionWeightage: "8" },
      ],
    },
    {
      questionTitle: "Test Question 3",
      questionId: 3,
      questionDescription: "Progress Of Student",
      options: [
        {
          id: 1,
          optionTitle: "Option1",
          optionWeightage: "4",
        },
        { id: 2, optionTitle: "Option2", optionWeightage: "9" },
        { id: 3, optionTitle: "Option3", optionWeightage: "10" },
        { id: 4, optionTitle: "Option4", optionWeightage: "11" },
        { id: 5, optionTitle: "Option5", optionWeightage: "12" },
      ],
    },
    {
      questionTitle: "Test Question 4",
      questionId: 4,
      questionDescription: "Progress Of Student",
      options: [
        { id: 1, optionTitle: "Option1", optionWeightage: "13" },
        { id: 2, optionTitle: "Option2", optionWeightage: "14" },
        { id: 3, optionTitle: "Option3", optionWeightage: "15" },
        { id: 4, optionTitle: "Option4", optionWeightage: "16" },
        { id: 5, optionTitle: "Option5", optionWeightage: "17" },
      ],
    },
    {
      questionTitle: "Test Question 5",
      questionId: 5,
      questionDescription: "Progress Of Student",
      options: [
        {
          id: 1,
          optionTitle: "Option1",
          optionWeightage: "18",
        },
        { id: 2, optionTitle: "Option2", optionWeightage: "19" },
        { id: 3, optionTitle: "Option3", optionWeightage: "20" },
        { id: 4, optionTitle: "Option4", optionWeightage: "21" },
        { id: 5, optionTitle: "Option5", optionWeightage: "22" },
      ],
    },
  ]);
  // const [scores, setScores] = useState([
  //   {
  //     questionid,questionScore
  //   },
  // ]);
  return (
    <Box bg={"rgb(246,247,250)"}>
      <Heading
        color={"rgb(120,149,246)"}
        as="h2"
        size="xl"
        textAlign={"center"}
        paddingTop={"40px"}
      >
        Evaulation Form
      </Heading>
      <Text color={"rgb(135,144,174)"} size="lg" textAlign={"center"}>
        PN Core Value
      </Text>
      <Box margin={"20px"}>
        <Heading as="h3" size="lg" color={"rgb(120,149,246)"}>
          Charactersistcs
        </Heading>
      </Box>
      {questions.map((question, key) => {
        return (
          <div key={key}>
            <Box margin={"20px"}>
              <Heading as="h3" size="lg" color={"rgb(46,58,115)"}>
                {question.questionTitle}
              </Heading>
              <Text
                color={"rgb(46,58,115)"}
                mt={"10px"}
                fontSize="xl"
                fontWeight={700}
              >
                Question {question.questionId} {" : "}
                {question.questionDescription}
              </Text>
            </Box>
            <Box margin={"20px"}>
              {/* <RadioGroup onChange={setValue} value={value}> */}
              <Stack>
                <RadioGroup onChange={(e)=>{
                  console.log(e);
                  const data = {
                   questionId:question.questionId,
                   option:e
                  }
                  setEval{[...eval, data]}
                }} value={eval[key].option}>
                  {question.options.map((optionNo, key) => {
                    return (
                      <div>
                        <Box
                          bg={"rgb(229,232,239)"}
                          width={"200px"}
                          borderRadius={"10px"}
                          padding={"5px"}
                        >
                          <Radio
                            style={{
                              border: "1px solid rgb(76,98,150)",
                              boxShadow: "none",
                            }}
                            colorScheme={"green"}
                            value={optionNo.optionWeightage}
                          >
                            {optionNo.optionTitle}
                          </Radio>
                        </Box>
                      </div>
                    );
                  })}
                </RadioGroup>
                {/* {question.options.map((optionNo) => {
                  return (
                    <div>
                      <Box
                        bg={"rgb(229,232,239)"}
                        width={"200px"}
                        borderRadius={"10px"}
                        padding={"5px"}
                      >
                        <RadioGroup>
                          <Radio
                            onChange={(e) => {
                              console.log(e.target.value);
                              setWeight(e.target.value);
                            }}
                            style={{
                              border: "1px solid rgb(76,98,150)",
                              boxShadow: "none",
                            }}
                            colorScheme={"green"}
                          >
                            {optionNo.optionTitle}
                          </Radio>
                        </RadioGroup>
                      </Box>
                    </div>
                  );
                })} */}

                {/* <Stack {...group}>
                  {question.options.map(({ optionWeightage }) => {
                    const radio = getRadioProps({
                      optionWeightage,
                    });
                    return (
                      <RadioGroup>
                        <RadioCard
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                          colorScheme={"green"}
                          style={{
                            border: "1px solid red",
                            backgroundColor: "green",
                          }}
                          key={optionWeightage}
                          {...radio}
                        >
                          {optionWeightage}
                        </RadioCard>
                      </RadioGroup>
                    );
                  })}
                </Stack> */}
                <Text paddingY={2}>Selected value: {selected}</Text>
                {/* <Box
                    bg={"rgb(229,232,239)"}
                    width={"200px"}
                    borderRadius={"10px"}
                    padding={"5px"}
                  >
                    <Radio
                      style={{
                        border: "1px solid rgb(76,98,150)",
                        boxShadow: "none",
                      }}
                      colorScheme={"green"}
                      value="1"
                    >
                      {question.options[key].optionTitle}
                    </Radio>
                  </Box> */}
                {/* <Box
                    bg={"rgb(229,232,239)"}
                    width={"200px"}
                    borderRadius={"10px"}
                    padding={"5px"}
                    marginTop={"20px"}
                  >
                    <Radio
                      style={{
                        border: "1px solid rgb(76,98,150)",
                        boxShadow: "none",
                      }}
                      colorScheme={"green"}
                      value="2"
                    >
                      {question.options[key].optionTitle}
                    </Radio>
                  </Box> */}
                {/* <Box
                    bg={"rgb(229,232,239)"}
                    width={"200px"}
                    borderRadius={"10px"}
                    padding={"5px"}
                  >
                    <Radio
                      colorScheme={"green"}
                      style={{
                        border: "1px solid rgb(76,98,150)",
                        boxShadow: "none",
                      }}
                      value="3"
                      boxShadow={"none"}
                    >
                      {question.options[key].optionTitle}
                    </Radio>
                  </Box> */}
              </Stack>

              {/* </RadioGroup> */}
            </Box>
          </div>
        );
      })}
      {/* <RadioGroup></RadioGroup> */}
    </Box>
  );
};

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}
