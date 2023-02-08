import { AspectRatio, Box, Button, Container, Input, Text, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useAnimation } from "framer-motion";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { useCallback, useRef, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";

function Upload6Page() {
  const router = useRouter();
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();

  const fileRef = useRef(null);

  const [fileName, setFileName] = useState("");

  const handleClickNextButton = useCallback(() => {
    if (!fileRef.current || fileRef.current.files.length < 1) {
      return;
    }

    const formData = new FormData();

    const name = localStorage.getItem(LOCAL_STORAGE_KEY.UPLOAD_NAME_KEY);
    const description = localStorage.getItem(LOCAL_STORAGE_KEY.UPLOAD_DESCRIPTION_KEY);
    const tags = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.UPLOAD_TAGS_KEY));
    const alcoholIds = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.UPLOAD_ALCOHOLS_KEY));
    const ingredient = localStorage.getItem(LOCAL_STORAGE_KEY.UPLOAD_INGREDIENT_KEY);
    const detailSteps = localStorage.getItem(LOCAL_STORAGE_KEY.UPLOAD_STEPS_KEY);
    const file = fileRef.current.files[0];

    formData.append("name", name);
    formData.append("description", description);
    tags.forEach((tag) => formData.append("tag", tag));
    alcoholIds.forEach((alcoholId) => formData.append("alcoholId", alcoholId));
    formData.append("ingredient", ingredient);
    formData.append("detailSteps", detailSteps);
    formData.append("file", file);

    // TODO: send formdata and get recipe id

    const responseId = 1;
    router.push(`/recipe/${responseId}`);
  }, [router]);

  return (
    <SearchSectionLayout
      title="완성된 사진을 보여주세요!"
      stepString="6 / 6"
      onClickPrevButton={() => {
        router.push("/upload/5");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="완성!"
      disableButton={fileName.length === 0}
    >
      <AspectRatio h="72px" w="100%" ratio={1} marginBottom="16px">
        <Box
          backgroundColor="white"
          color={"black"}
          borderRadius="24px"
          fontSize={"24px"}
          fontWeight="bold"
        >
          사진 추가
          <Input
            ref={fileRef}
            onChange={(e) => setFileName(e.target.files[0].name)}
            type="file"
            accept="image/*"
            height="100%"
            width="100%"
            position="absolute"
            onDragEnter={startAnimation}
            onDragLeave={stopAnimation}
            aria-hidden="true"
            opacity="0"
          />
        </Box>
      </AspectRatio>
      {fileName && <Text>등록된 파일 명: {fileName}</Text>}
    </SearchSectionLayout>
  );
}

export default Upload6Page;
