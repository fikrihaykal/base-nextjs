import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/PageCol";
import { TableWrapper } from "@/components/molecules/Table";
import TableBasic from "@/components/organisms/TableBasic";
import { kolomTabelRenker } from "@/data/tableakin";
import { fetcherGetBackend } from "@/utils/common/Fetcher";
import { Flex, TableContainer, Text } from "@chakra-ui/react";
import useSWR from "swr";

const RealisasiKerja = () => {
  const {
    data: dataRealisasi,
    error,
    isValidating,
    isLoading,
  } = useSWR("data_realisasi", fetcherGetBackend);

  return (
    <PageTransition
      pageTitle="Realisasi"
      previousPage="/relker"
      previousPageTitle="Aktivitas kerja"
    >
      <Flex className="page__row" mb="80px">
        <ContainerQuery>
          <TableWrapper w="100%">
            <Text
              variant="tabletitle"
              fontSize="18px"
              lineHeight="1.1875"
              fontWeight="550"
            >
              Realisasi Kerja
            </Text>

            <TableContainer w="100%" p="0">
              <TableBasic
                data={dataRealisasi?.filter((val: any) => val.status_pekerjaan == 3) ?? []}
                columns={kolomTabelRenker}
              />
            </TableContainer>
          </TableWrapper>
        </ContainerQuery>
      </Flex>
    </PageTransition>
  );
};

export default RealisasiKerja;

// const Item = ({
//   relkerItem,
//   relkerIndex,
// }: {
//   relkerItem: RencanaKerja;
//   relkerIndex: number;
// }) => {
//   return (
//     <Flex
//       className="relker__item"
//       minW="800px"
//       style={{
//         background: "#fff",
//         display: "flex",
//         width: "100%",
//         alignItems: "center",
//         borderTop: "1px solid #e4e4e4",
//         borderBottom: "1px solid #e4e4e4",
//         marginTop: "-1px",
//       }}
//     >
//       <Flex
//         className="file__container"
//         display="inline-flex"
//         alignItems="center"
//         transition="color .15s"
//         _groupHover={{
//           color: "#008fff",
//         }}
//         w="76px"
//         my="16px"
//       >
//         {relkerItem.status == 3 ? (
//           <Flex
//             pos="relative"
//             justifyContent="center"
//             alignItems="center"
//             flexShrink="0"
//             w="54px"
//             h="54px"
//             borderRadius="50%"
//             fontSize="0"
//             bg="#57bc3b30"
//             _hover={{
//               backgroundColor: "#57bc3b44",
//             }}
//             transition="all 0.12s ease-in-out"
//           >
//             <Box
//               w="36px"
//               h="36px"
//               bgSize="contain"
//               bgRepeat="no-repeat"
//               bgImage={"../images/icon/checkmark.png"}
//             ></Box>
//           </Flex>
//         ) : (
//           <Flex
//             pos="relative"
//             justifyContent="center"
//             alignItems="center"
//             flexShrink="0"
//             w="54px"
//             h="54px"
//             borderRadius="50%"
//             fontSize="0"
//             bg="#da494930"
//             _hover={{
//               backgroundColor: "#da494944",
//             }}
//             transition="all 0.12s ease-in-out"
//           >
//             <Box
//               w="36px"
//               h="36px"
//               bgSize="contain"
//               bgRepeat="no-repeat"
//               bgImage={"../images/icon/remove.png"}
//             ></Box>
//           </Flex>
//         )}
//       </Flex>
//       <Box className="file__detail">
//         <Box
//           className="file__title"
//           mb="9px"
//           fontSize="16px"
//           lineHeight="1.1875"
//           fontWeight="600"
//           _groupHover={{
//             color: "#008fff",
//           }}
//         >
//           <Text
//             variant="tabletitle"
//             data-group="card--shadow"
//             fontSize="16px"
//             lineHeight="1.1875"
//             fontWeight="550"
//             _groupHover={{
//               color: "#008fff",
//             }}
//           >
//             {relkerItem.subjudul}
//           </Text>
//         </Box>
//         <Box
//           className="file__subtitle"
//           fontSize="13px"
//           lineHeight="1.38462"
//           fontWeight="500"
//           color="#b2b3BD"
//         >
//           {relkerItem.status == 3 ? "Selesai" : "Dihapus atau dibatalkan"}
//         </Box>
//       </Box>
//     </Flex>
//   );
// };
