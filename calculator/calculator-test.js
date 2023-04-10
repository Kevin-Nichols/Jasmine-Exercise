
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 12000, years: 4, rate: 5.5};

  expect(calculateMonthlyPayment(values)).toEqual("279.08");
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 12013, years: 6, rate: 2.3};

  expect(calculateMonthlyPayment(values)).toEqual("178.78");
});

it("should calculate negative principle if you needed that for some reason", function() {
  const values = {amount: -5000, years: 3, rate: 4};

  expect(calculateMonthlyPayment(values)).toEqual("-147.62");
});
