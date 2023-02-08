import { Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";

function UploadStartPage() {
  const router = useRouter();

  const [name, setName] = useState("");

  const handleClickNextButton = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.UPLOAD_NAME_KEY, name);
    router.push("/upload/2");
  }, [router, name]);

  return (
    <SearchSectionLayout
      title="레시피의 이름을 입력해주세요"
      stepString="1 / 6"
      onClickPrevButton={() => {
        router.push("/");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="다음 단계로"
      disableButton={name.length <= 0}
    >
      <Input
        size="lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="레시피 이름"
        fontSize={"20px"}
        focusBorderColor="white"
        backgroundColor="white"
        borderRadius={100}
        w="100%"
      />
    </SearchSectionLayout>
  );
}

export default UploadStartPage;
