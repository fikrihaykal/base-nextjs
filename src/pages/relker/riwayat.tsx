import PageTransition from "@/components/PageLayout";
import { DarkButton } from "@/components/atoms/Buttons/DarkButton";
import ContainerQuery from "@/components/atoms/PageCol";
import InputFormik, {
  InputFormikNoLabel,
} from "@/components/molecules/InputField";
import { MotionBox } from "@/components/motion/Motion";
import { dataRelker } from "@/data/relker";
import { RencanaKerja } from "@/types/renker";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RealisasiKerja = () => {
  const { colorMode } = useColorMode();
  const [relkerItems] = useState<RencanaKerja[]>(dataRelker);

  return (
    <PageTransition
      pageTitle="Realisasi"
      previousPage="/relker"
      previousPageTitle="Aktivitas kerja"
    >
      <Flex className="page__row" mb="80px">
        <ContainerQuery>
          <MotionBox
            className="card__big"
            pos="relative"
            p="32px"
            py="34px"
            borderRadius="24px"
            bg={colorMode == "light" ? "#fff" : "#222222"}
            boxShadow="rgba(17, 12, 46, 0.07) 0px 18px 160px 10px"
          >
            <Text fontWeight="550" fontSize="16px" mb="16px">
              Realisasi kerja
            </Text>
            <MotionBox
              layout
              pt="1px"
              overflowY="hidden"
              overflowX="scroll"
              sx={{
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: colorMode == "light" ? "#dadada" : "#313131",
                  border: "5px solid transparent",
                },
                "::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: colorMode == "light" ? "#b3b3b3" : "#393939",
                },
              }}
            >
              <AnimatePresence initial={false}>
                {relkerItems
                  .filter((val) => val.status == 3 || val.status == 4)
                  .sort((a, b) => b.date.getTime() - a.date.getTime())
                  .map((item, index) => (
                    <Item
                      key={item.id}
                      relkerItem={item}
                      relkerIndex={index}
                    ></Item>
                  ))}
              </AnimatePresence>
            </MotionBox>
          </MotionBox>
        </ContainerQuery>
      </Flex>
    </PageTransition>
  );
};

export default RealisasiKerja;

const Item = ({
  relkerItem,
  relkerIndex,
}: {
  relkerItem: RencanaKerja;
  relkerIndex: number;
}) => {
  return (
    <Flex
      className="relker__item"
      minW="800px"
      style={{
        background: "#fff",
        display: "flex",
        width: "100%",
        alignItems: "center",
        borderTop: "1px solid #e4e4e4",
        borderBottom: "1px solid #e4e4e4",
        marginTop: "-1px",
      }}
    >
      <Flex
        className="file__container"
        display="inline-flex"
        alignItems="center"
        transition="color .15s"
        _groupHover={{
          color: "#008fff",
        }}
        w="76px"
        my="16px"
      >
        {relkerItem.status == 3 ? (
          <Flex
            pos="relative"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            w="54px"
            h="54px"
            borderRadius="50%"
            fontSize="0"
            bg="#57bc3b30"
            _hover={{
              backgroundColor: "#57bc3b44",
            }}
            transition="all 0.12s ease-in-out"
          >
            <Box
              w="36px"
              h="36px"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgImage={"../images/icon/checkmark.png"}
            ></Box>
          </Flex>
        ) : (
          <Flex
            pos="relative"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            w="54px"
            h="54px"
            borderRadius="50%"
            fontSize="0"
            bg="#da494930"
            _hover={{
              backgroundColor: "#da494944",
            }}
            transition="all 0.12s ease-in-out"
          >
            <Box
              w="36px"
              h="36px"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgImage={"../images/icon/remove.png"}
            ></Box>
          </Flex>
        )}
      </Flex>
      <Box className="file__detail">
        <Box
          className="file__title"
          mb="9px"
          fontSize="16px"
          lineHeight="1.1875"
          fontWeight="600"
          _groupHover={{
            color: "#008fff",
          }}
        >
          <Text
            variant="tabletitle"
            data-group="card--shadow"
            fontSize="16px"
            lineHeight="1.1875"
            fontWeight="550"
            _groupHover={{
              color: "#008fff",
            }}
          >
            {relkerItem.subjudul}
          </Text>
        </Box>
        <Box
          className="file__subtitle"
          fontSize="13px"
          lineHeight="1.38462"
          fontWeight="500"
          color="#b2b3BD"
        >
          {relkerItem.status == 3 ? "Selesai" : "Dihapus atau dibatalkan"}
        </Box>
      </Box>
    </Flex>
  );
};
