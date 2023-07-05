import BaseLayout from "@/components/BaseLayout"
import PageTransition from "@/components/PageTransitions"
import CardIcon from "@/components/molecules/CardIcon"
import { Box, Stack } from "@chakra-ui/react"

const Asset = () => {

	return (
		<>
			<PageTransition>
				<Box
					as="section"
					id="dashboard-hero-section"
					pb={{ base: "4", md: "8" }}
				>
					<Stack>
						<Stack
							direction={{ base: "column", sm: "row" }}
							justifyContent="space-between"
							alignItems="center"
						>
							{/* <Text fontSize="22px">All Guides</Text> */}
						</Stack>
						<Box className="grid grid-cols-12" pos="relative" gap="10px">
							<CardIcon
								title="Berkas"
								description="Berkas yang telah Anda unggah akan muncul di sini."
								icon="/images/icon/folder.svg"
								url="/komponen"
							// optional props
							/>
							<CardIcon
								title="Portofolio"
								description="Buat dan kelola portofolio dari berbagai kategori."
								icon="/images/icon/portfolio.svg"
								url="/style"
							/>
							<CardIcon
								title="SKEM"
								description="Ajuan kegiatan dari portofolio yang Anda buat."
								icon="/images/icon/skem.svg"
								url="/pattern"
							/>
							<CardIcon
								title="Beasiswa"
								description="Cari dan dapatkan beasiswa Anda di sini."
								icon="/images/icon/scholarship.svg"
								url="/foundations"
							/>
							<CardIcon
								title="Magang"
								description="Temukan pekerjaan yang Anda minati di sini."
								icon="/images/icon/intern.svg"
								url="/pattern"
							/>
							<CardIcon
								title="Kewirausahaan"
								description="Kelola ajuan kewirausahaan Anda."
								icon="/images/icon/entrepreneur.svg"
								url="/foundations"
							/>
						</Box>
					</Stack>
				</Box>
			</PageTransition>
		</>
	)
}

export default Asset