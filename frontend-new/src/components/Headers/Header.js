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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    //hv to get data from props-
    this.state = {
        sessions:[{id:"1",temp:"30C", status:false},
               {id:"2",temp:"40C", status:true},
               {id:"3",temp:"50C", status:false},
               {id:"4",temp:"50C", status:false},
               {id:"5",temp:"50C", status:true},
            ]   
    };
}

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
              Session {session.id}
            </CardTitle>
            <span className="h2 font-weight-bold mb-0">
              {session.status}
            </span>
          </div>
          <Col className="col-auto">
            <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
              <i className="ni ni-album-2" />
            </div>
          </Col>
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          <span className="text-success mr-2">
            <i className="fa fa-arrow-up" /> 3.48%
          </span>{" "}
          <span className="text-nowrap">Since last month</span>
        </p>
      </CardBody>
    </Card>
  </Col>

    );
    return (
      <>
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
      </>
    );
  }
}

export default Header;
