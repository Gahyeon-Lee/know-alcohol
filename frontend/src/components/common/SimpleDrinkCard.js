import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

function SimpleDrinkCard({ name, imageSrc, imageAlt, selected, ...props }) {
  return (
    <Flex
      direction="column"
      align="center"
      borderRadius="24px"
      bgColor="white"
      boxShadow={selected && "0 0 0 4px #5F2FE8 inset"}
      {...props}
    >
      <Box width="100%" height="160px" padding="20px">
        <Box position="relative" width="100%" height="100%">
          <Image src={imageSrc} alt={imageAlt ?? "주류 이미지"} layout="fill" objectFit="contain" />
        </Box>
      </Box>
      <Box padding="16px 12px">
        <Text fontSize="24px" fontWeight="bold">
          {name}
        </Text>
      </Box>
    </Flex>
  );
}

export default SimpleDrinkCard;
