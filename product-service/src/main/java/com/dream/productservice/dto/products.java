package com.dream.productservice.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED) 
@Getter
@Entity
public class products {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Auto Incld Generator
	private Long proNo;
	
	@Column(length = 255, nullable = false)
	private String proName;

	@Column(length = 1000, nullable = false)
	private String detail;
	
	@Column(length = 1000, nullable = false)
	private String need;
	
	@Column(nullable=false)
    private Integer term;
	
	@Column(nullable=false)
    private double proLimit;

	@Column(nullable=false)
    private double rate;

    @Builder
    public products(String proName, String detail, String need, Integer term, double proLimit, double rate) {
        this.proName = proName;
        this.detail = detail;
        this.need = need;
        this.term = term;
        this.proLimit = proLimit;
        this.rate = rate;
    }
}
