import { Tag, Wrap } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";
import { MOCKUP_TAGS } from "../../mockups/tags";

function TagSearchPage() {
  const router = useRouter();

  const [tags, setTags] = useState(MOCKUP_TAGS.map((tag) => ({ name: tag, selected: false })));

  const [selectedCount, setSelectedCount] = useState(0);

  const handleClickNextButton = useCallback(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY.SEARCH_TAGS_KEY,
      JSON.stringify(tags.filter((tag) => tag.selected).map((tag) => tag.name))
    );
    router.push("/search/2");
  }, [router, tags]);

  return (
    <SearchSectionLayout
      title="선호하시는 태그를 선택해주세요"
      stepString="1 / 3"
      onClickPrevButton={() => {
        router.push("/search/0");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="다음 단계로"
      disableButton={selectedCount <= 0}
    >
      <Wrap spacing="8px">
        {tags.map((tag, idx) => (
          <Tag
            onClick={() => {
              if (tag.selected) {
                setSelectedCount(selectedCount - 1);
              } else {
                setSelectedCount(selectedCount + 1);
              }

              setTags([
                ...tags.slice(0, idx),
                { ...tag, selected: !tag.selected },
                ...tags.slice(idx + 1, tags.length),
              ]);
            }}
            _hover={{ cursor: "pointer" }}
            variant={tag.selected ? "selected" : "solid"}
            key={idx}
            size="lg"
          >
            {tag.name}
          </Tag>
        ))}
      </Wrap>
    </SearchSectionLayout>
  );
}

export default TagSearchPage;
