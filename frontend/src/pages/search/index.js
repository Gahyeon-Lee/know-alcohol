import { SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import DrinkCard from "../../components/common/DrinkCard";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { MOCKUP_RECIPES } from "../../mockups/recipes";

function TagSearchPage() {
  const router = useRouter();

  return (
    <SearchSectionLayout
      title="검색 결과"
      stepString="홈으로"
      onClickPrevButton={() => {
        router.push("/");
      }}
    >
      <SimpleGrid columns={2} spacing="20px">
        {MOCKUP_RECIPES.map((drink, idx) => (
          <DrinkCard
            key={idx}
            imageSrc={drink.imageSrc}
            name={drink.name}
            description={drink.description}
            likeCount={drink.likeCount}
            commentCount={drink.commentCount}
          />
        ))}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default TagSearchPage;
