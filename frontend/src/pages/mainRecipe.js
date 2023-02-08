import { Search2Icon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Stack,
  GridItem,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import DrinkCard from "../components/common/DrinkCard";
import drinkImage from "/public/images/drink.png";

function MainRecipe() {
  return (
    <Container padding={"0"}>
      <Box
        backgroundColor="primary"
        borderBottomRadius={30}
        paddingLeft={"20px"}
        paddingRight={"20px"}
        paddingTop={"40px"}
        paddingBottom={"20px"}
      >
        <Box position="relative" height="30px" />
        <Heading size="lg" color="black">
          알는척
        </Heading>
        <Heading size="2xl" color="white" paddingTop={"30px"} paddingBottom={"30px"}>
          미지의 주류 레시피의 세계에 오신걸 환영해요!
        </Heading>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              top="5px"
              left="15px"
              w="24px"
              // eslint-disable-next-line react/no-children-prop
              children={<Search2Icon color="primary" />}
            />
            <Input
              size="md"
              placeholder="맞춤 꿀조합 레시피를 찾아드려요!"
              fontSize={"20px"}
              focusBorderColor="white"
              backgroundColor="white"
              borderRadius={100}
              paddingTop="10px"
              paddingBottom="10px"
              marginBottom="20px"
              h="48px"
              w="390px"
            />
          </InputGroup>
        </Stack>
      </Box>
      <Heading size="lg" color="black" paddingTop="20px" paddingLeft={"20px"} paddingRight={"20px"}>
        11월의 인기 레시피
      </Heading>
      <SimpleGrid
        columns={2}
        spacing="15px"
        paddingTop="20px"
        paddingLeft={"20px"}
        paddingRight={"20px"}
      >
        <DrinkCard
          imageSrc={drinkImage}
          name="레시피"
          description="한줄설명한줄설명한줄설명한줄설명한줄설명"
          likeCount={10}
          commentCount={10}
        />
        <DrinkCard
          imageSrc={drinkImage}
          name="레시피"
          description="한줄설명한줄설명한줄설명한줄설명한줄설명"
          likeCount={10}
          commentCount={10}
        />
        <DrinkCard
          imageSrc={drinkImage}
          name="레시피"
          description="한줄설명한줄설명한줄설명한줄설명한줄설명"
          likeCount={10}
          commentCount={10}
        />
        <DrinkCard
          imageSrc={drinkImage}
          name="레시피"
          description="한줄설명한줄설명한줄설명한줄설명한줄설명"
          likeCount={10}
          commentCount={10}
        />
      </SimpleGrid>
      <Button
        backgroundColor={"primary"}
        color="white"
        borderRadius="100"
        h="80px"
        w="80px"
        fontSize="70px"
        fontWeight={"light"}
        position={"absolute"}
        bottom="20px"
        right="20px"
      >
        +
      </Button>
    </Container>
  );
}

export default MainRecipe;
