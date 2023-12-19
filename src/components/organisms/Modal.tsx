import { Box, useColorMode } from "@chakra-ui/react";
import { MotionBox } from "../motion/Motion";
import { useContext, useEffect, useState } from "react";
import ModalContext from "@/providers/ModalProvider";

const Modal = () => {
  const { isModalActive, setIsModalActive } = useContext(ModalContext);
  const [scrollY, setScrollY] = useState(0);
  const { colorMode } = useColorMode();

  useEffect(() => {
    setScrollY(document.body.scrollTop);
    isModalActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isModalActive, scrollY]);

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
      y: "-140%",
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
      pos="absolute"
      w="100vw"
      h="100vh"
      bg={colorMode == "light" ? "rgba(60,60,60,0.6)" : "rgba(0,0,0,0.7)"}
      top={scrollY}
      left="0"
      zIndex="98"
      overflow="auto"
      justifyContent="center"
      pt="84px"
      onClick={(e) => {
        e.stopPropagation();
        setIsModalActive(false);
      }}
      sx={{
        scrollbarGutter: "stable both-edges",
        "::-webkit-scrollbar-thumb": {
          backgroundColor: colorMode == "light" ? "#dadada" : "#292929",
        },
      }}
      variants={modalBgVariants}
      animate={isModalActive ? "open" : "closed"}
    >
      <MotionBox
        className="modal__container"
        pos="relative"
        mb="84px"
        w="720px"
        h="max-content"
        borderRadius="24px"
        bg={colorMode == "light" ? "white" : "#222222"}
        p="16px"
        zIndex="99"
        variants={modalVariants}
        animate={isModalActive ? "open" : "closed"}
        overflow="none"
        onClick={(e) => {
          e.stopPropagation();
        }}
        // transition="all .25s"
      >
        {/* Modal body */}
        <Box className="modal__body" p="30px" transition="all .25s">
          {/* <WizardWidget /> */}
        </Box>
      </MotionBox>
    </MotionBox>
  );
};
