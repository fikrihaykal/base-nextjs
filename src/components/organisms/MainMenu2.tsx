import { Box } from "@chakra-ui/react";
import MainMenuItem from "../molecules/MainMenuItem";
import { menuItem } from "@/data/dummy";
import { motion } from "framer-motion";
import MainMenuItem2 from "../molecules/MainMenuItem2";
import AppSettingContext from "@/providers/AppSettingProvider";
import { useContext } from "react";

// Menu item = isParentMenu, Icon, name, link

const MainMenu = () => {
  const { isNavbarOpen, navbarToggler } = useContext(AppSettingContext);
  return (
    <>
      <motion.div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "start",
          width: "100%",
          zIndex: "0",
          borderRadius: "full",
          flexDirection: "column",
          paddingTop: "10px",
          paddingBottom: "30px",
          paddingRight: isNavbarOpen ? "17px" : "0px",
          backgroundColor: "transparent",
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
