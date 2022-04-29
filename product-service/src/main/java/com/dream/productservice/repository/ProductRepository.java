package com.dream.productservice.repository;

import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.dream.productservice.dto.products;

public interface ProductRepository extends JpaRepository<products, Long>{
	
	@Modifying
	@Transactional
	@Query(value="UPDATE dream.products m SET m.proName=:#{#products.proName}, m.detail=:#{#products.detail}, m.need=:#{#products.need}, m.term=:#{#products.term}, m.proLimit=:#{#products.proLimit}, m.rate=:#{#products.rate} WHERE m.proNo = :proNo", nativeQuery=true)
	void update(@Param("products") products products, @Param("proNo") Long proNo);
}
