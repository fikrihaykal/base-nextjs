import { TextButton } from "@/components/atoms/Buttons/TextButton";
import Dropdown from "@/components/customs/Dropdown";
import PlainCard from "@/components/organisms/Cards/Card";
import { DropdownItem, DropdownSemester } from "@/data/dummy";
import {
  Box,
  Center,
  Collapse,
  Flex,
  Grid,
  GridItem,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ModalMataKuliah, ModalMelanggar } from "./Modal/ModalMataKuliah";
import {
  ExternalOutlineIconMade,
  InfoCircleOutlineIconMade,
} from "@/components/atoms/IconsMade";

const InformasiMahasiswa = () => {
  const { colorMode } = useColorMode();
  const colorborder = useColorModeValue("gray.100", "gray.800");
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isOpenMataKuliah,
    onOpen: onOpenMataKuliah,
    onClose: onCloseMataKuliah,
  } = useDisclosure();
  const {
    isOpen: isOpenMelanggar,
    onOpen: onOpenMelanggar,
    onClose: onCloseMelanggar,
  } = useDisclosure();

  return (
    <>
      <PlainCard>
        {/* <Box
          m="-16px"
          p="16px"
          borderRadius="16px"
          transition="all .25s"
          _hover={{
            bg: colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
            cursor: "pointer",
            transition: "all .25s",
          }}
        >
          <Text fontSize="24px" fontWeight="600">
            Sarah Nasywa Azizah
          </Text>
          <Flex alignItems="center" gap={2} mt="4px">
            <Text fontSize="18px" fontWeight="500">
              5013231063
            </Text>
            <Text fontSize="18px" fontWeight="700" color="blue">
              Ganti
            </Text>
          </Flex>
        </Box> */}
        {/* <Box>
          <Text fontSize="24px" fontWeight="600">
            Sarah Nasywa Azizah
          </Text>
          <Text fontSize="18px" fontWeight="500" mt="4px">
            5013231063
          </Text>
        </Box>
        <Box mt="24px" mx="-8px">
          <Dropdown
            data={DropdownSemester}
            placeholder="Semester 3 (Ganjil 2023/2024)"
          />
        </Box> */}
        <Flex
          justifyContent="space-between"
          alignItems="start"
          flexWrap={{
            base: "wrap",
            a: "nowrap",
            x: "wrap",
          }}
          gap={6}
        >
          <Box w="full">
            <Text fontSize="24px" fontWeight="600">
              Sarah Nasywa Azizah
            </Text>
            <Text fontSize="18px" fontWeight="500" mt="4px">
              5013231063
            </Text>
          </Box>
          <Box w="full">
            <Dropdown
              data={DropdownSemester}
              placeholder="Semester 3 (Ganjil 2023/2024)"
            />
          </Box>
        </Flex>
        <Box
          mt="32px"
          mb="16px"
          pb="24px"
          borderBottom="2px solid"
          borderBottomColor="gray.50"
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <GridItem colSpan={1}>
              <Text fontSize="13px" fontWeight="500" color="gray" mb="2px">
                IPS
              </Text>
              <Text fontSize="20px" fontWeight="600">
                0,00
              </Text>
            </GridItem>
            <GridItem colSpan={1}>
              <Tooltip
                hasArrow
                label="Kuota SKS didapatkan dari akumulasi IPS sebelumnya"
                aria-label="Kuota SKS didapatkan dari akumulasi IPS sebelumnya"
                closeOnClick={false}
              >
                <Text
                  fontSize="13px"
                  fontWeight="500"
                  color="gray"
                  mb="2px"
                  display="inline-flex"
                  alignItems="center"
                  gap={1.5}
                  flexWrap="wrap"
                >
                  SKS dipakai
                  <InfoCircleOutlineIconMade fontSize="14px" mb="2px" />
                </Text>
              </Tooltip>
              <Flex alignItems="center" flexWrap="wrap" gap={1}>
                <Text fontSize="20px" fontWeight="600">
                  18
                </Text>
                <Text fontSize="14px" color="gray" mt="4px">
                  dari 24
                </Text>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box mx="-16px">
          <Collapse in={!isOpen} animateOpacity>
            <Box px="16px">
              <Grid
                templateColumns={{
                  base: "repeat(2, 1fr)",
                  a: "repeat(4, 1fr)",
                  x: "repeat(2, 1fr)",
                }}
                gap={6}
                m="-16px -16px"
                p="24px 16px"
              >
                <GridItem
                  onClick={onOpenMataKuliah}
                  colSpan={1}
                  m="-8px -8px"
                  p="16px 8px"
                  borderRadius="16px"
                  transition="all .25s"
                  _hover={{
                    bg:
                      colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
                    cursor: "pointer",
                    transition: "all .25s",
                  }}
                >
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Wajib Diambil
                  </Text>
                  <Flex alignItems="center" gap={2} mt="2px">
                    <Text fontSize="20px" fontWeight="600" color="blue">
                      1
                    </Text>
                    {/* <Text fontSize="20px" fontWeight="500" color="gray">
                      0
                    </Text> */}
                    <Text color="gray" mb="2px">
                      <ExternalOutlineIconMade fontSize="14px" />
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem
                  colSpan={1}
                  m="-8px -8px"
                  p="16px 8px"
                  borderRadius="16px"
                  transition="all .25s"
                  _hover={{
                    bg:
                      colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
                    cursor: "pointer",
                    transition: "all .25s",
                  }}
                >
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Mengulang
                  </Text>
                  <Flex alignItems="center" gap={2} mt="2px">
                    {/* <Text fontSize="20px" fontWeight="600">
                      1
                    </Text> */}
                    <Text fontSize="20px" fontWeight="500" color="gray">
                      0
                    </Text>
                    <Text color="gray" mb="2px">
                      <ExternalOutlineIconMade fontSize="14px" />
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem
                  onClick={onOpenMelanggar}
                  colSpan={1}
                  m="-8px -8px"
                  p="16px 8px"
                  borderRadius="16px"
                  transition="all .25s"
                  _hover={{
                    bg:
                      colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
                    cursor: "pointer",
                    transition: "all .25s",
                  }}
                >
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Melanggar Prasyarat
                  </Text>
                  <Flex alignItems="center" gap={2} mt="2px">
                    <Text fontSize="20px" fontWeight="600" color="blue">
                      1
                    </Text>
                    {/* <Text fontSize="20px" fontWeight="500" color="gray">
                      0
                    </Text> */}
                    <Text color="gray" mb="2px">
                      <ExternalOutlineIconMade fontSize="14px" />
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem
                  colSpan={1}
                  m="-8px -8px"
                  p="16px 8px"
                  borderRadius="16px"
                  transition="all .25s"
                  _hover={{
                    bg:
                      colorMode == "light" ? "blackAlpha.50" : "whiteAlpha.100",
                    cursor: "pointer",
                    transition: "all .25s",
                  }}
                >
                  <Text fontSize="14px" fontWeight="500" color="gray">
                    Ekivalensi
                  </Text>
                  <Flex alignItems="center" gap={2} mt="2px">
                    {/* <Text fontSize="20px" fontWeight="600">
                      1
                    </Text> */}
                    <Text fontSize="20px" fontWeight="500" color="gray">
                      0
                    </Text>
                    <Text color="gray" mb="2px">
                      <ExternalOutlineIconMade fontSize="14px" />
                    </Text>
                  </Flex>
                </GridItem>
              </Grid>
            </Box>
          </Collapse>
        </Box>
        <Center>
          <TextButton onClick={onToggle}>
            {!isOpen ? "Sembunyikan" : "Tampilkan lebih"}
          </TextButton>
        </Center>
      </PlainCard>

      <ModalMataKuliah isOpen={isOpenMataKuliah} onClose={onCloseMataKuliah} />
      <ModalMelanggar isOpen={isOpenMelanggar} onClose={onCloseMelanggar} />
    </>
  );
};

export default InformasiMahasiswa;
