package org.baedareun.minjok.controller;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.baedareun.minjok.enums.TagType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("tags")
public class TagController {

    @GetMapping("")
    public List<String> getTags() {
        return Arrays.stream(TagType.values())
            .map(TagType::getName)
            .sorted()
            .collect(Collectors.toList());
    }
}
