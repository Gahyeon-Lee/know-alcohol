import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  Tag,
  Spacer,
  Center,
  IconButton,
} from "@chakra-ui/react";
import Image from "next/image";
import defaultDrinkImage from "/public/images/drink.png";
import aperollImage from "/public/images/aperoll.png";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  return (
    <Box>
      <Box bgColor="white" height="300px" padding="12px">
        <VStack spacing="3px" align="flex-start" height="50px" padding="12px">
          <Flex width="100%" justify="flex-start" columnGap="12px">
            <IconButton
              onClick={() => {
                router.push("/");
              }}
              variant="ghost"
              icon={<ChevronLeftIcon w="30px" h="30px" color="#5C5769" />}
            />
            <Spacer />
            <Icon as={AiFillHeart} w="24px" h="24px" color="#EE5757" />
            <Text fontSize="15px" color="black" as="b">
              12
            </Text>
          </Flex>
        </VStack>

        <Box minWidth="200px" borderRadius="24px" bgColor="white" padding="20px">
          <Flex direction="column">
            <Box position="relative" height="200px">
              <Image
                src={defaultDrinkImage}
                alt={"주류 이미지"}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Container paddingBottom="80px">
        <VStack align="flex-start" paddingTop="40px" spacing="20px">
          <Text fontSize="32px" as="b">
            아페롤 스프리츠(Aperol Spritz)
          </Text>
          <HStack spacing={4}>
            <Tag
              variant="solid"
              bgColor="#5F2FE8"
              borderRadius="full"
              fontSize="15px"
              color="white"
              height="40px"
            >
              여성이 선호하는
            </Tag>
            <Tag
              variant="solid"
              bgColor="#5F2FE8"
              borderRadius="full"
              fontSize="15px"
              color="white"
              height="40px"
            >
              연인끼리
            </Tag>
            <Tag
              variant="solid"
              bgColor="#5F2FE8"
              borderRadius="full"
              fontSize="15px"
              color="white"
              height="40px"
            >
              달달한
            </Tag>
          </HStack>
          <Text fontSize="24px" as="b" paddingTop="20px">
            필요한 주류
          </Text>

          <Box minWidth="150px" borderRadius="24px" bgColor="white">
            <Flex direction="column">
              <Box position="relative" height="150px" paddingTop="20px">
                <Image src={aperollImage} alt={"주류 이미지"} layout="fill" objectFit="contain" />
              </Box>
              <Center fontSize="24px" as="b" padding="12px">
                아페롤
              </Center>
            </Flex>
          </Box>
          <Text fontSize="16px" color="#5C5769">
            *아페롤 : 씁쓸한 비터 오렌지와 새콤한 맛으로 15도, 17도 버전 & 가격 : 750mL 기준
            38,000원
          </Text>
          <Text fontSize="24px" as="b" paddingTop="20px">
            재료
          </Text>
          <Text fontSize="16px" color="#5C5769">
            프로세코 60mL, 아페롤 40mL, 탄산수 20mL, 오렌지 슬라이스 1/2조각, 큐브 얼음
          </Text>
          <Text fontSize="24px" as="b" paddingTop="20px">
            레시피
          </Text>
          <Box
            variant="solid"
            bgColor="white"
            borderRadius="full"
            color="#5C5769"
            fontSize="16px"
            width="100%"
            padding="12px 16px"
          >
            1. 잔에 얼음을 채운다.
          </Box>
          <Box
            variant="solid"
            bgColor="white"
            borderRadius="full"
            color="#5C5769"
            fontSize="16px"
            width="100%"
            padding="12px 16px"
          >
            2. 오렌지 슬라이스를 제외한 나머지 재료를 넣고 바 스푼으로 젓는다.
          </Box>
          <Box
            variant="solid"
            bgColor="white"
            borderRadius="full"
            color="#5C5769"
            fontSize="12px 16px"
            width="100%"
            padding="16px"
          >
            3. 오렌지 슬라이스를 넣는다.
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default DetailPage;
