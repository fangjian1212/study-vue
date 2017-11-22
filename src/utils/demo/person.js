class Person {

  constructor (name, age) {
    this.name = name
    this.age = age
  }

  toString () {
    return '(' + this.name + ',' + this.age + ')'
  }

}

Object.assign(Person.prototype, {
  say (str) {
    console.info(this.name + str)
  },
  toValue () {
    console.info(this.age)
  }
})

export { Person }
