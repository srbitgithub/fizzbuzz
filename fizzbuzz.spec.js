const {it, expect} = require('@jest/globals')
const FizzBuzz = require('./fizzbuzz')  

const fizzBuzz = new FizzBuzz()

describe ('Return fizz, buzz or fizzbuz if the number is divisible by 3,5 or both', () => {

    it ('Si el número es 3 devuelve Fizz', () => {
        const result = fizzBuzz.Main(3)
        expect (result).toBe('Fizz')
    })

    it ('Si el número es 5 devuelve Buzz', () => {
        const result = fizzBuzz.Main(5)
        expect (result).toBe('Buzz')
    })

    it ('Si el número es 6 devuelve Fizz', () => {
        const result = fizzBuzz.Main(6)
        expect (result).toBe('Fizz')
    })
    it ('Si el número es 15 devuelve FizzBuzz', () => {
        const result = fizzBuzz.Main(15)
        expect (result).toBe('FizzBuzz')
    })
})