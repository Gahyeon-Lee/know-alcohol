import { extendTheme } from "@chakra-ui/react";
import { CustomButton } from "./components/button";
import { CustomContainer } from "./components/container";
import { CustomTag } from "./components/tag";

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        backgroundColor: "gray.300",
      },
      body: {
        bgColor: "#E8ECF0",
        maxWidth: "460px",
        width: "100%",
        minHeight: "100vh",
        margin: "0 auto",
        overflowX: "hidden",
      },
    },
  },

  colors: {
    primary: "#5F2FE8",
  },

  fonts: {
    heading: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },

  components: {
    Container: CustomContainer,
    Button: CustomButton,
    Tag: CustomTag,
  },
});
