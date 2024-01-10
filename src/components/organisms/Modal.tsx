import { Box, Flex, useColorMode, Text, Link } from "@chakra-ui/react";
import { MotionBox } from "../motion/Motion";
import { ReactNode, useContext, useEffect, useState } from "react";
import ModalContext from "@/providers/ModalProvider";
import { CloseOutlineIconMade } from "../atoms/IconsMade";

type Size = "xs" | "sm" | "md" | "lg" | "full";

const ModalAnimated = ({
  isOpen,
  onClose,
  children,
  size = "md",
  headerTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  headerTitle: string;
  size?: Size;
}) => {
  // const { isModalActive, setIsModalActive } = useContext(ModalContext);

  const getSize = () => {
    if (size == "xs") {
      return "480px";
    } else if (size == "sm") {
      return "640px";
    } else if (size == "md") {
      return "720px";
    } else if (size == "lg") {
      return "1080px";
    } else if (size == "full") {
      return "100%";
    } else {
      return "720px";
    }
  };

  const [scrollY, setScrollY] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setScrollY(document.body.scrollTop);
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen, scrollY]);

  const modalVariants = {
    open: {
      y: 0,
      transition: {
        delay: 0.18,
        type: "spring",
        duration: 0.38,
        bounce: 0.15,
      },
    },
    closed: {
      y: "-250%",
      transition: {
        type: "spring",
        duration: 0.38,
        bounce: 0.15,
      },
    },
  };

  const modalBgVariants = {
    open: {
      display: "flex",
      opacity: 1,
      transition: {
        duration: 0.18,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.18,
        duration: 0.18,
      },
      transitionEnd: { display: "none" },
    },
  };

  return (
    <MotionBox
      className="modal__overlay"
      display="none"
      pos="fixed"
      w="100vw"
      h="100vh"
      bg={colorMode == "light" ? "rgba(60,60,60,0.6)" : "rgba(0,0,0,0.7)"}
      top="0"
      left="0"
      zIndex="98"
      overflow="auto"
      justifyContent="center"
      pt="124px"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      sx={{
        scrollbarGutter: "stable both-edges",
        "::-webkit-scrollbar-thumb": {
          backgroundColor: colorMode == "light" ? "#dadada" : "#292929",
        },
      }}
      variants={modalBgVariants}
      animate={isOpen ? "open" : "closed"}
    >
      <MotionBox
        className="modal__container"
        pos="relative"
        mb="84px"
        w={getSize()}
        h="max-content"
        borderRadius="24px"
        bg={colorMode == "light" ? "white" : "#222222"}
        p="12px"
        zIndex="99"
        variants={modalVariants}
        animate={isOpen ? "open" : "closed"}
        overflow="none"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Box p="16px" transition="all .25s" display="flex" flexDir="column">
          <Flex
            className="modal__header"
            w="100%"
            borderBottom="1px solid #e4e4e4"
            pb="16px"
            justifyContent="space-between"
          >
            <Text fontWeight="600" fontSize="18px">
              {headerTitle}
            </Text>
            <Flex
              w="24px"
              h="24px"
              pt="4px"
              alignItems="center"
              justifyContent="center"
              color="#848484"
              onClick={onClose}
              cursor="pointer"
              _hover={{ color: "black" }}
            >
              <CloseOutlineIconMade fontSize="18px"></CloseOutlineIconMade>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            flexDir="column"
            pt="16px"
            className="modal__body"
          ></Flex>
          {children}
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

export default ModalAnimated;

export const ModalSheet = ({
  isOpen,
  onClose,
  children,
  footer,
  size = "lg",
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  size?: Size;
}) => {
  // const { isModalActive, setIsModalActive } = useContext(ModalContext);

  const getSize = () => {
    if (size == "xs") {
      return "480px";
    } else if (size == "sm") {
      return "640px";
    } else if (size == "md") {
      return "720px";
    } else if (size == "lg") {
      return "1080px";
    } else if (size == "full") {
      return "100%";
    } else {
      return "720px";
    }
  };

  const [scrollY, setScrollY] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setScrollY(document.body.scrollTop);
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen, scrollY]);

  const modalVariants = {
    open: {
      y: 0,
      transition: {
        delay: 0.18,
        type: "spring",
        duration: 0.38,
        bounce: 0.15,
      },
    },
    closed: {
      y: "-250%",
      transition: {
        type: "spring",
        duration: 0.38,
        bounce: 0.15,
      },
    },
  };

  const modalBgVariants = {
    open: {
      display: "flex",
      opacity: 1,
      transition: {
        duration: 0.18,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0.18,
        duration: 0.18,
      },
      transitionEnd: { display: "none" },
    },
  };

  const modalSheetVariants = {
    open: {
      y: 0,
      transition: {
        delay: 0.18,
        type: "spring",
        duration: 0.38,
        bounce: 0,
      },
    },
    closed: {
      y: "100vh",
      transition: {
        type: "spring",
        duration: 0.38,
        bounce: 0,
      },
    },
  };

  return (
    <MotionBox
      className="modal__overlay"
      display="none"
      pos="fixed"
      w="100vw"
      h="100vh"
      bg={colorMode == "light" ? "rgba(60,60,60,0.6)" : "rgba(0,0,0,0.7)"}
      // top={scrollY}
      top="0"
      left="0"
      zIndex="98"
      overflow="auto"
      justifyContent="center"
      pt="64px"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
      sx={{
        scrollbarGutter: "stable both-edges",
        "::-webkit-scrollbar-thumb": {
          backgroundColor: colorMode == "light" ? "#dadada" : "#292929",
        },
      }}
      variants={modalBgVariants}
      animate={isOpen ? "open" : "closed"}
    >
      <MotionBox
        className="modal__container"
        pos="relative"
        mb="212px"
        w={getSize()}
        h="max-content"
        borderRadius="24px"
        bg={colorMode == "light" ? "white" : "#222222"}
        p="12px"
        borderBottomRadius="0px"
        zIndex="99"
        variants={modalSheetVariants}
        animate={isOpen ? "open" : "closed"}
        overflow="none"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Box
          p="16px"
          transition="all .25s"
          display="flex"
          flexDir="column"
          pos="relative"
        >
          <Flex
            className="modal__header"
            w="100%"
            flexDirection="row-reverse"
            pb="16px"
            justifyContent="space-between"
          >
            <Flex
              w="24px"
              h="24px"
              pt="4px"
              alignItems="center"
              justifyContent="center"
              color="#848484"
              onClick={onClose}
              cursor="pointer"
              _hover={{ color: colorMode == "light" ? "black" : "#e4e4e4" }}
            >
              <CloseOutlineIconMade fontSize="18px"></CloseOutlineIconMade>
            </Flex>
          </Flex>
          <Flex w="100%" flexDir="column" pt="0px" className="modal__body">
            {children}
          </Flex>
        </Box>
        <Flex
          w="100%"
          h="128px"
          pos="absolute"
          bottom="-126px"
          left="0px"
          justifyContent="center"
          alignItems="center"
          bg={colorMode =="light" ? "#f7f7f7" : "#333333"}
          borderBottomRadius="16px"
        >
          <Flex
            flexDir="column"
            gap="8px"
            justifyContent="center"
            alignItems="center"
          >
            {footer}
          </Flex>
        </Flex>
      </MotionBox>
    </MotionBox>
  );
};
