import {
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  IconButton,
  TableContainer,
  Button,
  Text,
  Box,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../backendUrl";

export const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const resp = await axios.get(`${BACKEND_URL}/api/students`);
      if (resp.data.status === "success") {
        setStudents(resp.data.students);
      }
    })();
  }, []);

  return (
    <Container maxW="container.xl" p={3} minH="100vh">
      <Heading>All Students</Heading>
      <Box bg="white">
        <TableContainer my="3">
          <Table border="1px solid #efefef">
            <Thead>
              <Tr>
                <Th>PNO.</Th>
                <Th>Student Name</Th>
                <Th>Father Name</Th>
                <Th>Course Name</Th>
                <Th>Branch name</Th>
                <Th>Evaluation Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.length > 0 &&
                students.map((item: any) => (
                  <Tr key={item.id}>
                    <Td>{item.pno}</Td>
                    <Td>{item.userName}</Td>
                    <Td>{item.fatherName}</Td>
                    <Td>{item.courseName}</Td>
                    <Td>{!item.branchName && "None"}</Td>
                    <Td>
                      {item.isEvaluated ? (
                        "Evaluation completed"
                      ) : (
                        <Button
                          variant="link"
                          color="blue.400"
                          fontWeight={200}
                          onClick={() =>
                            router.push("./performance-evaluation")
                          }
                        >
                          Perform Evaluation
                        </Button>
                      )}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};
