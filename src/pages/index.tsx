import BaseLayout from "@/components/BaseLayout"
import CardImage from "@/components/molecules/CardImage"
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"

const Beranda = () => {
	return (
		<>
			<BaseLayout>
				<Box as="section" id="dashboard-hero-section" pb={{ base: '4', md: '8' }}>
					<Stack direction={{ base: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
						<Stack justifyContent="center" h="250px">
							<Heading>Hai,</Heading>
							<Heading>Sulthon Nashir!</Heading>
							<Text>Selamat datang di myITS Design System</Text>
						</Stack>
						<Image display={{ base: 'none', lg: 'block' }} src="images/app/myITS-DesignSystem.svg" h="200px" />
					</Stack>
				</Box>
				<Box as="section" id="dashboard-hero-section" pb={{ base: '4', md: '8' }}>
					<Stack>
						<Stack direction={{ base: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
							<Text fontWeight="semibold" fontSize="24px">All Guides</Text>
						</Stack>
						<Box className="grid grid-cols-12 gap-4">
							<CardImage
								title="Komponen"
								description="Pelajari bagaimana cara menggunakan komponen yang tersedia untuk membangun antar muka aplikasi."
								image="/images/app/card/components-art.png"
								imageBackground="/images/app/card/components-back.png"
								url="/test"
								className="col-span-12 md:col-span-6 xl:col-span-4"
							/>
							<CardImage
								title="Style"
								description="Cari tahu bagaimana penggunaan gaya yang tepat pada aplikasi-aplikasi myITS."
								image="/images/app/card/styles-art.png"
								imageBackground="/images/app/card/styles-back.png"
								url="/test"
								className="col-span-12 md:col-span-6 xl:col-span-4"
							/>
							<CardImage
								title="Pattern"
								description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
								image="/images/app/card/pattern-art.png"
								imageBackground="/images/app/card/pattern-back.png"
								url="/test"
								className="col-span-12 md:col-span-6 xl:col-span-4"
							/>
							<CardImage
								title="Foundations"
								description="Lihat pola-pola yang biasanya muncul pada user flow untuk mempercepat pengerjaan aplikasi."
								image="/images/app/card/found-art.png"
								imageBackground="/images/app/card/found-back.png"
								url="/test"
								className="col-span-12 md:col-span-6 xl:col-span-4"
							/>
						</Box>
					</Stack>
				</Box>
			</BaseLayout>
		</>
	)
}

export default Beranda