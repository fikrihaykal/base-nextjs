import {
	Box,
	Button,
	Card,
	CardProps,
	HStack,
	Heading,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import useDimensions from "react-cool-dimensions";
import { IoArrowForward } from "react-icons/io5";

interface CardIconInterface extends CardProps {
	title: string;
	description: string;
	icon: string;
	url: string;
	cardProps?: CardProps;
}

const CardIcon = ({
	title,
	description,
	icon,
	url,
	...cardProps
}: CardIconInterface) => {
	const { observe, width } = useDimensions({
		onResize: ({ observe, unobserve }) => {
			unobserve();
			observe();
		},
	});
	return (
		<>
			<Card
				className="col-span-12 md:col-span-6 xl:col-span-6 2xl:col-span-4"
				pos="relative"
				p="20px"
				transition="all 0.2s ease-in-out"
				_before={{
					content: `""`,
					position: "absolute",
					width: "100%",
					height: "100%",
					display: "block",
					top: "0",
					left: "0",
					zIndex: "-1",
					borderRadius: "14px",
					transition: "all 0.2s ease-in-out",
					boxShadow: "rgba(17, 12, 46, 0.05) 0px 40px 100px 0px;",
					transform: "scale(1)",
				}}
				_hover={{
					marginTop: "-3px",
					marginBottom: "3px",
					// transform: 'scale(1.007)',
					boxShadow: "none",
					_before: {
						boxShadow: "rgba(17, 12, 46, 0.11) 0px 46px 80px 0px;",
					},
				}}
				boxShadow="none"
				data-group="card-image"
				borderRadius="14px"
				{...cardProps}
			>
				<Link
					as={NextLink}
					href={url}
					_hover={{ textDecor: "none", backgroundColor: "none" }}
				>
					<Stack>
						<HStack
							mb="20px"
						>
							<Box>
								<Image
									src={icon}
									alt={""}
									width={40}
									height={40}
									priority={true}
								/>
							</Box>
						</HStack>
						<Heading
							color="text.dark"
							fontSize="16px"
							lineHeight="0.7"
							mt="12px"
							mb="2px"
						>
							{title}
						</Heading>
						{description && (
							<Text variant="subtitle" fontSize="14px">
								{description}
							</Text>
						)}
						<HStack justifyContent="end">
							<Button
								borderRadius="50%"
								padding="0"
							>
								<IoArrowForward />
							</Button>
						</HStack>
					</Stack>
				</Link>
			</Card>
		</>
	);
};

export default CardIcon;
