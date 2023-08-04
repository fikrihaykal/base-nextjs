import PageTransition from "@/components/PageLayout";
import { BoxIconMade, EditIconMade } from "@/components/atoms/IconsMade";
import MenuWrapper from "@/components/atoms/MenuWrapper";
import { Flex, TableContainer } from "@chakra-ui/react";
import { useState } from "react";
import { DropdownItem, DropdownItemDate } from "@/data/dummy";
import {
	TableSearch,
	TableSorting,
	TableSortingCol,
	TableSortingRow,
	TableWrapper,
	TableFilter,
	TableFilterDate,
} from "@/components/molecules/Table";
import { kolomTabelBerkas } from "@/data/table";
import { ButtonIcon } from "@/components/molecules/Button";
import { TableInfinite } from "@/components/organisms/TableInfinite";
import { infiniteQuery, tableLoadMoreConf } from "@/utils/table";

const Berkas = () => {
	
	const [globalFilter, setGlobalFilter] = useState("");

	const URL = "/api/berkas"
	const infiniteData = infiniteQuery(URL, "berkas")
	const table = tableLoadMoreConf(infiniteData.flatData, kolomTabelBerkas, globalFilter, setGlobalFilter)

	return (
		<>
			<PageTransition>
				<Flex className="page__row">
					<MenuWrapper>
						<TableWrapper>
							<TableSorting>
								<TableSortingRow>
									<TableSortingCol>
										<TableFilterDate
											placeholder="Tanpa batas waktu"
											data={DropdownItemDate}
											column={table.getHeaderGroups()[0].headers[2].column}
										/>
										<TableFilter
											placeholder="Semua jenis"
											data={DropdownItem}
											column={table.getHeaderGroups()[0].headers[1].column}
										/>
									</TableSortingCol>
									<TableSortingCol>
										<Flex
											justifyContent="space-between"
											alignItems="center"
											w="full"
										>
											<TableSearch
												placeholder="Search"
												target={setGlobalFilter}
											/>
											<Flex className="sorting__search" align-items="center">
												<ButtonIcon>
													<EditIconMade
														fontSize="19px"
														fill="#11142d"
														w="1em"
														h="1em"
													></EditIconMade>
												</ButtonIcon>
												<ButtonIcon>
													<BoxIconMade
														fontSize="19px"
														fill="#11142d"
														w="1em"
														h="1em"
													></BoxIconMade>
												</ButtonIcon>
											</Flex>
										</Flex>
									</TableSortingCol>
								</TableSortingRow>
							</TableSorting>
							<TableContainer>
								<TableInfinite table={table} infiniteData={infiniteData} select={true} />
							</TableContainer>
						</TableWrapper>
					</MenuWrapper>
				</Flex>
			</PageTransition>
		</>
	);
};

export default Berkas;
