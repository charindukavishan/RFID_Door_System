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
import ReactDatetime from "react-datetime";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Label
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

class Profile extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Create Session</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        Create
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Session information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Session Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Lecture Name"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-date"
                              >
                                Date
                              </label>
                              <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="ni ni-calendar-grid-58" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <ReactDatetime
                                  inputProps={{
                                    placeholder: "Date Picker Here"
                                  }}
                                  timeFormat={false}
                                />
                              </InputGroup>
                           </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Venue
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Lecture Hall"
                              id="input-venue"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Lecturer
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Lecturer Name"
                              id="input-lecturer"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              No of Students 
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="10"
                              id="input-student-no"
                              placeholder="xx"
                              type="number"
                            />
                          </FormGroup>
                          </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                        <FormGroup>
                          <Label for="exampleSelect">Allowed Student Group</Label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>Batch 19</option>
                            <option>Batch 18</option>
                            <option>Batch 17</option>
                            <option>Batch 16</option>
                            <option>Batch 15</option>
                          </Input>
                        </FormGroup>
                          </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
