/*for a particular task (problem), there will be multiple solutions(algorithms/strategy classes) and from
 the solutions, the user has to choose only one solution at runtime.The Strategy pattern suggests that you
 take a class that does something specific in a lot of different ways and extract all of these algorithms
 into separate classes called strategies. The original class, called context, must have a field for storing
a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on
its own.*/

interface IPaymentStrategy{
    pay(amount:number):void;
}

class CreditCardStrategy implements IPaymentStrategy{
    pay(amount: number): void {
       console.log(`Paid ksh. ${amount} using credit card.`)
    }
}

class DebitCardStrategy implements IPaymentStrategy{
    pay(amount: number): void {
       console.log(`Paid ksh. ${amount} using debit card.`)
    }
}

class CashStrategy implements IPaymentStrategy{
    pay(amount: number): void {
       console.log(`Paid ksh. ${amount} using cash.`)
    }
}

// 'Context' class maintains a reference to one of the concrete strategies. Set by user at runtime
class PaymentContext{
    private _strategy:IPaymentStrategy;

    setPaymentStrategy(strategy:IPaymentStrategy):void{
        this._strategy = strategy;
    }

    pay(amount:number){
        this._strategy.pay(amount);
    }
}

//client
//wants to use cash
const context = new PaymentContext();
const strategy = new CashStrategy();
context.setPaymentStrategy(strategy);

context.pay(4000);
