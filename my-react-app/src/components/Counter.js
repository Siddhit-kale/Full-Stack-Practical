import React,{ Component } from "react"

export class Counter extends Component {

constructor() {
    super()
    this.state= {
        count: 0
    }
}

    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => console.log("Callback is:" + this.state.count))
    //     console.log(this.state.count)
    // }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        }, () => console.log("Callback is:" + this.state.count))
        console.log(this.state.count)
    }

    reset() {
        this.setState({
            count: 0
        }, () => console.log("Callback is:" + this.state.count))
        console.log(this.state.count)
    }

    render() {
        return(
           <div>
            <h1> Count : {this.state.count}</h1>
            <button onClick={() => this.increment()} > Increment</button><hr></hr>
            <button onClick={() => this.decrement()} > Decrement</button><hr></hr>
            <button onClick={() => this.incrementFive()} > IncrementFive</button><hr></hr>
            <button onClick={() => this.reset()} > Reset </button><hr></hr>
           </div> 
        )
    }
}

export default Counter