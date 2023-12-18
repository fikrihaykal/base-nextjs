import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import {
  AddOutlineIconMade,
  TrashOutlineIconMade,
} from "@/components/atoms/IconsMade";
import PageRow from "@/components/atoms/PageRow";
import { DaliOutlineButton } from "@/components/customs/Buttons/DaliButton";
import { PrimaryButton } from "@/components/customs/Buttons/PrimaryButton";
import { SecondaryButton } from "@/components/customs/Buttons/SecondaryButton";
import DropdownSelect from "@/components/customs/Select";
import DropdownInput from "@/components/molecules/DropdownInput";
import InputAreaFormik from "@/components/molecules/InputArea";
import InputFormik from "@/components/molecules/InputField";
import InputFileFormik from "@/components/molecules/InputFile";
import PlainCard from "@/components/organisms/Cards/Card";
import { DropdownChangeRole, DropdownItemDate } from "@/data/dummy";
import { ModalContextProvider } from "@/providers/ModalProvider";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  Radio,
  RadioGroup,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Router } from "next/router";
import { useContext } from "react";

const TambahKelas = () => {
  return (
    <>
      <ModalContextProvider>
        <PageTransition pageTitle="Tambah Kelas" previousPage="/kelas">
          <PageRow>
            <ContainerQuery>
              <PlainCard>
                <FormTambahKelas />
              </PlainCard>
            </ContainerQuery>
          </PageRow>
        </PageTransition>
      </ModalContextProvider>
    </>
  );
};

export default TambahKelas;

const FormTambahKelas = () => {
  // const { isModalActive, setIsModalActive } = useContext(ModalContext);
  const { colorMode } = useColorMode();

  function setIsModalActive(arg0: boolean) {
    throw new Error("Function not implemented.");
  }
  const kurikulum = [
    { value: "2023", label: "2023" },
    { value: "2021", label: "2021" },
    { value: "2018", label: "2018" },
    { value: "2014", label: "2014" },
    { value: "2008", label: "2008" },
  ];
  const semester = [
    { value: "20231", label: "Gasal 2023/2024" },
    { value: "20222", label: "Genap 2022/2023" },
    { value: "20221", label: "Gasal 2022/2023" },
    { value: "20212", label: "Genap 2021/2022" },
    { value: "20211", label: "Gasal 2021/2022" },
  ];
  const matakuliah = [
    { value: "IF761271", label: "3 SKS - Sistem Basis Data (IF761271)" },
  ];
  const kelas = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ];
  const bahasa = [
    { value: "1", label: "Indonesia" },
    { value: "2", label: "English" },
  ];
  const dosen = [
    { value: "a", label: "Budi Santoso" },
    { value: "b", label: "Agung Setiawan" },
    { value: "c", label: "Wahyu" },
    { value: "d", label: "Joko Nugroho" },
    { value: "e", label: "Arif" },
  ];
  const prodi = [
    { value: "a", label: "S1 Teknik Informatika" },
    { value: "b", label: "S2 Teknik Informatika" },
  ];

  return (
    <>
      <Formik
        initialValues={{
          nama: "",
          nrp: "",
          addon: "",
          noTelp: "",
          location: "",
          dokumen: "",
          tipe: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            setIsModalActive(true);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <>
              <Box mb="32px">
                <Text fontSize="18px" fontWeight="600" mb="16px">
                  Mata Kuliah
                </Text>
              </Box>
              <Flex
                flexWrap={{ base: "wrap", a: "nowrap" }}
                gap={{ base: 0, a: 4 }}
              >
                <Box w="full">
                  <Flex mb="8px">
                    <Text fontSize="14px" fontWeight="500">
                      Tahun Kurikulum
                    </Text>
                    <Text fontSize="14px" fontWeight="500" color="#ff3333">
                      &nbsp;*
                    </Text>
                  </Flex>
                  <Box mb="16px">
                    <DropdownSelect
                      placeholder="Pilih tahun kurikulum"
                      options={kurikulum}
                      defaultValue={[kurikulum[0]]}
                    />
                  </Box>
                </Box>
                <Box w="full">
                  <Flex mb="8px">
                    <Text fontSize="14px" fontWeight="500">
                      Periode
                    </Text>
                    <Text fontSize="14px" fontWeight="500" color="#ff3333">
                      &nbsp;*
                    </Text>
                  </Flex>
                  <Box mb="16px">
                    <DropdownSelect
                      placeholder="Pilih periode"
                      options={semester}
                      defaultValue={[semester[0]]}
                    />
                  </Box>
                </Box>
              </Flex>

              <Flex mb="8px">
                <Text fontSize="14px" fontWeight="500">
                  Mata Kuliah
                </Text>
                <Text fontSize="14px" fontWeight="500" color="#ff3333">
                  &nbsp;*
                </Text>
              </Flex>
              <Box mb="16px">
                <DropdownSelect
                  placeholder="Pilih mata kuliah"
                  options={matakuliah}
                />
              </Box>
              <Flex
                flexWrap={{ base: "wrap", a: "nowrap" }}
                gap={{ base: 0, a: 4 }}
              >
                <Box w="full">
                  <Flex mb="8px">
                    <Text fontSize="14px" fontWeight="500">
                      Kelas
                    </Text>
                    <Text fontSize="14px" fontWeight="500" color="#ff3333">
                      &nbsp;*
                    </Text>
                  </Flex>
                  <Box mb="16px">
                    <DropdownSelect placeholder="Pilih kelas" options={kelas} />
                  </Box>
                </Box>
                <Box w="full">
                  <Flex mb="8px">
                    <Text fontSize="14px" fontWeight="500">
                      Bahasa Pengantar
                    </Text>
                    <Text fontSize="14px" fontWeight="500" color="#ff3333">
                      &nbsp;*
                    </Text>
                  </Flex>
                  <Box mb="16px">
                    <DropdownSelect
                      placeholder="Pilih bahasa"
                      options={bahasa}
                    />
                  </Box>
                </Box>
                <Box w="full">
                  <InputFormik
                    name="kuota"
                    type="number"
                    label="Kuota"
                    key={10}
                    //   validate={validateName}
                    req
                    placeholder=""
                  />
                </Box>
              </Flex>

              <Box mt="32px" mb="32px">
                <Text fontSize="18px" fontWeight="600">
                  Dosen Pengajar
                </Text>
                <Text fontSize="16px" fontWeight="500" color="gray" mt="4px">
                  Kelola dosen yang akan mengajar kelas ini
                </Text>
              </Box>
              <RadioGroup defaultValue="1">
                <Flex
                  alignItems="start"
                  flexWrap={{ base: "wrap", t: "nowrap" }}
                  gap={{ base: 0, t: 4 }}
                  mb="8px"
                >
                  <Box w="full">
                    <Flex
                      flexWrap={{ base: "wrap", t: "nowrap" }}
                      gap={{ base: 0, t: 4 }}
                      w="full"
                    >
                      <Box w="full">
                        <Flex mb="8px">
                          <Text fontSize="14px" fontWeight="500">
                            Dosen Pengampu
                          </Text>
                          <Text
                            fontSize="14px"
                            fontWeight="500"
                            color="#ff3333"
                          >
                            &nbsp;*
                          </Text>
                        </Flex>
                        <Box mb="16px">
                          <DropdownSelect
                            placeholder="Pilih dosen"
                            options={dosen}
                          />
                        </Box>
                      </Box>
                      <Flex flexWrap="nowrap" gap={4} w="full">
                        <Box w="50%">
                          <InputFormik
                            name="sks"
                            type="text"
                            label="SKS"
                            key={10}
                            //   validate={validateName}
                            req
                            placeholder=""
                          />
                        </Box>
                        <Box w="50%">
                          <InputFormik
                            name="rencana_tm"
                            type="text"
                            label="Rencana TM"
                            key={11}
                            //   validate={validateName}
                            req
                            placeholder=""
                          />
                        </Box>
                      </Flex>
                    </Flex>
                    <Box w="full" mb="16px">
                      <Radio value="1">
                        <Text fontSize="14px" fontWeight={500}>
                          Jadikan penilai utama
                        </Text>
                      </Radio>
                    </Box>
                  </Box>
                </Flex>
                <Flex
                  alignItems="start"
                  flexWrap={{ base: "wrap", t: "nowrap" }}
                  gap={{ base: 0, t: 4 }}
                  mb="8px"
                >
                  <Box w="full">
                    <Flex
                      flexWrap={{ base: "wrap", t: "nowrap" }}
                      gap={{ base: 0, t: 4 }}
                      w="full"
                    >
                      <Box w="full">
                        <Flex mb="8px">
                          <Text fontSize="14px" fontWeight="500">
                            Dosen Team Teaching 1
                          </Text>
                          <Text
                            fontSize="14px"
                            fontWeight="500"
                            color="#ff3333"
                          >
                            &nbsp;*
                          </Text>
                        </Flex>
                        <Box mb="16px">
                          <DropdownSelect
                            placeholder="Pilih dosen"
                            options={dosen}
                          />
                        </Box>
                      </Box>
                      <Flex flexWrap="nowrap" gap={4} w="full">
                        <Box w="50%">
                          <InputFormik
                            name="sks"
                            type="text"
                            label="SKS"
                            key={20}
                            //   validate={validateName}
                            req
                            placeholder=""
                          />
                        </Box>
                        <Box w="50%">
                          <InputFormik
                            name="rencana_tm"
                            type="text"
                            label="Rencana TM"
                            key={21}
                            //   validate={validateName}
                            req
                            placeholder=""
                          />
                        </Box>
                      </Flex>
                    </Flex>
                    <Box w="full" mb="16px">
                      <Radio value="2">
                        <Text fontSize="14px" fontWeight={500}>
                          Jadikan penilai utama
                        </Text>
                      </Radio>
                    </Box>
                  </Box>
                  <Center
                    w={{ base: "full", t: "auto" }}
                    mt={{ base: "0px", t: "25px" }}
                    mb="16px"
                    display={{ base: "inherit", t: "none" }}
                  >
                    <DaliOutlineButton
                      color={colorMode == "light" ? "red.500" : "#B53F3F"}
                      isLoading={false}
                    >
                      Hapus
                    </DaliOutlineButton>
                  </Center>
                  <Tooltip hasArrow label="Hapus Dosen">
                    <Center
                      w={{ base: "full", t: "auto" }}
                      mt={{ base: "0px", t: "25px" }}
                      mb="16px"
                      display={{ base: "none", t: "inherit" }}
                    >
                      <DaliOutlineButton
                        minW="20px"
                        color={colorMode == "light" ? "red.500" : "#B53F3F"}
                      >
                        <TrashOutlineIconMade
                          fontSize="20px"
                          w="20px"
                          h="20px"
                        />
                      </DaliOutlineButton>
                    </Center>
                  </Tooltip>
                </Flex>
              </RadioGroup>
              <Flex>
                <Center w={{ base: "full", t: "auto" }} mb="8px">
                  <SecondaryButton isLoading={false}>
                    Tambah Dosen Lainnya
                  </SecondaryButton>
                </Center>
              </Flex>

              <Box mt="32px" mb="32px">
                <Text fontSize="18px" fontWeight="600">
                  Prodi Lain
                </Text>
                <Text fontSize="16px" fontWeight="500" color="gray" mt="4px">
                  Atur prodi lain yang diperbolehkan mengambil kelas ini
                </Text>
              </Box>
              <Box mt="24px">
                <Flex
                  flexWrap={{ base: "wrap", t: "nowrap" }}
                  gap={{ base: 0, t: 4 }}
                  mb="8px"
                >
                  <Box w="full">
                    <Flex mb="8px">
                      <Text fontSize="14px" fontWeight="500">
                        Prodi 1
                      </Text>
                      <Text fontSize="14px" fontWeight="500" color="#ff3333">
                        &nbsp;*
                      </Text>
                    </Flex>
                    <Box mb="16px">
                      <DropdownSelect
                        placeholder="Pilih prodi"
                        options={prodi}
                      />
                    </Box>
                  </Box>
                  <Center
                    w={{ base: "full", t: "auto" }}
                    mt={{ base: "0px", t: "25px" }}
                    mb="16px"
                    display={{ base: "inherit", t: "none" }}
                  >
                    <DaliOutlineButton
                      color={colorMode == "light" ? "red.500" : "#B53F3F"}
                      isLoading={false}
                    >
                      Hapus
                    </DaliOutlineButton>
                  </Center>
                  <Tooltip hasArrow label="Hapus Prodi">
                    <Center
                      w={{ base: "full", t: "auto" }}
                      mt={{ base: "0px", t: "25px" }}
                      mb="16px"
                      display={{ base: "none", t: "inherit" }}
                    >
                      <DaliOutlineButton
                        minW="20px"
                        color={colorMode == "light" ? "red.500" : "#B53F3F"}
                      >
                        <TrashOutlineIconMade
                          fontSize="20px"
                          w="20px"
                          h="20px"
                        />
                      </DaliOutlineButton>
                    </Center>
                  </Tooltip>
                </Flex>
                <Flex
                  flexWrap={{ base: "wrap", t: "nowrap" }}
                  gap={{ base: 0, t: 4 }}
                  mb="8px"
                >
                  <Box w="full">
                    <Flex mb="8px">
                      <Text fontSize="14px" fontWeight="500">
                        Prodi 2
                      </Text>
                      <Text fontSize="14px" fontWeight="500" color="#ff3333">
                        &nbsp;*
                      </Text>
                    </Flex>
                    <Box mb="16px">
                      <DropdownSelect
                        placeholder="Pilih prodi"
                        options={prodi}
                      />
                    </Box>
                  </Box>
                  <Center
                    w={{ base: "full", t: "auto" }}
                    mt={{ base: "0px", t: "25px" }}
                    mb="16px"
                    display={{ base: "inherit", t: "none" }}
                  >
                    <DaliOutlineButton
                      color={colorMode == "light" ? "red.500" : "#B53F3F"}
                      isLoading={false}
                    >
                      Hapus
                    </DaliOutlineButton>
                  </Center>
                  <Tooltip hasArrow label="Hapus Prodi">
                    <Center
                      w={{ base: "full", t: "auto" }}
                      mt={{ base: "0px", t: "25px" }}
                      mb="16px"
                      display={{ base: "none", t: "inherit" }}
                    >
                      <DaliOutlineButton
                        minW="20px"
                        color={colorMode == "light" ? "red.500" : "#B53F3F"}
                      >
                        <TrashOutlineIconMade
                          fontSize="20px"
                          w="20px"
                          h="20px"
                        />
                      </DaliOutlineButton>
                    </Center>
                  </Tooltip>
                </Flex>
              </Box>
              <Flex>
                <Center w={{ base: "full", t: "auto" }} mb="8px">
                  <SecondaryButton isLoading={false}>
                    Tambah Prodi Lainnya
                  </SecondaryButton>
                </Center>
              </Flex>

              <Flex w="100%" justifyContent="end" mt="48px">
                {/* <Button
                  bg={colorMode == "light" ? "#e0e0e040" : "#e0e0e070"}
                  _hover={{
                    background: colorMode == "light" ? "#e0e0e0" : "#e0e0e050",
                  }}
                  color={colorMode == "light" ? "#141414" : "#141414"}
                  minW="166px"
                  h="56px"
                  p="0 20px"
                  borderRadius="16px/16px"
                  fontSize="14px"
                  lineHeight="1.42857"
                  fontWeight="700"
                  transition="all .25s"
                  onClick={() => Router.back()}
                >
                  Batalkan
                </Button> */}
                {/* <Button
                  bg="#1b1b1b"
                  color="#fff"
                  minW="166px"
                  h="56px"
                  p="0 20px"
                  borderRadius="16px/16px"
                  fontSize="14px"
                  lineHeight="1.42857"
                  fontWeight="700"
                  transition="all .25s"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Laporkan
                </Button> */}
                <PrimaryButton>Buat Kelas Baru</PrimaryButton>
              </Flex>
            </>
          </Form>
        )}
      </Formik>
    </>
  );
};
