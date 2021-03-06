$(function () {
    _thisPage.onload();

    $(".btn-add-money").on("click", function () {
        $(".btn-add-money").removeClass("active");
        $(this).addClass("active");
        var calcValue = calcMoney($("#calc01").val(), $(this).val());
        $("#calc01").val(calcValue);
    });

    $(".btn-reset-money").on("click", function () {
        $("#calc01").val("0원");
    });

    $("#calc01").on("keyup", function () {
        var org = $(this).val();
        var orgMoney = String(org.replace("원", "").replace(/[^0-9]/g, "").replace(/,/gi, "")).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        $(this).val(orgMoney + "원");
    });

    // 기간 입력
    $(".btn-add-month").on("click", function () {
        $(".btn-add-month").removeClass("active");
        $(this).addClass("active");
        var calcValue = calcMonth($("#calc02").val(), $(this).val());
        $("#calc02").val(calcValue);
    });

    $(".btn-reset-month").on("click", function () {
        $("#calc02").val("0개월");
    });

    $("#calc02").on("keyup", function () {
        var org = $(this).val();
        var orgMonth = String(org.replace("개월", "").replace(/[^0-9]/g, ""));
        $(this).val(orgMonth + "개월");
    });


    $("#calc03").on("keyup", function () {
        var org = $(this).val();
        var orgRate = String(org.replace("%", "").replace(/[^0-9.]/g, ""));
        $(this).val(orgRate + "%");
    });

    

});

var _thisPage = {
    /**
    페이지 onload 함수
     */
    onload: function () {
        //TODO onload시 수행할 로직 구현
    }
    /**
    * Example)
        예제 함수이며, 페이지 구현시 삭제 바랍니다.
     **/
    //        ,search: function() {
    //              //TODO btnSearch 버튼 클릭시 구현할 로직
    //              var jexAjax = jexjs.createAjaxUtil("WSVC ID");
    //             jexAjax.set("InputDomainKey", "id");
    //             jexAjax.execute( function( data ) {
    //                if ( jexjs.isJexError( data ) ) {
    //                   //TODO Error
    //                 var errCode = jexjs.getJexErrorCode( data );
    //                 var errMsg = jexjs.getJexErrorMessage( data );
    //                } else {
    //                   //TODO Success
    //                }
    //              });
    //         }
}

function calcMoney(org, add) {
    var orgMoney = org.replace("원", "").replace(/,/gi, "");
    orgMoney = Number(orgMoney) + Number(add);
    orgMoney = String(orgMoney).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    return orgMoney;
}

function calcMonth(org, add) {
    var orgMoney = org.replace("개월", "");
    orgMoney = Number(orgMoney) + Number(add);
    //   orgMoney = String(orgMoney).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    return String(orgMoney) + "개월";
}


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function cal() {
      var month = $("#calc02").val();
        var rates = $("#calc03").val();

          //대출 금액
          var t1 = $('#calc01').val();
          var money = t1.replace(/[^0-9]/g, '');   //숫자만 추출
          
          //대출기간
          var t2 = $('#calc02').val();
          var term = t2.replace(/[^0-9]/g, '');   //숫자만 추출
          
          //대출금리
          var t3 = $('#calc03').val();
          var rate = t3.replace(/[^0-9]/g, '');   //숫자만 추출    
         
          if (money == 0 || term == 0 || rate == "") {
              alert("입력하지 않은 값이 있습니다. 확인해주세요.");
          }else if (Number(String(month.replace("개월", ""))) > 60) {
               alert("대출 기간은 60개월 이하로 입력해주세요.");
               return false;
           }else if (parseFloat(String(rates.replace("%", ""))) > 20) {
               alert("이자율은 20% 이하로 입력해주세요.");
               return false;
           } 
          else {
              var cal = money * (1 + (rate / 100)) / term;    //달마나 낼 금액 계산
              // 소수점 2자리 이상일때 반올림
              cal = cal.toFixed(0);
              // 숫자 3자리마다 컴마 찍기
              var callate = cal.toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
              document.getElementById('tbl-wrap').innerHTML = '매달 상환 금액은 ' + "<font color=red>"+callate+"</font>" + '원 입니다.';
          }
    
}