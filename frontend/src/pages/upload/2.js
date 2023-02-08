import { Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";

function Upload2Page() {
  const router = useRouter();

  const [description, setDescription] = useState("");

  const handleClickNextButton = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.UPLOAD_DESCRIPTION_KEY, description);
    router.push("/upload/3");
  }, [router, description]);

  return (
    <SearchSectionLayout
      title="술에 대해 간단히 소개해주세요"
      stepString="2 / 6"
      onClickPrevButton={() => {
        router.push("/upload/1");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="다음 단계로"
      disableButton={description.length <= 0}
    >
      <Textarea
        size="md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="레시피 설명"
        fontSize={"20px"}
        focusBorderColor="white"
        backgroundColor="white"
        borderRadius={"24px"}
        padding={"12px 16px 12px 16px"}
        h="200px"
        resize="none"
      />
    </SearchSectionLayout>
  );
}

export default Upload2Page;
