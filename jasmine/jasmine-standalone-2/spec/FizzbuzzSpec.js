describe("Fizzbuzz", function(){

  it("should return fizz if the input is a multiple of 3", function() {
  	expect(fizzbuzz(3)).toEqual("Fizz");
  	expect(fizzbuzz(981)).toEqual("Fizz");
  });

  it("should return buzz if the input is a multiple of 5", function() {
  	expect(fizzbuzz(5)).toEqual("Buzz");
  	expect(fizzbuzz(770)).toEqual("Buzz");
  });

  it("should return FizzBuzz if the input is a multiple of 15", function(){
  	expect(fizzbuzz(15)).toEqual("FizzBuzz");
  	expect(fizzbuzz(510)).toEqual("FizzBuzz");
  });
});