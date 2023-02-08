package org.baedareun.minjok.repository;

import java.util.List;
import org.baedareun.minjok.entity.Alcohol;
import org.baedareun.minjok.enums.AlcoholType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AlcoholRepository extends JpaRepository<Alcohol, Integer> {

    @Query("select a from Alcohol a where a.alcoholType in :types and a.name like %:keyword%")
    List<Alcohol> findAlcoholsByAlcoholTypesAndKeyword(List<AlcoholType> types, String keyword);

    @Query("select a from Alcohol a where a.alcoholType in :types")
    List<Alcohol> findAlcoholsByAlcoholTypes(List<AlcoholType> types);

    @Query("select a from Alcohol a where a.name like %:keyword%")
    List<Alcohol> findAlcoholsByKeyword(String keyword);

}
