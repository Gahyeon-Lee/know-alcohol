import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";

function SearchSectionLayout({
  stepString,
  title,
  onClickPrevButton,
  onClickNextButton,
  buttonText,
  disableButton,
  children,
}) {
  return (
    <Container>
      <Flex
        direction="column"
        position="relative"
        as="section"
        paddingTop="40px"
        height="100vh"
        overflow="hidden"
      >
        <VStack spacing="32px" align="flex-start" marginBottom="40px">
          <HStack spacing="12px">
            <IconButton
              onClick={onClickPrevButton}
              variant="ghost"
              marginLeft="-12px"
              icon={<ChevronLeftIcon w="48px" h="48px" />}
            />
            <Text fontSize="20px" fontWeight="bold">
              {stepString}
            </Text>
          </HStack>
          <Heading fontSize="32px">{title}</Heading>
        </VStack>

        <Box flex="1" overflowY="scroll" paddingBottom="40px">
          {children}
        </Box>

        {buttonText && (
          <Button
            onClick={onClickNextButton}
            variant="solid"
            size="lg"
            width="100%"
            margin="0 auto 60px"
            disabled={disableButton}
          >
            {buttonText}
          </Button>
        )}
      </Flex>
    </Container>
  );
}

export default SearchSectionLayout;
