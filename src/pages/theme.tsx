import { extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins'
import '@fontsource/roboto'

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  components: {
    Link: {
      baseStyle: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        }
      },
    }
  }
})

export default theme