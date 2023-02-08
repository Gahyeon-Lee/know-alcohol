package org.baedareun.minjok.controller;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.baedareun.minjok.dto.AlcoholDto;
import org.baedareun.minjok.dto.AlcoholTypeDto;
import org.baedareun.minjok.enums.AlcoholType;
import org.baedareun.minjok.repository.AlcoholRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("alcohols")
public class AlcoholsController {

    private final AlcoholRepository alcoholRepository;

    @GetMapping("types")
    public List<AlcoholTypeDto> getAlcoholTypes() {
        return Arrays.stream(AlcoholType.values())
            .map(alcoholType -> new AlcoholTypeDto(alcoholType.getName(), alcoholType.getPhotoKey()))
            .sorted(Comparator.comparing(AlcoholTypeDto::getName))
            .collect(Collectors.toList());
    }

    @GetMapping("")
    public List<AlcoholDto> getAlcohols(
        @RequestParam(value = "type", required = false) List<String> type,
        @RequestParam(value = "keyword", required = false) String keyword
    ) {
        List<AlcoholType> alcoholTypes = type != null ? type.stream()
            .map(AlcoholType::of)
            .collect(Collectors.toList()) : null;

        if (type != null && !type.isEmpty()) {
            return alcoholRepository.findAlcoholsByAlcoholTypesAndKeyword(alcoholTypes, keyword).stream()
                .map(AlcoholDto::of)
                .collect(Collectors.toList());
        } else if (type == null) {
            return alcoholRepository.findAlcoholsByKeyword(keyword).stream()
                .map(AlcoholDto::of)
                .collect(Collectors.toList());
        } else {
            return alcoholRepository.findAlcoholsByAlcoholTypes(alcoholTypes).stream()
                .map(AlcoholDto::of)
                .collect(Collectors.toList());
        }
    }
}
