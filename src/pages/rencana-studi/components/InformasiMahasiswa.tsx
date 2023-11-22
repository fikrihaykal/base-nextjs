import Dropdown from "@/components/customs/Dropdown";
import { DropdownItem, DropdownSemester } from "@/data/dummy";
import { Box, Center, Select, Text, useColorModeValue } from "@chakra-ui/react";

const InformasiMahasiswa = () => {
  const colorborder = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Box mb="48px" px={{ base: "16px", x: "0px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={5}
          flexWrap={{base: "wrap", d: "nowrap"}}
        >
          <Box w={{base: "100%", d: "60%"}}>
            <Text fontSize="24px" fontWeight="600">
              Sarah Nasywa Azizah (5013231063)
            </Text>

            <Text
              fontSize="18px"
              fontWeight="500"
              mt="6px"
              display={{ base: "none", m: "inline-flex" }}
              alignItems="center"
            >
              IPS 0,00
              <Text as="span" fontSize="12px" color="gray" mx="8px">
                •
              </Text>
              18 dari 24 SKS diambil
            </Text>
          </Box>
          <Box mt={{base: "8px", d: "0px"}} w={{base: "100%", d: "40%"}}>
            <Dropdown data={DropdownSemester} placeholder="Semester" />
          </Box>
        </Box>
        <Box
          display={{ base: "flex", m: "none" }}
          w={{ base: "full", d: "sm" }}
          mt={{ base: "36px", d: "0px" }}
        >
          <Box
            px="24px"
            w="full"
            borderRight="2px"
            borderRightColor={colorborder}
          >
            <Center fontSize="13px" fontWeight="500" color="gray" mb="2px">
              IPS
            </Center>
            <Center fontSize="22px" fontWeight="600">
              0,00
            </Center>
          </Box>
          <Box px="24px" w="full">
            <Center fontSize="13px" fontWeight="500" color="gray" mb="2px">
              SKS diambil
            </Center>
            <Center fontSize="22px" fontWeight="600">
              18
              <Text fontSize="14px" color="gray" mx="2px">
                /
              </Text>
              <Text fontSize="14px" color="gray">
                24
              </Text>
            </Center>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InformasiMahasiswa;
