import {RapidTestOrder} from '../RapidTestOrder.js'
//这个describe不知道是啥东西 没有申明的地方 不知道触发原理但是能推测出用法
describe("order test", function(){
    it("tests for welcome", function(){
        const oOrder = new RapidTestOrder("519-123-4567");
        const aResult = oOrder.handleInput("hello","first");//首次进入 type设置为first
        expect(true).toEqual(aResult[0].toLowerCase().includes("welcome"));//输出欢迎语并询问是否需要汉堡包
    });
    it("tests results of yes", function(){//输入yes
        const oOrder = new RapidTestOrder("519-123-4567");
        oOrder.handleInput("hello");
        const aResult = oOrder.handleInput("yes");
        expect(true).toEqual(aResult[0].toLowerCase().includes("large"));//输出需要大还是小?
        expect(true).toEqual(aResult[0].toLowerCase().includes("cola"));//输出是否需要可乐?
        aResult[0].toLowerCase().includes("cola")?oOrder.handleInput("hello","cola"):null;//当进行到询问是否需要可乐时  type设置为可乐

    });
    it("tests results of no", function(){//输入no
        const oOrder = new RapidTestOrder("519-123-4567");
        oOrder.handleInput("hello");
        const aResult = oOrder.handleInput("no");
        expect(true).toEqual(aResult[1].toLowerCase().includes("maybe next time"));//啥都不吃  直接拜拜
        expect(true).toEqual(aResult[0].toLowerCase().includes("cola"));//不要番茄酱的时候询问是否需要可乐
        expect(true).toEqual(aResult[0].toLowerCase().includes("pisa"));//不吃汉堡包的时候询问是否需要披萨
        aResult[0].toLowerCase().includes("pisa")?oOrder.handleInput("hello","second"):null;//不吃汉堡  type设置为second
    });
    it("tests results of large", function(){//输入large
        const oOrder = new RapidTestOrder("519-123-4567");
        oOrder.handleInput("hello");
        const aResult = oOrder.handleInput("large","large");//type设置为large
        expect(true).toEqual(aResult[1].toLowerCase().includes("tomato"));//输出是否需要番茄酱
    });
    it("tests results of small", function(){//输入small
        const oOrder = new RapidTestOrder("519-123-4567");
        oOrder.handleInput("hello");
        const aResult = oOrder.handleInput("small","small");//type设置为small
        expect(true).toEqual(aResult[1].toLowerCase().includes("tomato"));//输出是否需要番茄酱
    });
})