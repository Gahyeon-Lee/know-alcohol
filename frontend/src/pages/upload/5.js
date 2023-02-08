import { Button, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fragment, useCallback, useRef, useState } from "react";
import SearchSectionLayout from "../../components/pages/search/SearchSectionLayout";
import { LOCAL_STORAGE_KEY } from "../../constants/localStorage";

function Upload5Page() {
  const router = useRouter();

  const [ingredient, setIngredient] = useState("");
  const [steps, setSteps] = useState(1);

  const textAreaRefs = useRef([]);

  const handleClickNextButton = useCallback(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.UPLOAD_INGREDIENT_KEY, ingredient);

    const stepTexts = textAreaRefs.current.map((ref) => ref.value);
    const stepString = stepTexts.join("|");
    localStorage.setItem(LOCAL_STORAGE_KEY.UPLOAD_STEPS_KEY, stepString);

    router.push("/upload/6");
  }, [router, ingredient]);

  return (
    <SearchSectionLayout
      title="추가 재료와 레시피를 적어주세요"
      stepString="5 / 6"
      onClickPrevButton={() => {
        router.push("/upload/4");
      }}
      onClickNextButton={handleClickNextButton}
      buttonText="다음 단계로"
    >
      <Text fontSize="20px" fontWeight="bold">
        재료
      </Text>
      <Input
        size="lg"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        variant="filled"
        bgColor="white"
        borderRadius="24px"
        placeholder="재료 입력"
        marginTop={"20px"}
        marginBottom="50px"
      />

      <VStack spacing="16px" align="flex-start" marginBottom="20px">
        {Array.from({ length: steps }, (v, i) => i).map((step) => (
          <Fragment key={step}>
            <Text fontSize="20px" fontWeight="bold">
              Step {step + 1}
            </Text>
            <Textarea
              ref={(el) => (textAreaRefs.current[step] = el)}
              size="md"
              placeholder="레시피 설명"
              fontSize={"18px"}
              focusBorderColor="white"
              backgroundColor="white"
              borderRadius={"24px"}
              padding={"12px 16px 12px 16px"}
              h="120px"
              resize="none"
            />
          </Fragment>
        ))}
      </VStack>

      <Button
        onClick={() => setSteps(steps + 1)}
        backgroundColor="white"
        color={"black"}
        borderRadius="24px"
        fontSize={"24px"}
        fontWeight="bold"
        size="lg"
        width="100%"
      >
        단계 추가
      </Button>
    </SearchSectionLayout>
  );
}

export default Upload5Page;
