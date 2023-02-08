import { SimpleGrid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SimpleDrinkCard from "../../components/common/SimpleDrinkCard";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";
import { MOCKUP_KIND_OF_DRINKS } from "../../mockups/kindOfDrink";

function PreferredKindSearchPage() {
  const router = useRouter();

  const [kinds, setKinds] = useState(
    MOCKUP_KIND_OF_DRINKS.map((kind) => ({ ...kind, selected: false }))
  );

  const [selectedCount, setSelectedCount] = useState(0);

  const handleClickNextButton = useCallback(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY.SEARCH_KINDS_KEY,
      JSON.stringify(kinds.filter((kind) => kind.selected))
    );
    router.push("/search/3");
  }, [router, kinds]);

  return (
    <SearchSectionLayout
      title="어떤 주종을 선호하시나요?"
      stepString="2 / 3"
      onClickPrevButton={() => {
        router.push("/search/1");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="다음 단계로"
      disableButton={selectedCount <= 0}
    >
      <SimpleGrid columns={2} spacing="20px" overflowY="scroll">
        {kinds.map((kind, idx) => (
          <SimpleDrinkCard
            onClick={() => {
              if (kind.selected) {
                setSelectedCount(selectedCount - 1);
              } else {
                setSelectedCount(selectedCount + 1);
              }

              setKinds([
                ...kinds.slice(0, idx),
                { ...kind, selected: !kind.selected },
                ...kinds.slice(idx + 1, kinds.length),
              ]);
            }}
            _hover={{
              cursor: "pointer",
            }}
            selected={kind.selected}
            key={idx}
            name={kind.name}
            imageSrc={kind.photo}
          />
        ))}
      </SimpleGrid>
    </SearchSectionLayout>
  );
}

export default PreferredKindSearchPage;
