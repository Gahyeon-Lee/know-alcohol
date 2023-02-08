package org.baedareun.minjok.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.baedareun.minjok.dto.RecipeDetailDto;
import org.baedareun.minjok.dto.RecipeMetaDto;
import org.baedareun.minjok.dto.RecipeListItemDto;
import org.baedareun.minjok.dto.RecipeRequestDto;
import org.baedareun.minjok.entity.Alcohol;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.entity.RecipeAlcohol;
import org.baedareun.minjok.entity.Tag;
import org.baedareun.minjok.enums.TagType;
import org.baedareun.minjok.repository.AlcoholRepository;
import org.baedareun.minjok.repository.RecipeAlcoholRepository;
import org.baedareun.minjok.repository.RecipeRepository;
import org.baedareun.minjok.repository.TagRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RestController
@RequestMapping("recipes")
public class RecipeController {
    private final RecipeRepository recipeRepository;
    private final RecipeAlcoholRepository recipeAlcoholRepository;
    private final AlcoholRepository alcoholRepository;
    private final TagRepository tagRepository;

    @Transactional
    @PostMapping("")
    public RecipeMetaDto saveRecipe(@ModelAttribute RecipeRequestDto recipeRequestDto) throws IOException {
        // 파일 저장
        MultipartFile multipartFile = recipeRequestDto.getFile();
        File file = new File("src/main/resources/static/recipes/" + multipartFile.getOriginalFilename());
        if (!file.exists()) {
            file.mkdirs();
        }
        Path path = Paths.get(file.getAbsolutePath()).toAbsolutePath();
        multipartFile.transferTo(path.toFile());

        // Recipe 저장
        Recipe recipe = recipeRepository.save(recipeRequestDto.toEntity());

        // RecipeAlcohol 저장
        List<Alcohol> alcohols = alcoholRepository.findAllById(recipeRequestDto.getAlcoholId());
        List<RecipeAlcohol> recipeAlcohols = alcohols.stream()
            .map(alcohol -> new RecipeAlcohol(recipe, alcohol))
            .collect(Collectors.toList());
        recipeAlcoholRepository.saveAll(recipeAlcohols);

        // Tag 저장
        List<Tag> tags = recipeRequestDto.getTag().stream()
            .map(TagType::of)
            .map(tagType -> new Tag(recipe, tagType))
            .collect(Collectors.toList());
        tagRepository.saveAll(tags);

        return new RecipeMetaDto(recipe.getId(), recipe.getName());
    }

    @GetMapping("")
    public List<RecipeListItemDto> getRecipes(
        @RequestParam(value = "tag") List<String> tag,
        @RequestParam(value = "alcoholId", required = false) List<Integer> alcoholId
    ) {
        List<Recipe> recipes = recipeRepository.findByTags(tag.stream().map(TagType::of).collect(
            Collectors.toList()));

        if (alcoholId != null && !alcoholId.isEmpty()) {
            List<RecipeAlcohol> recipeAlcohols = recipeAlcoholRepository.findByAlcoholIds(alcoholId);
            List<Integer> recipeIds = recipeAlcohols.stream()
                .map(recipeAlcohol -> recipeAlcohol.getRecipe().getId())
                .distinct()
                .collect(
                    Collectors.toList());
            recipes = recipes.stream()
                .filter(recipe -> recipeIds.contains(recipe.getId()))
                .collect(Collectors.toList());
        }

        return recipes.stream()
            .map(RecipeListItemDto::of)
            .collect(Collectors.toList());
    }

    @GetMapping("popular")
    public List<RecipeListItemDto> getPopularRecipes() {
        return recipeRepository.findAllPopular().stream()
            .map(RecipeListItemDto::of)
            .collect(Collectors.toList());
    }

    @GetMapping("{id}")
    public RecipeDetailDto getRecipeById(@PathVariable int id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow();
        List<Tag> tags = tagRepository.findAllByRecipe(recipe);
        List<RecipeAlcohol> recipeAlcohols = recipeAlcoholRepository.findAllByRecipe(recipe);
        List<Integer> alcoholIds = recipeAlcohols.stream()
            .map(recipeAlcohol -> recipeAlcohol.getAlcohol().getId()).collect(Collectors.toList());
        List<Alcohol> alcohols = alcoholRepository.findAllById(alcoholIds);
        return new RecipeDetailDto(recipe, tags, alcohols);
    }

    @Transactional
    @PostMapping("{id}/likeCount")
    public void incrementLikeCount(@PathVariable int id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow();
        recipe.incrementLikeCount();
        recipeRepository.save(recipe);
    }

    @Transactional
    @DeleteMapping("{id}/likeCount")
    public void decrementLikeCount(@PathVariable int id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow();
        recipe.decrementLikeCount();
        recipeRepository.save(recipe);
    }
}
