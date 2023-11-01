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
    grid: { show: false },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#008ffa", "#57bc3b"],
    xaxis: {
      range: 7,
    },
    yaxis: {
      min: 10,
      max: 40,
      tickAmount: 4,
    }
  };

  const series = [
    {
      name: "Masuk",
      data: [
        25, 28, 21, 24, 27, 30, 23, 22, 26, 20, 29, 30, 24, 22, 28, 21, 25, 23,
        27, 26, 20, 30, 29, 24, 21, 22, 28, 26, 27, 23, 25,
      ],
    },
    {
      name: "Selesai",
      data: [
        22, 26, 29, 21, 24, 27, 23, 20, 25, 28, 30, 22, 21, 26, 23, 27, 24, 20,
        30, 25, 28, 29, 20, 22, 23, 27, 24, 26, 21, 30, 25,
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
          height="300px"
        />
      </Box>
    </WidgetCard>
  );
};

export default AbsenChart;
