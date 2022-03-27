class FizzBuzz {
    constructor (myNumber){
        this._myNumber = myNumber

        this.FIZZ = 'Fizz'
        this.BUZZ = 'Buzz'
        this.FIZZBUZZ = 'FizzBuzz'
        this.response = ''

        //console.log(`Desde constructor _myNumber: ${this._myNumber}`)

        this.result = this.main()
        return this.result
    }

    main = () => {
        //console.log(`Desde main myNumber: ${this._myNumber}`)
        /*if (this._myNumber == 3) return this.divisibleBy3(this._myNumber)
        if (this._myNumber == 5) return this.divisibleBy5(this._myNumber)
        if (this._myNumber == 6) return this.divisibleBy3(this._myNumber)
        if (this._myNumber == 15) return this.divisibleBy3And5(this._myNumber)*/
        //this.resultado = this.taskManager()
        this.response = this.divisibleBy3(this._myNumber)
        this.response = this.divisibleBy5(this._myNumber)
        this.response = this.divisibleBy3And5(this._myNumber)
        console.log(`Desde main response: ${this.response}`)
        return this.response
    }

    /*taskManager = () => {
        let response = ''
        response = this.divisibleBy3(this._myNumber)
        response = this.divisibleBy3(this._myNumber)
        response = this.divisibleBy3(this._myNumber)
        return response
    }*/

    divisibleBy3 = (number) => {
        console.log(`Desde divisibleBy3 number: ${number}`)
        if (number % 3 == 0) return this.FIZZ 
        return this.response
    }

    divisibleBy5 = (number) => {
        console.log(`Desde divisibleBy5 number: ${number}`)
        if (number % 5 == 0) return this.BUZZ
        return this.response
    }

    divisibleBy3And5 = (number) => {
        console.log(`Desde divisibleBy3And5 number: ${number}`)
        if (number % 3 == 0 && number % 5 == 0) return this.FIZZBUZZ
        return this.response
    }

}
module.exports = FizzBuzz
