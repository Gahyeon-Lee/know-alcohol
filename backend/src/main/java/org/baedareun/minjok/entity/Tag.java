package org.baedareun.minjok.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import org.baedareun.minjok.enums.TagType;

@Getter
@Entity
@NoArgsConstructor
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn
    private Recipe recipe;

    @Column
    @Enumerated(EnumType.STRING)
    private TagType type;

    public Tag(Recipe recipe, TagType type) {
        this.recipe = recipe;
        this.type = type;
    }
}
