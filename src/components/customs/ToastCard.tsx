// ToastCard.tsx
import React from "react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";

interface ToastCardProps {
  title: string;
  description: string;
  colorMode: "light" | "dark";
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
  success: "#44AB2D",
  error: "#B53F3F",
  info: "#007FEB",
  warning: "#E3AD1D",
};

const ToastCard = ({
  title,
  description,
  colorMode,
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
          colorMode === "light"
            ? statusColorLight[status]
            : statusColorDark[status]
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
            transition="all .25s"
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
