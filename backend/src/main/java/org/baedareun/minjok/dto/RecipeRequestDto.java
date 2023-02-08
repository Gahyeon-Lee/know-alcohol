package org.baedareun.minjok.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.baedareun.minjok.entity.Recipe;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Builder
@AllArgsConstructor
public class RecipeRequestDto {
    private String name;
    private String description;
    private String ingredient;
    private MultipartFile file;
    private String detailSteps;
    private List<String> tag;
    private List<Integer> alcoholId;

    public Recipe toEntity() {
        return new Recipe(
            this.name,
            this.description,
            this.ingredient,
            this.file.getOriginalFilename(),
            this.getDetailSteps()
        );
    }
}
