/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  Modal
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

//import Header from "components/Headers/Header.js";

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      sessions:[{name:"Java lab session",venue:"ERP lab",date:"2020-10-19"},
      {name:"ANN lecture",venue:"Lecture hall-2",date:"2020-10-12"},
      {name:"Embedded lab session",venue:"Hardware lab", date:"2020-10-15"},
      {name:"SAIT lecture",venue:"New building auditorium",date:"2020-10-18"},
      {name:"MPI lecture",venue:"Parawiya hall", date:"2020-10-22"},
      ],
      viewSessionName : "",
      viewSessionVenue : "",
      viewSessionDate : "",
      exampleModal: false 
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };

  toggleModal = (state,sessionName,sessionVenue,sessionDate) => {
    this.setState({
      [state]: !this.state[state],
      viewSessionName:sessionName,
      viewSessionVenue:sessionVenue,
      viewSessionDate:sessionDate,
    });
  };

  render() {
    const sessionList = this.state.sessions.map((session) =>
    <Col lg="6" xl="3">
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            <CardTitle
              tag="h5"
              className="text-uppercase text-muted mb-0"
            >
             <Button className="my-4" color="primary" type="button" onClick={() => this.toggleModal("exampleModal",session.name,session.venue,session.date)}>
                {session.name} </Button> 
            </CardTitle>
          </div>
          <Col className="col-auto">
            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
              <i className="ni ni-album-2" />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-success mr-2">
            <i className="fa fa-arrow-up" /> {session.venue}
          </span>{" "}
          <span className="text-nowrap">{session.date}</span>
        </p>
      </CardBody>
    </Card>
    <br/>
  </Col>

    );


    return (
      <>
        {/* Card List */}
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>

                {sessionList}

              </Row>
            </div>
          </Container>
        </div>
        
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.exampleModal}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h2 className="modal-title" id="exampleModalLabel">
              {this.state.viewSessionName}
            </h2>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
          <h4> Date - {this.state.viewSessionDate}  </h4><br/>
          <h4> Venue - {this.state.viewSessionVenue} </h4> <br/>
          <h4> Allowed people - </h4>
          </div>
          <div className="modal-footer">
            <Button
              color="danger"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default Index;
