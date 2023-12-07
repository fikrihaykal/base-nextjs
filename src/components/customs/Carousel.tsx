import React, { useState, useEffect, ReactNode, useRef } from "react";
import { Box, Flex, Center, useColorMode, BoxProps } from "@chakra-ui/react";
import {
  ArrowLeftOutlineIconMade,
  ArrowRightOutlineIconMade,
} from "../atoms/IconsMade";

interface CarouselProps extends BoxProps {
  duration?: number;
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
  duration = 5000,
  children,
  ...boxProps
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % React.Children.count(children)
      );
      setActiveDot(
        (prevIndex) => (prevIndex + 1) % React.Children.count(children)
      );
    }, duration);

    return () => clearInterval(intervalId);
  }, [currentIndex, duration, children]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const deltaX = touchEndX.current - touchStartX.current;

      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          goToPrevSlide();
        } else {
          goToNextSlide();
        }
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const goToNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % React.Children.count(children)
    );
    setActiveDot(
      (prevIndex) => (prevIndex + 1) % React.Children.count(children)
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
    setActiveDot((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setActiveDot(index);
  };

  const { colorMode } = useColorMode();

  return (
    <Box
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      {...boxProps}
      pos="relative"
    >
      <Flex alignItems="center" pos="absolute" h="full" left="0" zIndex="1">
        <Center
          onClick={goToPrevSlide}
          w="32px"
          h="56px"
          cursor="pointer"
          borderRadius="0px 24px 24px 0px"
          transition=".25s all"
          bg={colorMode === "light" ? "white" : "gray.900"}
          color={colorMode === "light" ? "gray.700" : "gray.300"}
          boxShadow="xl"
          _hover={{
            bg: colorMode === "light" ? "white" : "gray.900",
            w: "42px",
          }}
        >
          <ArrowLeftOutlineIconMade fontSize="20px" />
        </Center>
      </Flex>
      <Flex alignItems="center" pos="absolute" h="full" right="0" zIndex="1">
        <Center
          onClick={goToNextSlide}
          w="32px"
          h="56px"
          cursor="pointer"
          borderRadius="24px 0px 0px 24px"
          transition=".25s all"
          bg={colorMode === "light" ? "white" : "gray.900"}
          color={colorMode === "light" ? "gray.700" : "gray.300"}
          boxShadow="xl"
          _hover={{
            bg: colorMode === "light" ? "white" : "gray.900",
            w: "42px",
          }}
        >
          <ArrowRightOutlineIconMade fontSize="20px" />
        </Center>
      </Flex>
      <Box
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="slide-content">
            {child}
          </div>
        ))}
      </Box>
      <Flex
        pos="absolute"
        bottom={{ base: "20px", a: "16px" }}
        w="full"
        justifyContent="center"
      >
        <Flex
          p={{ base: "8px", a: "6px" }}
          bg={colorMode === "light" ? "white" : "gray.900"}
          borderRadius="full"
          gap={{ base: "6px", a: "4px" }}
        >
          {React.Children.map(children, (_, index) => (
            <Box
              key={index}
              w={{
                base: index === activeDot ? "32px" : "14px",
                a: index === activeDot ? "20px" : "8px",
              }}
              h={{ base: "14px", a: "8px" }}
              borderRadius="full"
              bg={
                index === activeDot
                  ? colorMode === "light"
                    ? "gray.700"
                    : "gray.300"
                  : colorMode === "light"
                  ? "gray.300"
                  : "gray.700"
              }
              cursor="pointer"
              onClick={() => handleDotClick(index)}
              transition=".25s all"
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Carousel;
