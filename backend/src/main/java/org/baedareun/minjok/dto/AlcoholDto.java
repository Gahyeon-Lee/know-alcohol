package org.baedareun.minjok.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.baedareun.minjok.entity.Alcohol;

@Getter
@AllArgsConstructor
public class AlcoholDto {
    private final int id;
    private final String name;
    private final String photoKey;

    public static AlcoholDto of(Alcohol alcohol) {
        return new AlcoholDto(alcohol.getId(), alcohol.getName(), "static/alcohols/" + alcohol.getPhoto());
    }
}
