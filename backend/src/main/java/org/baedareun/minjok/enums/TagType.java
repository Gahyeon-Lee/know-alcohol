package org.baedareun.minjok.enums;

import java.util.Arrays;
import java.util.Objects;

public enum TagType {
    DOSU_HIGH("도수 높은"),
    DOSU_LOW("도수 낮은"),
    SOFT("부드러운"),
    SWEET("달달한"),
    SAECOM("새콤한"),
    TOK("톡 쏘는"),
    SALTY("쌉쌀한"),
    WITH_FRIENDS("친구들끼리"),
    WITH_LOVER("연인끼리"),
    WITH_FAMILY("가족끼리"),
    ALONE("혼자");



    final private String name;

    TagType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public static TagType of(String type) {
        return Arrays.stream(TagType.values())
            .filter(tagType -> Objects.equals(tagType.name, type))
            .findFirst()
            .get();
    }
}
