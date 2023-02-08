package org.baedareun.minjok.repository;

import java.util.List;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.enums.TagType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

    @Query("select r from Recipe r join Tag t on r.id=t.recipe.id where t.type in :tagTypes")
    List<Recipe> findByTags(List<TagType> tagTypes);

    @Query("select r from Recipe r order by r.likeCount desc")
    List<Recipe> findAllPopular();
}
