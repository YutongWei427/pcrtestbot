import {RapidTestOrder} from '../RapidTestOrder.js'

describe("order test", function(){
    it("tests for welcome", function(){
        const oOrder = new RapidTestOrder("519-123-4567");
        const aResult = oOrder.handleInput("hello");
        expect(true).toEqual(aResult[0].toLowerCase().includes("welcome"));
    });
    it("tests results of yes", function(){
        const oOrder = new RapidTestOrder("519-123-4567");
        oOrder.handleInput("hello");
        const aResult = oOrder.handleInput("yes");
        expect(true).toEqual(aResult[0].toLowerCase().includes("reserved"));
    });
    it("tests results of no", function(){
        const oOrder = new RapidTestOrder("519-123-4567");
        oOrder.handleInput("hello");
        const aResult = oOrder.handleInput("no");
        expect(true).toEqual(aResult[1].toLowerCase().includes("maybe next time"));
    });
})