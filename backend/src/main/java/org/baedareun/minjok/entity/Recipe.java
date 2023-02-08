package org.baedareun.minjok.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import org.hibernate.annotations.ColumnDefault;

@Getter
@Entity
@NoArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String name;

    @Column
    private String description;

    @Column
    private String ingredient;

    @Column
    private String photo;

    @Column
    @ColumnDefault("0")
    private int likeCount;

    @Column
    private String detailSteps;

    @Builder
    public Recipe(String name, String description, String ingredient, String photo, String detailSteps) {
        this.name = name;
        this.description = description;
        this.ingredient = ingredient;
        this.photo = photo;
        this.detailSteps = detailSteps;
    }
    
    public void incrementLikeCount() {
        this.likeCount += 1;
    }

    public void decrementLikeCount() {
        if (this.likeCount > 0) {
            this.likeCount -= 1;
        }
    }
}
