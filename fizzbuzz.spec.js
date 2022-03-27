const {it, expect} = require('@jest/globals')
const FizzBuzz = require('./fizzbuzzClass')  

//const fizzBuzz = new FizzBuzz()

describe ('Return fizz, buzz or fizzbuz if the number is divisible by 3,5 or both', () => {

    it ('Si el número es 3 devuelve Fizz', () => {
        const fizzBuzz = new FizzBuzz(3)
        expect (fizzBuzz.result).toBe('Fizz')
    })

    it ('Si el número es 5 devuelve Buzz', () => {
        const fizzBuzz = new FizzBuzz(5)
        expect (fizzBuzz.result).toBe('Buzz')
    })

    it ('Si el número es 6 devuelve Fizz', () => {
        const fizzBuzz = new FizzBuzz(6)
        expect (fizzBuzz.result).toBe('Fizz')
    })

    it ('Si el número es 9 devuelve Fizz', () => {
        const fizzBuzz = new FizzBuzz(9)
        expect (fizzBuzz.result).toBe('Fizz')
    })

    it ('Si el número es 10 devuelve Buzz', () => {
        const fizzBuzz = new FizzBuzz(10)
        expect (fizzBuzz.result).toBe('Buzz')
    })

    it ('Si el número es 15 devuelve FizzBuzz', () => {
        const fizzBuzz = new FizzBuzz(15)
        expect (fizzBuzz.result).toBe('FizzBuzz')
    })

    it ("Si el número es 19 devuelve ''", () => {
        const fizzBuzz = new FizzBuzz(19)
        expect (fizzBuzz.result).toBe('')
    })

    it ('Si el número es 24 devuelve Fizz', () => {
        const fizzBuzz = new FizzBuzz(24)
        expect (fizzBuzz.result).toBe('Fizz')
    })

    it ('Si el número es 30 devuelve FizzBuzz', () => {
        const fizzBuzz = new FizzBuzz(30)
        expect (fizzBuzz.result).toBe('FizzBuzz')
    })
})