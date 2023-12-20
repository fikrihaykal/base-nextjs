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
  const addItem = (subjudul: string) => {
    const addNew: RencanaKerja = {
      id: uuidv4(),
      status: 2,
      subjudul: subjudul,
    };
    const tempArr = [addNew, ...relkerItems];
    setRelkerItems(tempArr);
  };

  const handleRemoveSelf = (item: RencanaKerja) => {
    setRelkerItems((relkerItems) =>
      relkerItems.filter((data) => data.id !== item.id)
    );

    console.log("removed " + item.id);
  };

  return (
    <Formik
      initialValues={{
        subjudul: "",
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
          addItem(values.subjudul);
          actions.resetForm();
        }, 1000);
      }}
    >
      {(props) => (
        <PageTransition pageTitle="Realisasi kerja">
          <Flex className="page__row" mb="80px">
            <ContainerQuery>
              <MotionBox
                className="card__big"
                pos="relative"
                p="32px"
                pb="64px"
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
                <Form>
                  <Text fontWeight="550" fontSize="16px" mb="16px">
                    Tambah realisasi baru
                  </Text>
                  <Flex w="100%" gap="18px" alignItems="center" mb="16px">
                    {/* <InputFormikNoLabel
                      name="judul"
                      type="text"
                      label="Judul"
                      validate={validateName}
                      req
                      placeholder="Judul"
                    /> */}
                    <InputFormikNoLabel
                      name="subjudul"
                      type="text"
                      label="Subjudul"
                      validate={validateName}
                      req
                      // placeholder="Subjudul"
                    />
                    <DarkButton
                      isLoading={props.isSubmitting}
                      type="submit"
                      mt="-18px"
                    >
                      Tambahkan
                    </DarkButton>
                  </Flex>
                </Form>
                <Text fontWeight="550" fontSize="16px" mb="16px">
                  Realisasi kerja aktif
                </Text>
                <AnimatePresence initial={false}>
                  {relkerItems
                    .filter((val) => val.status !== 3)
                    .map((item, index) => (
                      <Item
                        key={item.id}
                        relkerItem={item}
                        relkerIndex={index}
                        // onClick={() => handleRemoveSelf(item)}
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
}: // onClick,
{
  relkerItem: RencanaKerja;
  relkerIndex: number;
  // onClick: any;
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
      // onClick={onClick}
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
        // display="inline-flex"
        alignItems="center"
        transition="color .15s"
        _groupHover={{
          color: "#008fff",
        }}
        // w="76px"
        my="20px"
      >
        <Flex gap="6px">
          <Flex
            cursor="pointer"
            pos="relative"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            w="44px"
            h="44px"
            borderRadius="50%"
            fontSize="0"
            bg="#008fff33"
            filter={relkerItem.status == 1 ? "none" : "grayscale(100%)"}
            opacity={relkerItem.status == 1 ? "1" : "0.32"}
            _hover={{
              filter: "none",
              opacity: "1",
              backgroundColor: "#008fff45",
            }}
            transition="all 0.12s ease-in-out"
          >
            <Box
              w="32px"
              h="32px"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgImage="images/icon/clock.png"
            ></Box>
          </Flex>
          <Flex
            cursor="pointer"
            pos="relative"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            w="44px"
            h="44px"
            borderRadius="50%"
            fontSize="0"
            bg="#ffdd0033"
            filter={relkerItem.status == 2 ? "none" : "grayscale(100%)"}
            _hover={{
              // borderRadius: "16px",
              filter: "none",
              opacity: "1",
              backgroundColor: "#ffdd0050",
            }}
            transition="all 0.12s ease-in-out"
          >
            <Box
              w="32px"
              h="32px"
              bgSize="contain"
              bgRepeat="no-repeat"
              // bgImage={
              //   colorMode == "light"
              //     ? "images/icon/play.png"
              //     : "images/icon/playdark.png"
              // }
              bgImage={"images/icon/play.png"}
            ></Box>
          </Flex>
          <Flex
            cursor="pointer"
            pos="relative"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            w="44px"
            h="44px"
            borderRadius="50%"
            fontSize="0"
            filter={relkerItem.status == 3 ? "none" : "grayscale(100%)"}
            opacity={relkerItem.status == 3 ? "1" : "0.42"}
            bg="#57bc3b30"
            _hover={{
              filter: "none",
              opacity: "1",
              backgroundColor: "#57bc3b44",
            }}
            transition="all 0.12s ease-in-out"
          >
            <Box
              w="32px"
              h="32px"
              bgSize="contain"
              bgRepeat="no-repeat"
              bgImage="images/icon/checkmark.png"
            ></Box>
          </Flex>
        </Flex>
      </Flex>
      <Box className="file__detail" ml="16px">
        <Box
          display="flex"
          alignItems="center"
          className="file__title"
          mb="4px"
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
          textDecoration={relkerItem.status == 3 ? "line-through" : "none"}
        >
          {relkerItem.status == 1 ? "Sedang dikerjakan" : ""}
          {relkerItem.status == 2 ? "Belum dimulai" : ""}
        </Box>
      </Box>
    </motion.div>
  );
};
