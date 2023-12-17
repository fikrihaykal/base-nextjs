// ScrollToTopButton.tsx
import React, { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import { ArrowUpOutlineIconMade } from "../atoms/IconsMade";
import { PrimarySubtleButton } from "./Buttons/PrimaryButton";
// import "../../styles/styles.css"; // Import style file

const ScrollToTopButton: React.FC = () => {
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
      className={isVisible ? "fade-in-out" : ""} // Apply fade-in-out class
    >
      <ArrowUpOutlineIconMade fontSize="20px" />
    </PrimarySubtleButton>
  );
};

export default ScrollToTopButton;