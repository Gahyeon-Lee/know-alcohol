import { Search2Icon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  Stack,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DrinkCard from "../components/common/DrinkCard";
import drinkImage from "/public/images/drink.png";
import { AddIcon } from "@chakra-ui/icons";
import { MOCKUP_RECIPES } from "../mockups/recipes";

function MainPage() {
  const router = useRouter();

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
          <InputGroup
            onClick={() => {
              router.push("/search/0");
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              top="5px"
              left="15px"
              w="24px"
              // eslint-disable-next-line react/no-children-prop
              children={<Search2Icon color="primary" />}
            />
            <Input
              _hover={{
                cursor: "pointer",
              }}
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
            />
          </InputGroup>
        </Stack>
      </Box>
      <Heading size="lg" color="black" paddingTop="20px" paddingLeft={"20px"} paddingRight={"20px"}>
        11월의 인기 레시피
      </Heading>
      <SimpleGrid columns={2} spacing="15px" padding="20px">
        {MOCKUP_RECIPES.map((recipe) => (
          <DrinkCard
            id={recipe.id}
            key={recipe.id}
            imageSrc={recipe.imageSrc}
            name={recipe.name}
            description={recipe.description}
            likeCount={recipe.likeCount}
            commentCount={recipe.commentCount}
          />
        ))}
      </SimpleGrid>
      <IconButton
        onClick={() => router.push("/upload/1")}
        backgroundColor={"primary"}
        color="white"
        borderRadius="50%"
        h="80px"
        w="80px"
        position="absolute"
        bottom="20px"
        right="20px"
        icon={<AddIcon w="36px" h="36px" />}
      />
    </Container>
  );
}

export default MainPage;
