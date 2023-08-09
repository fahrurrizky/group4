import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Text } from "@chakra-ui/react";

const SalesChart = () => {
  const [dailySalesData, setDailySalesData] = useState([]);

  useEffect(() => {
    fetchDailySalesData();
  }, []);

  const fetchDailySalesData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/report/sales");
      setDailySalesData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Calculate the maximum Y-axis value
  const maxTotalSales = dailySalesData.reduce(
    (max, data) => Math.max(max, parseInt(data.totalSales)),
    0
  );

  // Add some padding to the maximum value
  const paddedMaxTotalSales = maxTotalSales + maxTotalSales * 0.1;

  // Format number as IDR currency
  const formatIDRCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div>
      <Box p={5} backgroundColor={'whiteAlpha.300'}>
        <Text fontSize={"2xl"} fontWeight={600} mb={4}>
          Sales Chart
        </Text>
        <LineChart width={1100} height={400} data={dailySalesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={{ fill: 'white' }} dataKey="transactionDate" />
          <YAxis
            domain={[0, paddedMaxTotalSales]}
            tickFormatter={(value) => formatIDRCurrency(value)}
            tick={{ fill: 'white' }}
          />
          <Tooltip
            formatter={(value) => formatIDRCurrency(value)}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Legend />
          <Line type="monotone" dataKey="totalSales" stroke="cyan" />
        </LineChart>
      </Box>
    </div>
  );
};

export default SalesChart;