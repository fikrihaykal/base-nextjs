import { Box, Center, Select, Text, useColorModeValue } from "@chakra-ui/react";

const InformasiMahasiswa = () => {
  const colorborder = useColorModeValue("gray.100", "gray.800");

  return (
    <>
      <Box mb="48px" px={{ base: "16px", x: "0px" }}>
        <Box
          display={{ base: "block", d: "flex" }}
          justifyContent="space-between"
          alignItems="center"
          gap={5}
        >
          <Box>
            <Text fontSize="22px" fontWeight="600">
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
              <Text fontSize="12px" color="gray" mx="8px">
                •
              </Text>
              18 dari 24 SKS diambil
            </Text>
            {/* <Text fontWeight="500" mt="4px">
              Dosen Wali: {"Bintang Nuralamsyah, S.Kom, M.Kom" ?? "Rabbani Kharismawan, ST, MT"}
            </Text> */}
          </Box>
          <Box>
            <Select
              cursor="pointer"
              size="lg"
              border="2px"
              borderColor={colorborder}
              background={colorborder}
              borderRadius="xl"
              w={{ base: "full", a: "xs", x: "auto" }}
              fontSize="14px"
              fontWeight="700"
              mt={{ base: "16px", d: "0px" }}
            >
              <option value="option1" selected>
                Semester Gasal 2023/2024
              </option>
              <option value="option2">Semester Genap 2022/2023</option>
            </Select>
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
