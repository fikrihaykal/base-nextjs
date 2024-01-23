// ToastCard.tsx
import React from "react";
import { Box, Text, Flex, Center, useColorModeValue } from "@chakra-ui/react";

interface ToastCardProps {
  title: string;
  description: string;
  onClose: () => void;
  status: "success" | "error" | "info" | "warning";
  icon: React.ReactElement; // Tambahkan properti icon
}

const statusColorLight = {
  success: "green.500",
  error: "red.500",
  info: "blue.500",
  warning: "yellow.500",
};

const statusColorDark = {
  success: "greenDim.500",
  error: "redDim.500",
  info: "blueDim.500",
  warning: "yellowDim.500",
};

const ToastCard = ({
  title,
  description,
  onClose,
  status,
  icon,
}: ToastCardProps) => {

  return (
    <Box as="section" pt="4px">
      <Box
        width="full"
        boxShadow="md"
        bg={
          useColorModeValue(statusColorLight[status], statusColorDark[status])
        }
        borderRadius="24"
        p="24px"
        display="flex"
        justifyContent="start"
        alignItems="center"
        flexWrap={{ base: "wrap", a: "nowrap" }}
        gap={4}
      >
        <Flex alignItems="center" gap={4} w="100%">
          <Center h="42px" w="42px">
            <Center h="42px" w="42px" bg="blackAlpha.300" borderRadius="full">
              {icon} {/* Gunakan properti icon */}
            </Center>
          </Center>
          <Box>
            <Text fontSize="16px" fontWeight="600" color="white">
              {title}
            </Text>
            <Text fontSize="15px" color="whiteAlpha.800" mt="4px">
              {description}
            </Text>
          </Box>
        </Flex>
        <Box
          w={{ base: "100%", a: "auto" }}
          display="flex"
          justifyContent="end"
        >
          <Box
            fontSize="14px"
            fontWeight="700"
            color="white"
            cursor="pointer"
            onClick={onClose}
            p="14px 20px"
            borderRadius="16px"
            _hover={{
              bg: "blackAlpha.300",
              transition: "all .25s",
            }}
          >
            Tutup
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ToastCard;
