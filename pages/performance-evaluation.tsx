import React from "react";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import type { NextPage } from "next";
import { PerformanceEvaluation } from "../components";

const PerformanceEvaluationForm: NextPage = () => {
  return (
    <Box minH="100vh">
      <Head>
        <title>Performance Evaluation Form</title>
      </Head>
      <PerformanceEvaluation />
    </Box>
  );
};

export default PerformanceEvaluationForm;
