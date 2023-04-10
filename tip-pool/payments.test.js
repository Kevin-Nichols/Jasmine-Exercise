describe("Payments test setup and teardown", function(){
    beforeEach(function(){
        billAmtInput.value = 85;
        tipAmtInput.value = 15;
    });

    it("should add a new payment once submitted", function(){
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('85');
        expect(allPayments['payment1'].tipAmt).toEqual('15');
        expect(allPayments['payment1'].tipPercent).toEqual(18);
    });

    it("should create a new payment when createCurPayment is run", function(){
        let expected = {billAmt: "85", tipAmt: "15", tipPercent: 18};
        expect(createCurPayment()).toEqual(expected);
    })

    it("should update #paymentTable when appendPaymentTable is run", function(){
        let payment = createCurPayment();
        allPayments["payment1"] = payment;
        appendPaymentTable(payment);
        let idList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(idList.length).toEqual(4);
        expect(idList[0].innerText).toEqual('$85');
        expect(idList[1].innerText).toEqual('$15');
        expect(idList[2].innerText).toEqual('18%');
    });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        // erverTbody.innerHTML = '';
    });
});