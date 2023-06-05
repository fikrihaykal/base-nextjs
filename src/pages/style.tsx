import BaseLayout from "@/components/BaseLayout"
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"

const Style = () => {
	return (
		<>
			<BaseLayout>
				<Box as="section" id="dashboard-hero-section" pb={{ base: '4', md: '8' }}>
					<Stack direction={{ base: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
						<Stack justifyContent="center" h="250px">
							<Heading>Style</Heading>
						</Stack>
						<Image display={{ base: 'none', lg: 'block' }} src="images/app/myITS-DesignSystem.svg" h="200px" />
					</Stack>
				</Box>
			</BaseLayout>
		</>
	)
}

export default Style