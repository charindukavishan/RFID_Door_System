import React, {Component} from 'react';
import Grid from "./grid";
import socketIOClient from "socket.io-client";

export class WebSocketTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ws: null,
            message:null
        };
    }

    // single websocket instance for the own application and constantly trying to reconnect.

    componentDidMount() {
        this.connect();
    //     const socket = socketIOClient("http://127.0.0.1:3000");
    // socket.on("FromAPI", data => {
      
    // });
    }

    timeout = 250; // Initial timeout duration as a class variable

    /**
     * @function connect
     * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
     */
    connect = () => {
        // let ws = new WebSocket('wss://echo.websocket.org');
        const ws = socketIOClient("http://127.0.0.1:3000");
        let that = this; // cache the this
        let connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");

            this.setState({ ws: ws });

            that.timeout = 250; // reset timer to 250 on open of websocket connection
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };

        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };

        ws.onmessage = message =>{
            console.log(message)
            this.setState({message: message});
        }
    };

    /**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    check = () => {
        const { ws } = this.state;
        if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };

    render() {
        return (
            <div>
                {this.state.message?<p>{this.state.message.data}</p>:null}  
                {/* pass doors-data as props to grid  */}
                <Grid data={this.state.message}/>
                <WebSocketSend websocket={this.state.ws} />
            </div>
        );


    }
}


// just to test web socket 

class WebSocketSend extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.sendMessage(this.state.value)
        event.preventDefault();
    }

    sendMessage=(data)=>{
        const {websocket} = this.props // websocket instance passed as props to the child component.

        try {
            websocket.send(data) //send data to the server
        } catch (error) {
            console.log(error) // catch error
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
