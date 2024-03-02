class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.Hambuger;
        aReturn.push("Welcome to Best restaurant in Brantford.");
        aReturn.push("Would you like to reserve a hambuger?");
        return aReturn;
      },
      Hambuger: (sInput) => {
        let aReturn = [];
        if (sInput.toLowerCase().startsWith('yes')) {
        this.stateCur = this.OrderState.HambugerSize;
          aReturn.push("Large or small?");
        }else if(sInput.toLowerCase().startsWith('no')){
        this.stateCur = this.OrderState.Pizza;
          aReturn.push("Would you like to reserve a Pizza?");
        }
        return aReturn;
      },
      Pizza:(sInput)=>{
        let aReturn = [];
        if (sInput.toLowerCase().startsWith('yes')) {
        this.stateCur = this.OrderState.HambugerSize;
          aReturn.push("Large or small?");
        }else if(sInput.toLowerCase().startsWith('no')){
          this.stateCur = this.OrderState.Pizza;
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },
      HambugerSize: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.Ketchup;
        if (sInput.toLowerCase().startsWith('large')||sInput.toLowerCase().startsWith('small')) {
          aReturn.push("Do you need Ketchup?");
        }
        return aReturn;
      },
      Ketchup:(sInput)=>{
        let aReturn = [];
        this.stateCur = this.OrderState.COKE;
        if (sInput.toLowerCase().startsWith('yes')||sInput.toLowerCase().startsWith('no')) {
          aReturn.push("Do you also want to add a coke?");
        }
        return aReturn;
      },
      COKE:(sInput)=>{
        let aReturn = [];
        this.stateCur = this.OrderState.RESERVING;
        if (sInput.toLowerCase().startsWith('yes')||sInput.toLowerCase().startsWith('no')) {
          aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
        }
        return aReturn;
      },

      RESERVING: (sInput) => {
        let aReturn = [];
        if (sInput.toLowerCase().startsWith('yes')||sInput.toLowerCase().startsWith('no')) {
          aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
          this.isDone = true;
        }
        return aReturn;
      }
    };
    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }