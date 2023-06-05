import { Box } from "@chakra-ui/react";
import MainMenuItem from "../molecules/MainMenuItem";
import { menuItem } from "@/data/dummy";
import { motion } from "framer-motion";
import MainMenuItem2 from "../molecules/MainMenuItem2";

// Menu item = isParentMenu, Icon, name, link

const MainMenu = () => {
  return (
    <>
      <motion.div
      layout
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "start",
          width: "100%",
        //   height: "100vh",
          zIndex: "0",
          borderRadius: "full",
          // backgroundColor: "yellow",
          flexDirection: "column",
          paddingBottom: "30px",
          paddingRight: "10px"
         
          // gap: "2px",
        }}
      >
        {menuItem.map((item, index) => (
          <MainMenuItem2
            menuItem={item}
            menuIndex={index}
            key={"main-menu-item-" + index}
          />
        ))}
      </motion.div>
    </>
  );
};

export default MainMenu;
