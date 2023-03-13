const test = require("./module/add");
const work = test.add("나는",2)
console.log(work); //*해당 코드는 관계가 형성됐다.(dependency, 의존) -> 복잡도가 많아진다, 높아진다. di: 의존성 관리, tdd(test develope driven)