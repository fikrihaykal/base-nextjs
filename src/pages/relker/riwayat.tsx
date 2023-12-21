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
  const [relkerItems, setRelkerItems] = useState<RencanaKerja[]>(dataRelker);

  function validateName(valueName: string) {
    let error;
    if (!valueName) {
      error = "Wajib diisi";
    }
    return error;
  }
  const addItem = (judul: string, subjudul: string) => {
    const addNew: RencanaKerja = {
      id: uuidv4(),
      status: 2,
      // judul: judul,
      subjudul: subjudul,
    };
    const tempArr = [addNew, ...relkerItems];
    setRelkerItems(tempArr);
    console.log(addNew);
  };

  return (
    <Formik
      initialValues={{
        judul: "",
        subjudul: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
          addItem(values.judul, values.subjudul);
          actions.resetForm();
        }, 1000);
      }}
    >
      {(props) => (
        <PageTransition
          pageTitle="Riwayat"
          previousPage="/relker"
          previousPageTitle="Realisasi kerja"
        >
          <Flex className="page__row" mb="80px">
            <ContainerQuery>
              <MotionBox
                className="card__big"
                pos="relative"
                p="32px"
                py="54px"
                borderRadius="24px"
                bg={colorMode == "light" ? "#fff" : "#222222"}
                _before={{
                  content: '""',
                  pos: "absolute",
                  top: "43px",
                  left: "32px",
                  right: "32px",
                  bottom: "-43px",
                  zIndex: "-1",
                  background: colorMode == "light" ? "#e3e6ec" : "#000",
                  opacity: colorMode == "light" ? "0.91" : "0.51",
                  filter: "blur(86.985px)",
                  borderRadius: "24px",
                }}
              >
                <AnimatePresence initial={false}>
                  {relkerItems
                    .filter((val) => val.status == 3)
                    .map((item, index) => (
                      <Item
                        key={item.id}
                        relkerItem={item}
                        relkerIndex={index}
                      ></Item>
                    ))}
                </AnimatePresence>
              </MotionBox>
            </ContainerQuery>
          </Flex>
        </PageTransition>
      )}
    </Formik>
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
  const isPresent = useIsPresent();
  const animations = {
    style: {
      height: "56px",
      background: "blue",
      marginTop: "20px",
      position: isPresent ? "static" : "absolute",
    },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.25, easing: "easeOut" },
  };
  return (
    <motion.div
      {...animations}
      layout
      className="relker__item"
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
        my="20px"
      >
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
          {/* {relkerItem.subjudul} */}
          Selesai
        </Box>
      </Box>
    </motion.div>
  );
};
