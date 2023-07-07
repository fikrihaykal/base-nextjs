import { Box, Card, CardBody, CardHeader, HStack, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IoCheckmarkCircle, IoClose, IoCloseCircle, IoWarning } from "react-icons/io5";

const NotifSuccess = ({ children }: { children: ReactNode }) => {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

    return (
        <>
            <Card display={isOpen ? 'block' : 'none'} w="xs" borderRadius="0.5rem">
                <CardHeader borderBottom="1px solid rgba(0, 0, 0, 0.05)">
                    <HStack justifyContent="space-between" mb="5px">
                        <Heading color="text.dark" fontSize="14px">
                            Notifikasi
                        </Heading>
                        <HStack>
                            <Text variant="subtitle" fontSize="12px">
                                Baru saja
                            </Text>
                            <IoClose cursor="pointer" onClick={onClose} />
                        </HStack>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <HStack mt="10px">
                        <Box color="itssuccess">
                            <IoCheckmarkCircle fontSize="20px" />
                        </Box>
                        <Text variant="subtitle" fontSize="14px">{children}</Text>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
};

const NotifWarning = ({ children }: { children: ReactNode }) => {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

    return (
        <>
            <Card display={isOpen ? 'block' : 'none'} w="xs" borderRadius="0.5rem">
                <CardHeader borderBottom="1px solid rgba(0, 0, 0, 0.05)">
                    <HStack justifyContent="space-between" mb="5px">
                        <Heading color="text.dark" fontSize="14px">
                            Notifikasi
                        </Heading>
                        <HStack>
                            <Text variant="subtitle" fontSize="12px">
                                Baru saja
                            </Text>
                            <IoClose cursor="pointer" onClick={onClose} />
                        </HStack>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <HStack mt="10px">
                        <Box color="itswarning">
                            <IoWarning fontSize="20px" />
                        </Box>
                        <Text variant="subtitle" fontSize="14px">{children}</Text>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
};

const NotifError = ({ children }: { children: ReactNode }) => {
    const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true })

    return (
        <>
            <Card display={isOpen ? 'block' : 'none'} w="xs" borderRadius="0.5rem">
                <CardHeader borderBottom="1px solid rgba(0, 0, 0, 0.05)">
                    <HStack justifyContent="space-between" mb="5px">
                        <Heading color="text.dark" fontSize="14px">
                            Notifikasi
                        </Heading>
                        <HStack>
                            <Text variant="subtitle" fontSize="12px">
                                Baru saja
                            </Text>
                            <IoClose cursor="pointer" onClick={onClose} />
                        </HStack>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <HStack mt="10px">
                        <Box color="itsdanger">
                            <IoCloseCircle fontSize="20px" />
                        </Box>
                        <Text variant="subtitle" fontSize="14px">{children}</Text>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
};

export { NotifSuccess, NotifWarning, NotifError };