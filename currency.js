
class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency=firstCurrency;
        this.secondCurrency=secondCurrency;

        this.url="https://api.exchangerate.host/latest?base=";

        this.amount=null;
    }
    exchange(){

        return new Promise((resolve,reject)=>{
            fetch(this.url+this.firstCurrency)
            .then(response=>response.json())
            .then(data=>{
                const amount2= Number(this.amount);
                const parity = data.rates[this.secondCurrency];
    
                const total = amount2*parity;
                resolve(total);
    
            })
            .catch(err=>reject(err));
        })

    }
    changeAmount(amount){
        this.amount=amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency=newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency=newSecondCurrency;
    }
}