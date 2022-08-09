import React, { useState, useEffect } from "react";
import Simple from "./Navbar";
import DataTable from "../components/DataTable";
import { users } from "../utils/request";
import { Spinner } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Students from "./Students";
function Dashboard() {
  const token = localStorage.getItem("token");

  useEffect(() => {
    setTimeout(function () {
      users().then((res) => {
        console.log(res);
        setDatas(res.data);
      });
      setLoading(false);
    }, 1000);
  }, []);

  const [datas, setDatas] = useState([]);

  const [loading, setLoading] = useState(true);

  const newData = datas?.map((i) => {
    return i.name;
  });

  const amount = datas?.map((i) => {
    return i.amount;
  });

  const total_amount = datas?.map((i) => {
    return i.total_amount;
  });
  const paid_amount = datas?.map((i) => {
    return i.paid_amount;
  });

  // const propertyNames = Object.values(newData);

  return (
    <div>
      {token ? (
        <Simple
          children={
            loading ? (
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  display: "flex",
                }}
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </div>
            ) : (
              <TableContainer>
                <Table variant="striped" colorScheme="teal">
                  <TableCaption>
                    Imperial to metric conversion factors
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Email</Th>
                      <Th isNumeric>Phone</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {datas.map((item) => (
                      <Tr>
                        <Td>{item.name}</Td>
                        <Td>{item.email}</Td>
                        <Td isNumeric>{item.phone}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
                {/* <Students data={newData} amount={amount} /> */}
                <div style={{ padding: 20 }}>
                  <Chart
                    options={{
                      chart: {
                        id: "apexchart-example",
                      },
                      xaxis: {
                        categories: newData,
                      },
                    }}
                    series={[
                      {
                        name: "Paid Amount",
                        data: paid_amount,
                      },
                      {
                        name: "Balance Amount",
                        data: amount,
                      },
                      {
                        name: "Total Amount",
                        data: total_amount,
                      },
                    ]}
                    type="bar"
                    width={"100%"}
                    height={320}
                  />
                </div>
                <div onClick={() => console.log(newData)}>
                  <p>hello</p>
                </div>
              </TableContainer>
            )
          }
        />
      ) : (
        <div>Authorization required..</div>
      )}
    </div>
  );
}

export default Dashboard;
