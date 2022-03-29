import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { LoginForm, StudentsTable } from "../components";

const Home: NextPage = () => {
  return (
    <Box minH="100vh" bg="gray.100">
      <Head>
        <title>Performance Evaluation</title>
      </Head>
      <StudentsTable />
    </Box>
  );
};

export default Home;
