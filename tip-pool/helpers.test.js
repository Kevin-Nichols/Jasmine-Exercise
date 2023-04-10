describe("Helpers test with setup and teardown", function(){
    beforeEach(function(){
        billAmtInput.value = 85;
        tipAmtInput.value = 15;
        submitPaymentInfo();
    });

    it("should sum the total bill amount", function(){
        expect(sumPaymentTotal('billAmt')).toEqual(85);
        billAmtInput.value = 20;
        tipAmtInput.value = 0;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(105);
    });

    it("should sum the total tip amount", function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(15);
        billAmtInput.value = 1;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(35);
    });

    it("should sum the total tip percentage", function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(18);
        billAmtInput.value = 20;
        tipAmtInput.value = 5;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(43);
    });

    it("should output the tip percentage of one payment when calculateTipPercent is run", function(){
        expect(calculateTipPercent(100, 50)).toEqual(50);
        expect(calculateTipPercent(85, 15)).toEqual(18);
    });

    it("should create a td and append it to a tr when appendTd is run", function(){
        let tr = document.createElement('tr');
        appendTd(tr, "newTr");
        expect(tr.firstChild.innerHTML).toEqual("newTr");
    });

    it("should create a delete td within tr when appendDelBtn is run", function(){
        let tr = document.createElement('tr');
        appendDelBtn(tr);
        expect(tr.firstChild.innerHTML).toEqual("X");
    });


    afterEach(function() {
        allPayments = {};
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        serverTbody.innerHTML = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
      });
})