import { Box, Input, Tag, Textarea, Wrap } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";
import { MOCKUP_TAGS } from "../../mockups/tags";

function Upload3Page() {
  const router = useRouter();

  const [tags, setTags] = useState(MOCKUP_TAGS.map((tag) => ({ name: tag, selected: false })));

  const [selectedCount, setSelectedCount] = useState(0);

  const handleClickNextButton = useCallback(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY.UPLOAD_TAGS_KEY,
      JSON.stringify(tags.filter((tag) => tag.selected).map((tag) => tag.name))
    );
    router.push("/upload/4");
  }, [router, tags]);

  return (
    <SearchSectionLayout
      title="술에 대해서 잘 설명하는 태그를 선택해주세요"
      stepString="3 / 6"
      onClickPrevButton={() => {
        router.push("/upload/2");
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

export default Upload3Page;
