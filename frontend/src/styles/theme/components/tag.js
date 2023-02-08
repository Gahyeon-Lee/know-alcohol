import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderRadius: "99px",
  },
});

const solid = definePartsStyle({
  container: {
    bg: "white",
    color: "#5C5769",
    padding: "8px 20px",
  },
});

const selected = definePartsStyle({
  container: {
    bg: "primary",
    color: "white",
    padding: "8px 20px",
  },
});

export const CustomTag = defineMultiStyleConfig({
  baseStyle,
  variants: {
    solid,
    selected,
  },
  defaultProps: {
    variant: "solid",
  },
});
