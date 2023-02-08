import { Box } from "@chakra-ui/react";
import Image from "next/image";
import cocktailImage from "/public/images/cocktail.png";
import { useRouter } from "next/router";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";

function SearchStartPage() {
  const router = useRouter();

  return (
    <SearchSectionLayout
      title="취향에 맞는 술 제조 레시피를 찾아볼까요?"
      onClickPrevButton={() => {
        router.push("/");
      }}
      onClickNextButton={() => {
        router.push("/search/1");
      }}
      buttonText="시작하기"
    >
      <Box position="absolute" top="calc(50% - 80px)" left="calc(50% - 80px)">
        <Image src={cocktailImage} alt="술 이미지" width={160} height={160} objectFit="contain" />
      </Box>
    </SearchSectionLayout>
  );
}

export default SearchStartPage;
