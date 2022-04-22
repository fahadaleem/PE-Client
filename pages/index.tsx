import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { LoginForm, StudentsTable } from "../components";
import { PNCoreValueForm } from "../components";
import PerformanceEvaluationForm from "./performance-evaluation";

const Home: NextPage = () => {
  return (
    <>
      <Box minH="100vh" bg="rgb(246,247,250)">
        <Head>
          <title>Performance Evaluation</title>
        </Head>

        {/* <StudentsTable /> */}
        {/* <PerformanceEvaluationForm /> */}
        <PNCoreValueForm />
      </Box>
    </>
  );
};

export default Home;
