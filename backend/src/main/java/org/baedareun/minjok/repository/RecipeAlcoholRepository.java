package org.baedareun.minjok.repository;

import java.util.List;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.entity.RecipeAlcohol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RecipeAlcoholRepository extends JpaRepository<RecipeAlcohol, Integer> {

    @Query("select ra from RecipeAlcohol ra where ra.alcohol.id in :alcoholIds")
    List<RecipeAlcohol> findByAlcoholIds(List<Integer> alcoholIds);

    List<RecipeAlcohol> findAllByRecipe(Recipe recipe);
}
