import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           date: new Date()
        }
    }
    componentDidMount (){
        this.setTimerId = setInterval(() => this._tick() ,1000)
    }
    componentWillMount(){
        console.log(`****`);
        clearInterval(this.setTimerId);
    }
    _tick(){
        this.setState({
            date: new Date()
        })
    }
    render() {
        const { date } = this.state;
        return(
            <div>
                <strong>{date.toTimeString()}</strong>
            </div>
        )
    }
}