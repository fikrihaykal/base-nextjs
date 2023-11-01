import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { ApexOptions } from "apexcharts";
import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "./Cards/Card";
import WidgetCard from "./Cards/WidgetCard";

interface AbsenChartProps {}

const AbsenChart: React.FC<AbsenChartProps> = () => {
  const options: ApexOptions = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: false,
      },
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#008ffa"],
    xaxis: {
      range: 7,
    },
  };

  const series = [
    {
      name: "Masuk",
      data: [
        10, 20, 30, 40, 50, 12, 13, 22, 25, 34, 36, 38, 32, 42, 46, 12, 32, 45,
        23, 67, 89, 21, 34, 58, 37,
      ],
    },
  ];

  return (
    <WidgetCard
      maxH="500px"
      // h="min-content"
      display="flex"
      flexDirection="column"
    >
      <Text variant="tabletitle" fontSize="18px" fontWeight="550">
        Absen
      </Text>
      <Box width="100%" ml="-15px">
        <ApexChart
          options={options}
          series={series}
          type="line"
          height="340px"
        />
      </Box>
    </WidgetCard>
  );
};

export default AbsenChart;
