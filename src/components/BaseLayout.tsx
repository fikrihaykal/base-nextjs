import { Box, Flex, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import Sidebar from "./organisms/Sidebar";
import Sidebar2 from "./organisms/Sidebar2";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -200, y: 0 },
};

const BaseLayout = ({ children }: { children: ReactNode }) => {
  const page = useRouter();
  return (
    <>
      
    </>
  );
};

export default BaseLayout;
