package org.baedareun.minjok.repository;

import java.util.List;
import org.baedareun.minjok.entity.Recipe;
import org.baedareun.minjok.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Integer> {
    List<Tag> findAllByRecipe(Recipe recipe);
}
