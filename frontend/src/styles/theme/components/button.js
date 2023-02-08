import { defineStyleConfig, flexbox } from "@chakra-ui/react";

export const CustomButton = defineStyleConfig({
  sizes: {
    lg: {
      fontSize: "24px",
      fontWeight: "bold",
      borderRadius: "24px",
      display: "flex",
      paddingX: "32px",
      paddingY: "22px",
      height: "auto",
    },
  },
  variants: {
    solid: {
      bg: "primary",
      color: "white",
      _hover: {
        bg: "purple.600",
      },
      _active: {
        bg: "purple.700",
      },
      _disabled: {
        bg: "primary !important",
      },
    },
  },
});
