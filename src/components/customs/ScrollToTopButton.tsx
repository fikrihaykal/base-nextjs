import { FaArrowUp } from "react-icons/fa";
import { DarkButton } from "../atoms/Buttons/DarkButton";
import { useColorMode } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ArrowTopOutlineIconMade } from "../atoms/IconsMade";
import { SecondaryButton } from "../atoms/Buttons/SecondaryButton";
import { PrimarySubtleButton } from "../atoms/Buttons/PrimaryButton";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { colorMode } = useColorMode();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PrimarySubtleButton
      onClick={handleScrollTop}
      position="fixed"
      bottom="8"
      right="4"
      zIndex="1"
      minW="50px"
      w="60px"
      display={isVisible ? "block" : "none"}
    >
      <ArrowTopOutlineIconMade fontSize="20px" />
    </PrimarySubtleButton>
  );
};

export default ScrollToTopButton;
