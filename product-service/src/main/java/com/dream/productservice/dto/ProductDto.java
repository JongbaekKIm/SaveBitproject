package com.dream.productservice.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/*@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
	private int proNo;	//��ǰ ��ȣ
	private String proName;	//��ǰ �̸�
	private String detail;
	private String need;
	private int term;	//���� �Ⱓ
	private double proLimit;	// ���� �ѵ�
	private double rate;	// ���� �ѵ�
	
}*/

@NoArgsConstructor(access = AccessLevel.PROTECTED) 
@Getter
@Entity
public class ProductDto{
	
	@Id
	@GeneratedValue // Auto Incld Generator
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
    public ProductDto(String proName, String detail, String need, Integer term, double proLimit, double rate) {
        this.proName = proName;
        this.detail = detail;
        this.need = need;
        this.term = term;
        this.proLimit = proLimit;
        this.rate = rate;
    }
}
