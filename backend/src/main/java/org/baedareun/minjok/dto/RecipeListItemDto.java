package org.baedareun.minjok.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.baedareun.minjok.entity.Recipe;

@Getter
@AllArgsConstructor
public class RecipeListItemDto {
    private final int id;
    private final String name;
    private final String photoKey;
    private final String description;
    private final int likeCount;

    public static RecipeListItemDto of(Recipe recipe) {
        return new RecipeListItemDto(
            recipe.getId(),
            recipe.getName(),
            "static/alcohols/" + recipe.getPhoto(),
            recipe.getDescription(),
            recipe.getLikeCount()
        );
    }
}
