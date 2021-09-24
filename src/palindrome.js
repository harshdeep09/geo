import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);
          this.state = {
            inputfeild :"",
            test: false
          }
          this.printInputValue = this.printInputValue.bind(this);
      }
   
    

    componentDidMount() {
      
    }

    printInputValue(){
        const array = this.state.inputfeild.split('')
        const flipArray = array.reverse()
        
        if(this.state.inputfeild ===  flipArray.join('')){
            this.setState({
                test: true
            })
        }else{
            this.setState({
                test: false
            })
        }
    }

    render() {
        return (
          
                    <div className="container-view">
                     
                        <div className="search-con">
                            <input
                                    type="search"
                                    placeholder="Search Robots"
                                    onChange={(e) => this.setState({ inputfeild: e.target.value })}
                                />
                        </div>
                        {
                            this.state.test ?
                            <p>Is a  Palindrome</p>
                            : <p>Not a Palindrome</p>
                        }
                        <button onClick={this.printInputValue}>print Value</button>
                      
                    </div>
                    
  );
}

}
export default Home;

