import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const BoxSpaceBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  return <Box h="60px" display={isVisible ? "block" : "none"} />;
};

export default BoxSpaceBottom;
