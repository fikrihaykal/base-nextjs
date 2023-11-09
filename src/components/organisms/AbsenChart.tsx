import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";
import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "./Cards/Card";
import WidgetCard from "./Cards/WidgetCard";
import { rawData } from "./data";

interface AbsenChartProps {}

const AbsenChart: React.FC<AbsenChartProps> = () => {
  function setNewFormat(rd: number | Date) {
    let hr = new Date(rd).getHours().toString();
    let mn = ("0" + new Date(rd).getMinutes()).slice(-2);
    return Number(hr + mn);
  }

  const data = new Array();

  for (let i = 0; i < rawData.length; i++) {
    let nf = setNewFormat(rawData[i]);
    data.push([rawData[i], nf]);
    console.log(data);
  }

  const options: ApexOptions = {
    chart: {
      type: "line",
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
    yaxis: {
      min: 630,
      max: 830,
      tickAmount: 2,
      labels: {
        formatter: function (t) {
          return "0" + t.toString().slice(0, 1) + ":" + t.toString().slice(1);
        },
      },
    },
    xaxis: {
      type: "datetime",
    
      labels: {
        formatter: function (t) {
          return new Date(t).toLocaleDateString(); // The formatter function overrides format property
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
  };

  const series = [
    {
      name: "Masuk",
      data: data,
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
