import { name, age1 as age, sayFun1 } from './demo1'
import { name as name1, age as age1, say } from './demo2'
import { Person } from './person'

export default {
  demo (str) {
    /*    console.info(name + ' ' + age)
        sayFun1('sayFun1')*/
    //
    /*    console.info(name1 + ' ' + age1)
        say('demo2')*/
    //
    let fj = new Person('fangjian', 19)
    fj.toValue()
    fj.say('xj')
    console.info(fj.toString())
    console.info(typeof Person)
    console.info(Person === Person.prototype.constructor)
    console.info(fj.constructor === Person.prototype.constructor)
    console.info(Object.getOwnPropertyNames(Person.prototype))
    console.info(Object.keys(Person.prototype))
    return str
  }
}
