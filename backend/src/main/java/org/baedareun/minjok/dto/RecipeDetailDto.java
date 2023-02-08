package org.baedareun.minjok.dto;

import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.baedareun.minjok.entity.Alcohol;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.entity.Tag;
import org.baedareun.minjok.enums.TagType;

@Getter
@AllArgsConstructor
public class RecipeDetailDto {
    private final int id;
    private final String name;
    private final String description;
    private final String ingredient;
    private final String photoKey;
    private final int likeCount;
    private final String detailSteps;
    private final List<String> tags;
    private final List<AlcoholDto> alcohols;

    public RecipeDetailDto(Recipe recipe, List<Tag> tags, List<Alcohol> alcohols) {
        this.id = recipe.getId();
        this.name = recipe.getName();
        this.description = recipe.getDescription();
        this.ingredient = recipe.getIngredient();
        this.photoKey = "static/alcohols/" + recipe.getPhoto();
        this.likeCount = recipe.getLikeCount();
        this.detailSteps = recipe.getDetailSteps();
        this.tags = tags.stream().map(Tag::getType).map(TagType::getName).distinct().collect(
            Collectors.toList());
        this.alcohols = alcohols.stream().map(AlcoholDto::of).collect(Collectors.toList());
    }
}
