import React from "react";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import type { NextPage } from "next";
import { PNCoreValueForm } from "../components";

const PerformanceDutiesForm: NextPage = () => {
  return (
    <Box minH="100vh">
      <Head>
        <title>Performance Evaluation Form</title>
      </Head>
      <PerformanceDutiesForm />
    </Box>
  );
};

export default PerformanceDutiesForm;
