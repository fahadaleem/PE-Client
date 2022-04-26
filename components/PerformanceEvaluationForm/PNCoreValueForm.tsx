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
      <Text color={"rgb(135,144,174)"} size="lg" textAlign={"center"}>
        {props.question[0]?.mainSection?.sectionTitle}
      </Text>
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
                      {sectionData?.questions?.map((question, key) => {
                        return (
                          <Box>
                            <Heading as="h3" size="lg" color={"rgb(46,58,115)"}>
                              <Text>
                                Ques {key + 1}:{question.questionTitle}
                              </Text>
                              <Text fontSize={"md"}>
                                {question.questionDescription}
                              </Text>
                            </Heading>
                            <Box margin={"20px"}>
                              <Stack>
                                <RadioGroup
                                  onChange={(e) => {
                                    const data = {
                                      questionId: question.questionId,
                                      option: e,
                                    };

                                    // find the index in evalData
                                    let myDataIndex = evalData.findIndex(
                                      (item, key) =>
                                        item.questionId == question.questionId
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
                                  value={eval[key]?.option}
                                >
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
                                              border:
                                                "1px solid rgb(76,98,150)",
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
                              </Stack>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  </>
                );
              }
            )}
          </>
        );
      })}
    </Box>
  );
};

//  {
//    props.question.map((question: any, key: any) => {
//      question.mainSection.subSections[key].questions.map(
//        (questionNo: any, key: any) => {
//          return (
//            <>
//              <Box margin={"20px"}>
//                <Heading as="h3" size="lg" color={"rgb(46,58,115)"}>
//                  Question{":"}
//                  <p>{questionNo.questionId}</p>
//                </Heading>
//                <Text
//                  color={"rgb(46,58,115)"}
//                  mt={"10px"}
//                  fontSize="xl"
//                  fontWeight={700}
//                >
//                  {/* Question {question.questionId} {" : "} */}
//                  {/* {question.questionDescription} */}
//                </Text>
//                <Text>Question Description{questionNo.questionDescription}</Text>
//              </Box>
//            </>
//          );
//        }
//      );
//      return (
//        <div key={key}>
//          <Box margin={"20px"}>
//            <Heading as="h3" size="lg" color={"rgb(46,58,115)"}>
//              Question{":"}
//              {
//                // question.mainSection.subSections[key].questions
//              }
//            </Heading>
//            <Text
//              color={"rgb(46,58,115)"}
//              mt={"10px"}
//              fontSize="xl"
//              fontWeight={700}
//            >
//              {/* Question {question.questionId} {" : "} */}
//              {/* {question.questionDescription} */}
//            </Text>
//          </Box>
//          <Box margin={"20px"}>
//            <Stack>
//              <RadioGroup
//                onChange={(e) => {
//                  const data = {
//                    // questionId: question.questionId,
//                    // option: e,
//                  };

//                  // find the index in evalData
//                  let myDataIndex = evalData.findIndex(
//                    (item, key) => item.questionId == question.questionId
//                  );

//                  // if option not selected then add new option to the data.

//                  if (myDataIndex === -1) {
//                    setEvalData([...evalData, data]);
//                    return;
//                  } else {
//                    // update the excisting question option.
//                    let newData = evalData;
//                    newData.splice(myDataIndex, 1, data);
//                    setEvalData([...newData]);
//                  }
//                }}
//                // value={eval[key]?.option}
//              >
//                {/* {question.options.map((optionNo, key) => {
//                     return (
//                       <div>
//                         <Box
//                           bg={"rgb(229,232,239)"}
//                           width={"200px"}
//                           borderRadius={"10px"}
//                           padding={"5px"}
//                         >
//                           <Radio
//                             style={{
//                               border: "1px solid rgb(76,98,150)",
//                               boxShadow: "none",
//                             }}
//                             colorScheme={"green"}
//                             value={optionNo.optionWeightage}
//                           >
//                             {optionNo.optionTitle}
//                           </Radio>
//                         </Box>
//                       </div>
//                     );
//                   })} */}
//              </RadioGroup>
//            </Stack>
//          </Box>
//        </div>
//      );
//    });
//  }
