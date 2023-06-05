import BaseLayout from "@/components/BaseLayout"
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"

const Pattern = () => {
	return (
		<>
			<BaseLayout>
				<Box as="section" id="dashboard-hero-section" pb={{ base: '4', md: '8' }}>
					<Stack direction={{ base: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
				
							<Heading>Pattern</Heading>
						
					</Stack>
				</Box>
			</BaseLayout>
		</>
	)
}

export default Pattern