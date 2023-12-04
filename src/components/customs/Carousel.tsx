import React, { useState, useEffect, ReactNode, useRef } from "react";
import { Box, Button, Flex, BoxProps, Center } from "@chakra-ui/react";
import "../../styles/Carousel.css";
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
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % React.Children.count(children)
        );
      }, duration);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, duration, children, isPaused]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.touches[0].clientX;
      const deltaX = touchEndX - touchStartX.current;

      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          goToPrevSlide();
        } else {
          goToNextSlide();
        }

        touchStartX.current = null;
        setIsPaused(false);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const goToNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % React.Children.count(children)
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...boxProps}
      pos="relative"
    >
      <Flex alignItems="center" pos="absolute" h="full" left="2" zIndex="1">
        <Center
          onClick={goToPrevSlide}
          w="48px"
          h="48px"
          cursor="pointer"
          color="white"
          borderRadius="16px"
          transition=".25s all"
          _hover={{ bg: "whiteAlpha.400" }}
        >
          <ArrowLeftOutlineIconMade fontSize="20px" />
        </Center>
      </Flex>
      <Flex alignItems="center" pos="absolute" h="full" right="2" zIndex="1">
        <Center
          onClick={goToNextSlide}
          w="48px"
          h="48px"
          cursor="pointer"
          color="white"
          borderRadius="16px"
          transition=".25s all"
          _hover={{ bg: "whiteAlpha.400" }}
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
    </Box>
  );
};

export default Carousel;
