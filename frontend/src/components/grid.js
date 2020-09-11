import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBJumbotron, MDBIcon  } from "mdbreact";
import './grid.css'; //Import here your file style


class Grid extends Component {
    constructor(props) {
        super(props);

        //hv to get data from props-
        this.state = {
            data:[{id:"1",temp:"30C", status:false},
                   {id:"2",temp:"40C", status:true},
                   {id:"3",temp:"50C", status:false},
                   {id:"4",temp:"50C", status:false},
                   {id:"5",temp:"50C", status:true},
                ]   
        };
    } 

    render() {

    const doorList = this.state.data.map((door) =>
        <MDBCol lg="4" className="d-flex justify-content-center">
            <MDBCard style={{ width: "15rem"}}>
                <MDBCardBody>
                    <MDBCardTitle class = "card-title">Door ID: {door.id}</MDBCardTitle>
                    <MDBCardText> 
                        {door.status
                            ? <MDBIcon size="5x" className="indigo-text pr-3" icon="door-open" />
                            : <MDBIcon size="5x" className="indigo-text pr-3" icon="door-closed" />
                        }
                        <br/>
                        Temperature : {door.temp} <br/>
                        Status :  <b>{door.status ? 'Opened' : 'Closed'} </b> 
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
      
    return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }}>
                        <MDBCol className="text-white text-center py-1 px-1 my-1" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                        <MDBCol className="py-1">
                            <MDBCardTitle className="h1-responsive pt-1 m-1 font-bold"><h1>Door Lock Status and Temperature Monitoring System</h1></MDBCardTitle>
                        </MDBCol>
                        </MDBCol>
                    </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                   {doorList}
                </MDBRow>
            </MDBContainer>
    );
  }
}

export default Grid;