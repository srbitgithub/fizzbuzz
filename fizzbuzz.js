function FizzBuzz() {

    const fizz = 'Fizz'
    const buzz = 'Buzz'
    const fizzbuzz = 'FizzBuzz'

    this.Main = function (number){
        if (number == 3) return this.divisibleBy3(number)
        if (number == 5) return this.divisibleBy5(number)
        if (number == 6) return this.divisibleBy3(number)
        if (number == 15) return this.divisibleBy3And5(number)
    }

    this.divisibleBy3 = function(number){
        if (number % 3 == 0) return fizz
    }

    this.divisibleBy5 = function(number){
        if (number % 5 == 0) return buzz
    }

    this.divisibleBy3And5 = function(number){
        if (number % 3 == 0 && number % 5 == 0) return fizzbuzz
    }

}
module.exports = FizzBuzz
