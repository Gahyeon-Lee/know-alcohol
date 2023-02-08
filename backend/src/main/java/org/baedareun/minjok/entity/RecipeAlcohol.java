package org.baedareun.minjok.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import lombok.Setter;

@Setter
@Getter
@Entity
@NoArgsConstructor
public class RecipeAlcohol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn
    private Recipe recipe;

    @ManyToOne
    @JoinColumn
    private Alcohol alcohol;

    public RecipeAlcohol(Recipe recipe, Alcohol alcohol) {
        this.recipe = recipe;
        this.alcohol = alcohol;
    }
}
