class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.RESERVING;//首次进入后覆盖stateCur  再次进入时就不会触发欢迎语
        aReturn.push("Welcome to Yutong's Restaurant.");
        aReturn.push("Would you like to reserve a pizza?");//第一次询问是否需要汉堡包
        return aReturn;
      },
      RESERVING: (sInput) => {
        let aReturn = [];
        if (sInput.toLowerCase().startsWith('yes')) {
          if(this.type=="large"||this.type=="small"){
            aReturn.push("Do you need coke?");//需要番茄酱后询问是否需要可乐
          }else if(this.type=="coke"){//需要可乐  输出消息并设置isdone为结束
          aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
          this.isDone = true;
          }else if(this.type=="first"||this.type=="second"){
            aReturn.push("Large or small?");//确定需要汉堡或者披萨后询问大小
          }
        } else if (sInput.toLowerCase().startsWith('large')) {
          aReturn.push("Do you need ketchup?");//确定需要大后询问是否需要番茄酱
        }else if (sInput.toLowerCase().startsWith('small')) {
          aReturn.push("Do you need ketchup?");//确定需要小后询问是否需要番茄酱
        }
        else if (sInput.toLowerCase().startsWith('no')) {
          if(this.type=="large"||this.type=="small"){//不要番茄酱后询问是否需要可乐
            aReturn.push("Do you need coke?");
          }else if(this.type=="cola"){//不需要可乐  输出订单消息并设置isdone为结束
            aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
            let d = new Date();
            d.setMinutes(d.getMinutes() + 120);
            aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
            this.isDone = true;
            }else if(this.type=="first"){
              aReturn.push("Would you like to reserve a hamburger?");//拒绝汉堡后询问是否需要披萨
            }else{
              aReturn.push("Thanks for trying our restaurant");
              aReturn.push("Maybe next time")//什么都不吃  撒由那拉
              this.isDone = true;
            }
        }
        return aReturn;
      }
    };
    //初始化给stateCur赋值欢迎功能
    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput,type) {
    type?this.type=type:null
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }