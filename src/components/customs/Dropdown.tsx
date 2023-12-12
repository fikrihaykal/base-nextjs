import { DropdownItem } from "@/types/dropdown-items";
import { Box, Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";

interface DropdownInterface {
  placeholder: string;
  data: Array<DropdownItem>;
}

const Dropdown = ({ placeholder, data }: DropdownInterface) => {
  const { colorMode } = useColorMode();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(placeholder);
  const dropdownOutsideClickRef = useRef(null);
  useOutsideAlerter(dropdownOutsideClickRef);

  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside({ target }: MouseEvent) {
        if (!ref.current?.contains(target as Node)) {
          setDropdownActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const changeDropdownActive = () => {
    if (dropdownActive) {
      setDropdownActive(false);
    } else if (!dropdownActive) {
      setDropdownActive(true);
    }
  };

  return (
    <>
      <Box
        className="dropdown"
        ref={dropdownOutsideClickRef}
        width="full"
        pos="relative"
        // _notFirst={{
        //   marginTop: { base: "16px", m: "0" },
        // }}
      >
        <Flex
          className="dropdown__head"
          onClick={changeDropdownActive}
          pos="relative"
          alignItems="center"
          h="56px"
          p="0 46px 0 21px"
          border={
            dropdownActive
              ? colorMode == "light"
                ? "2px solid #008fff"
                : "2px solid #0071ca"
              : "2px solid transparent"
          }
          bg={colorMode == "light" ? "rgba(228,228,228,0.3)" : "#292929"}
          borderRadius="16px"
          fontWeight="600"
          color={
            dropdownActive
              ? colorMode == "light"
                ? "#000"
                : "#fff"
              : "#808080"
          }
          fontSize="14px"
          transition="all .25s"
          cursor="pointer"
          _before={{
            content: '""',
            position: "absolute",
            top: "50%",
            bottom: "50%",
            right: "20px",
            transform: dropdownActive
              ? "translateY(-60%) rotate(180deg)"
              : "translateY(-50%) rotate(0)",
            width: "14px",
            height: "8px",
            backgroundImage: `url(/arrowdown.svg)`,
            filter: colorMode == "light" ? "none" : "invert(1)",
            transition:
              "transform .25s, -webkit-transform .25s, -moz-transform .25s",
          }}
        >
          <Text wordBreak="keep-all" noOfLines={1}>
            {dropdownValue}
          </Text>
        </Flex>

        <Box
          className="dropdown__body"
          pos="absolute"
          top="calc(100% + 8px)"
          left="0"
          zIndex="20"
          w="100%"
          // maxW="310px"
          h="max-content"
          p="24px"
          borderRadius="18px"
          border={
            colorMode == "light" ? "1px solid #e4e4e4" : "1px solid #333333"
          }
          bg={colorMode == "light" ? "#fff" : "#222222"}
          visibility={dropdownActive ? "visible" : "hidden"}
          opacity={dropdownActive ? "1" : "0"}
          transition="all .25s"
          boxShadow={
            colorMode == "light"
              ? "0 4px 16px rgba(227, 230, 236, 0.4)"
              : "0 4px 24px rgba(0, 0, 0, 0.15)"
          }
        >
          {data.map((item, index) => (
            <Link
              as={NextLink}
              href="#"
              //   href={item.url}
              display="block"
              className="dropdown__link"
              _notLast={{
                marginBottom: "16px",
              }}
              onClick={() => {
                setDropdownValue(item.title);
                changeDropdownActive();
                // function to do the actual filtering
              }}
              key={"key-download-" + index}
            >
              <Box
                data-group="dropdown-item"
                className="dropdown__item"
                display="block"
              >
                <Box
                  className="dropdown__title"
                  pos="relative"
                  mb="3px"
                  pr="30px"
                  transition="color .25s"
                  _hover={{
                    _before: {
                      transform: "translateX(5px)",
                    },
                  }}
                  _before={{
                    content: '""',
                    pos: "absolute",
                    top: "5px",
                    right: "8px",
                    width: "6px",
                    height: "10px",
                    backgroundImage: "url(/chevright.svg)",
                    filter: colorMode == "light" ? "none" : "invert(1)",
                    // userinput
                    visibility: "hidden",
                    transition:
                      "transform .25s, -webkit-transform .25s, -moz-transform .25s",
                  }}
                >
                  <Text
                    _groupHover={{
                      color: "#0071ca",
                    }}
                    fontSize="14px"
                    lineHeight="1.1875"
                    fontWeight="600"
                  >
                    {item.title}
                  </Text>
                </Box>
                <Box
                  className="dropdown__subtitle"
                  pos="relative"
                  mb="3px"
                  pr="30px"
                  transition="color .25s"
                >
                  <Text
                    fontSize="13px"
                    lineHeight="1.38462"
                    fontWeight="600"
                    color="#808080"
                  ></Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Dropdown;
