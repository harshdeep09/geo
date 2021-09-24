import React, { Component } from 'react';


class Stocks extends Component {
    constructor(props) {
        super(props);
          this.state = {
                initialBought : 0,
                dayBought : 0,
                maxprofit: 0,
                totalprofit: 0,
                array :  [100, 180, 260, 310, 40, 535, 695]
          }
       this.printInputValue = this.printInputValue.bind(this);
      }
      

    printInputValue(){
        const numberOfDays = this.state.array.length
        var maxprofit = 0
        var totalprofit = 0
        for(var i = 1; i <= numberOfDays ; i++){
            const initialBought = this.state.array[i-1]
            

            if(this.state.array[i] - initialBought > maxprofit){
                maxprofit = this.state.array[i]-this.state.array[i-1]

                this.setState({
                    dayBought : i-1,
                    maxprofit: maxprofit,
                })
            }   

            if (this.state.array.at(-1) === this.state.array[i-1]){
                totalprofit = totalprofit
            } else{
                totalprofit = totalprofit + this.state.array[i] - initialBought
            }
            
        }

        this.setState({
            totalprofit: totalprofit
        })
    }

    render() {
        return (
          
                    <div className="container-view">
                        {this.state.array.map((data)=>(
                            <p>{data}</p>
                        ))}
                        <button onClick={this.printInputValue}>Find Max Profit</button>
                        
                        <p>Max Profit is : {this.state.maxprofit} - Bought on the day of DAY - {this.state.dayBought}, sold on DAY - {this.state.dayBought+1} </p>
                        <p></p>
                        <p>Total Profit for the week if we buy on first day and sell on second day : {this.state.totalprofit}</p>
                    </div>
                    
  );
}

}
export default Stocks;

