import { TextButton } from "@/components/customs/Buttons/TextButton";
import Dropdown from "@/components/customs/Dropdown";
import PlainCard from "@/components/organisms/Cards/Card";
import { DropdownItem, DropdownSemester } from "@/data/dummy";
import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  InfoCircleOutlineIconMade,
  InfoCircleSolidIconMade,
  ListOutlineIconMade,
  PercentOutlineIconMade,
} from "@/components/atoms/IconsMade";

const CardRangkuman = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <PlainCard>
        <Box
          display="flex"
          alignItems="center"
          flexWrap={{ base: "wrap", a: "nowrap" }}
          gap={6}
        >
          <Flex w="full" gap={4}>
            <Box w="48px" h="48px">
              <Center
                w="48px"
                h="48px"
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.200"}
                borderRadius="full"
              >
                <PercentOutlineIconMade fontSize="24px" />
              </Center>
            </Box>
            <Box>
              <Text fontSize="13px" fontWeight="500" color="gray">
                IPS
              </Text>
              <Text fontSize="20px" fontWeight="600" mt="2px">
                0,00
              </Text>
            </Box>
          </Flex>
          <Divider
            orientation="vertical"
            h="50px"
            display={{ base: "none", a: "block" }}
          />
          <Divider w="full" display={{ base: "block", a: "none" }} />
          <Flex w="full" gap={4}>
            <Box w="48px" h="48px">
              <Center
                w="48px"
                h="48px"
                bg={colorMode === "light" ? "blackAlpha.100" : "whiteAlpha.200"}
                borderRadius="full"
              >
                <ListOutlineIconMade fontSize="24px" />
              </Center>
            </Box>
            <Box>
              <Popover>
                <Flex alignItems="center" gap="6px">
                  <Text fontSize="13px" fontWeight="500" color="gray">
                    SKS diambil
                  </Text>
                  <PopoverTrigger>
                    <InfoCircleOutlineIconMade
                      fontSize="13px"
                      color="gray"
                      cursor="pointer"
                    />
                  </PopoverTrigger>
                </Flex>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody fontSize="14px">
                    Kuota SKS dihasilkan dari akumulasi IPS sebelumnya.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Flex alignItems="center" flexWrap="wrap" gap={1}>
                <Text fontSize="20px" fontWeight="600">
                  18
                </Text>
                <Text fontSize="14px" color="gray" mt="4px">
                  dari 24
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        
        {/* Skeleton */}
        {/* <Box
          display="flex"
          alignItems="center"
          flexWrap={{ base: "wrap", a: "nowrap" }}
          gap={6}
        >
          <Flex w="full" gap={4}>
            <Skeleton w="48px" h="48px" borderRadius="full" />
            <Box>
              <Skeleton w="25px" h="16px" borderRadius="full" />
              <Skeleton w="60px" h="22px" borderRadius="full" mt="8px" />
            </Box>
          </Flex>
          <Divider
            orientation="vertical"
            h="50px"
            display={{ base: "none", a: "block" }}
          />
          <Divider w="full" display={{ base: "block", a: "none" }} />
          <Flex w="full" gap={4}>
            <Skeleton w="48px" h="48px" borderRadius="full" />
            <Box>
              <Skeleton w="25px" h="16px" borderRadius="full" />
              <Skeleton w="60px" h="22px" borderRadius="full" mt="8px" />
            </Box>
          </Flex>
        </Box> */}
      </PlainCard>
    </>
  );
};

export default CardRangkuman;
