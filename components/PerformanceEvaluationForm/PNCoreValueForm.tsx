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
import { Controller, set } from "react-hook-form";

interface IEval {
  questionId: number;
  option: string;
}

export const PNCoreValueForm = (props) => {
  const [evalData, setEvalData] = React.useState([]);

  // const[questions,setquestions]=useState([])

  const [questions, setquestions] = useState([
    {
      questionTitle: "Test Question 1",
      questionId: 1,
      questionDescription: "Progress Of Student",
      options: [
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
        { optionTitle: "Option2", optionWeightage: "1" },
        { optionTitle: "Option3", optionWeightage: "2" },
        { optionTitle: "Option4", optionWeightage: "3" },
        { optionTitle: "Option5", optionWeightage: "4" },
      ],
    },
    {
      questionTitle: "Test Question 3",
      questionId: 3,
      questionDescription: "Progress Of Student",
      options: [
        { id: 2, optionTitle: "Option2", optionWeightage: "1" },
        { id: 3, optionTitle: "Option3", optionWeightage: "2" },
        { id: 4, optionTitle: "Option4", optionWeightage: "3" },
        { id: 5, optionTitle: "Option5", optionWeightage: "4" },
      ],
    },
  ]);
  console.log("props", props);
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

      {props.question.map((title: any, key: any) => {
        return (
          <div>
            <Text color={"rgb(135,144,174)"} size="lg" textAlign={"center"}>
              {title?.mainSection?.sectionTitle}
            </Text>
          </div>
        );
      })}
      {props.question.map((title, key) => {
        return (
          <>
            {title?.mainSection?.subSections?.map(
              (sectionData: any, key: any) => {
                return (
                  <>
                    <Box m={"20px"}>
                      <Heading as="h3" size="lg" color={"rgb(120,149,246)"}>
                        {sectionData.subSectionTitle}
                      </Heading>
                    </Box>
                  </>
                );
              }
            )}
          </>
        );
      })}

      {props.question.map((question: any, key: any) => {
        question.mainSection.subSections[key].questions.map(
          (questionNo: any, key: any) => {
            console.log(questionNo.questionId);
            console.log(questionNo.questionDescription);
            return (
              <>
                <Box margin={"20px"}>
                  <Heading as="h3" size="lg" color={"rgb(46,58,115)"}>
                    Question{":"}
                    <p>{questionNo.questionId}</p>
                  </Heading>
                  <Text
                    color={"rgb(46,58,115)"}
                    mt={"10px"}
                    fontSize="xl"
                    fontWeight={700}
                  >
                    {/* Question {question.questionId} {" : "} */}
                    {/* {question.questionDescription} */}
                  </Text>
                  <Text>
                    Question Description{questionNo.questionDescription}
                  </Text>
                </Box>
              </>
            );
          }
        );
        return (
          <div key={key}>
            <Box margin={"20px"}>
              <Heading as="h3" size="lg" color={"rgb(46,58,115)"}>
                Question{":"}
                {
                  // question.mainSection.subSections[key].questions
                }
              </Heading>
              <Text
                color={"rgb(46,58,115)"}
                mt={"10px"}
                fontSize="xl"
                fontWeight={700}
              >
                {/* Question {question.questionId} {" : "} */}
                {/* {question.questionDescription} */}
              </Text>
            </Box>
            <Box margin={"20px"}>
              <Stack>
                <RadioGroup
                  onChange={(e) => {
                    const data = {
                      // questionId: question.questionId,
                      // option: e,
                    };

                    // find the index in evalData
                    let myDataIndex = evalData.findIndex(
                      (item, key) => item.questionId == question.questionId
                    );

                    // if option not selected then add new option to the data.

                    if (myDataIndex === -1) {
                      setEvalData([...evalData, data]);
                      return;
                    } else {
                      // update the excisting question option.
                      let newData = evalData;
                      newData.splice(myDataIndex, 1, data);
                      setEvalData([...newData]);
                    }
                  }}
                  // value={eval[key]?.option}
                >
                  {/* {question.options.map((optionNo, key) => {
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
                  })} */}
                </RadioGroup>
              </Stack>
            </Box>
          </div>
        );
      })}
    </Box>
  );
};
