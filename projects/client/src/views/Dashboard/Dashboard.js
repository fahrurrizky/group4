// Chakra imports
import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Grid,
  Icon,
  SimpleGrid,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// // Custom components
import Card from "../../components/Card/Card";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import IconBox from "../../components/Icons/IconBox";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// Custom icons
import { FaUsers, FaStar } from "react-icons/fa";
import {
  CartIcon,
  DocumentIcon,
  WalletIcon,
} from "../../components/Icons/Icons.js";

// Variables
import {
  barChartData,
  barChartOptions,
  lineChartData,
  lineChartOptions,
} from "../../variables/charts";
import { productBestSaller, bestPerformCashier } from "../../variables/general";

function Rating({ maxStars = 5, ratingValue }) {
  return (
    <Box>
      {[...Array(maxStars)].map((_, index) => (
        <Icon
        key={index}
        as={FaStar}
        color={index < ratingValue ? "yellow.400" : "gray.300"}
        />
        ))}
    </Box>
  );
}

export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  // Chakra Color Mode
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("white", "white");
  const tableRowColor = useColorModeValue("white", "white");
  const borderColor = useColorModeValue("white", "white");
  const textTableColor = useColorModeValue("white", "white");

  const { colorMode } = useColorMode();

  return (
    <Flex flexDirection="column" mt={"8"}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" mb="20px">
        <Card minH="125px">
          <Flex direction="column">
            <Flex flexDirection="row" align="center" justify="center" w="100%" mb="25px">
              <Stat me="auto">
                <StatLabel fontSize="xs" color="white" fontWeight="bold" textTransform="uppercase">
                  Today's Money
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    $53,897
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox borderRadius="50%" as="box" h={"45px"} w={"45px"} bg={iconBlue}>
                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color="white" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                +3.48%{" "}
              </Text>
              Since last day
            </Text>
          </Flex>
        </Card>

        <Card minH="125px">
          <Flex direction="column">
            <Flex flexDirection="row" align="center" justify="center" w="100%" mb="25px">
              <Stat me="auto">
                <StatLabel fontSize="xs" color="white" fontWeight="bold" textTransform="uppercase">
                  Today's Customers
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    +200
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox borderRadius="50%" as="box" h={"45px"} w={"45px"} bg={iconBlue}>
                <FaUsers size={"25px"} h={"24px"} w={"24px"} color={iconBoxInside}/>
              </IconBox>
            </Flex>
            <Text color="white" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                +5.2%{" "}
              </Text>
              Since last day
            </Text>
          </Flex>
        </Card>

        <Card minH="125px">
          <Flex direction="column">
            <Flex flexDirection="row" align="center" justify="center" w="100%" mb="25px">
              <Stat me="auto">
                <StatLabel fontSize="xs" color="white" fontWeight="bold" textTransform="uppercase">
                  Product Sold
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    +130
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox borderRadius="50%" as="box" h={"45px"} w={"45px"} bg={iconBlue}>
                <DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color="white" fontSize="sm">
              <Text as="span" color="red.500" fontWeight="bold">
                -2.82%{" "}
              </Text>
              Since last day
            </Text>
          </Flex>
        </Card>

        <Card minH="125px">
          <Flex direction="column">
            <Flex flexDirection="row" align="center" justify="center" w="100%" mb="25px">
              <Stat me="auto">
                <StatLabel fontSize="xs" color="white" fontWeight="bold" textTransform="uppercase">
                  Total Sales
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    $173,000
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox borderRadius="50%" as="box" h={"45px"} w={"45px"} bg={iconBlue}>
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color="white" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                +8.12%{" "}
              </Text>
              Since last day
            </Text>
          </Flex>
        </Card>
      </SimpleGrid>

      <Grid templateColumns={{ sm: "1fr", lg: "2fr 1fr" }} templateRows={{ lg: "repeat(2, auto)" }} gap="20px">
        <Card bg={colorMode === "dark" ? "navy.800" : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"} p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color="#fff" fontSize="lg" fontWeight="bold" mb="6px">
              Sales Overview
            </Text>
            <Text color="#fff" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                (+5) more{" "}
              </Text>
              in 2022
            </Text>
          </Flex>
          <Box minH="300px">
            <LineChart chartData= {lineChartData} chartOptions={lineChartOptions} borderRadius={"3xl"}
            />
          </Box>
        </Card>

        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color="white" fontSize="sm" fontWeight="bold" mb="6px">
              PERFORMANCE CASHIER
            </Text>
            <Text color={textColor} fontSize="lg" fontWeight="bold">
              Total orders
            </Text>
          </Flex>
          <Box minH="300px">
            <BarChart chartData={barChartData} chartOptions={barChartOptions} />
          </Box>
        </Card>

        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column">
            <Flex align="center" p="22px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Sales Report
              </Text>
              <Spacer/>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Start Date"
              />
              <Spacer/>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="End Date"
              />
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }} width={"100%"}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color="black" borderColor={borderColor}>
                      Product Name
                    </Th>
                    <Th color="black" borderColor={borderColor}>
                      Category
                    </Th>
                    <Th color="black" borderColor={borderColor} textAlign={"center"}>
                      Daily Total Sales
                    </Th>
                    <Th color="black" borderColor={borderColor} textAlign={"center"}>
                      Price
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {productBestSaller.map((el, index, arr) => {
                    return (
                      <Tr key={index}>
                        <Td color={textTableColor} fontSize="sm" fontWeight="bold" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                          {el.productName}
                        </Td>
                        <Td color={textTableColor} fontSize="sm" border={index === arr.length - 1 ? "none" : null} borderColor={borderColor}>
                          {el.categoryProduct}
                        </Td>
                        <Td color={textTableColor} textAlign={"center"} fontSize="sm" border={index === arr.length - 1 ? "none" : null} borderColor={borderColor}>
                          {el.monthlySales}
                        </Td>
                        <Td color={textTableColor} textAlign={"center"} fontSize="sm" border={index === arr.length - 1 ? "none" : null} borderColor={borderColor}>
                          {el.price}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>

        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column">
            <Flex align="center" p="22px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Best Perform Cashier
              </Text>
            </Flex>
          </Flex>

          <Box overflow={{ sm: "scroll", lg: "hidden" }}>
            <Table>
              <Thead>
                <Tr bg={tableRowColor}>
                  <Th color="black" borderColor={borderColor}>
                    Name
                  </Th>
                  <Th color="black" borderColor={borderColor} p={"0"}>
                    Highest Sales
                  </Th>
                  <Th color="black" borderColor={borderColor}>
                    Best Service
                  </Th>
                </Tr>
              </Thead>

              <Tbody>
                {bestPerformCashier.map((el, index, arr) => {
                  return (
                    <Tr key={index}>
                      <Td color={textTableColor} fontSize="sm" fontWeight="bold" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                        {el.name}
                      </Td>
                      <Td color={textTableColor} fontSize="sm" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                        {el.highestSales}
                      </Td>
                      <Td textAlign={"center"} color={textTableColor} fontSize="sm" borderColor={borderColor} border={index === arr.length - 1 ? "none" : null}>
                        <Rating maxStars={5} ratingValue={parseInt(el.highestSales.replace(/\D/g, "")) / 100} />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
