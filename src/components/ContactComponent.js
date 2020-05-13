import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      phoneNum: '',
      email: '',
      contactType: 'By Phone',
      feedback: '',
      touched: {
        fullName: false,
        phoneNum: false,
        email: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(fullName, phoneNum, email) {
    const errors = {
      fullName: '',
      phoneNum: '',
      email: '',
    };

    if (this.state.touched.fullName) {
      if (fullName.length < 2) {
        errors.name = 'Please enter valid name';
      }
    }

    const reg = /^\d+$/;
    if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
      errors.phoneNum = 'The phone number should contain only numbers.';
    }

    if (this.state.touched.email && !email.includes('@')) {
      errors.email = 'Email should contain a @';
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log('Current state is: ' + JSON.stringify(this.state));
    alert('Current state is: ' + JSON.stringify(this.state));
    event.preventDefault(); //Stops page reload
  }
  render() {
    const errors = this.validate(
      this.state.fullName,
      this.state.phoneNum,
      this.state.email
    );

    return (
      <>
        <div className="container">
          <div className="row row-content">
            <div className="col-12 text-center mt-3">
              <h1 className="my-3">Let's Talk!</h1>
              <h4 classname="mt-3">I will respond within two business days</h4>
              <hr />
            </div>
            <div className="col-md-10">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="fullName" md={2}>
                    Name
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Name"
                      value={this.state.fullName}
                      invalid={errors.fullName}
                      onBlur={this.handleBlur('fullName')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="phoneNum" md={2}>
                    Phone
                  </Label>
                  <Col md={10}>
                    <Input
                      type="tel"
                      id="phoneNum"
                      name="phoneNum"
                      placeholder="Phone number"
                      value={this.state.phoneNum}
                      invalid={errors.phoneNum}
                      onBlur={this.handleBlur('phoneNum')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.phoneNum}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      invalid={errors.email}
                      onBlur={this.handleBlur('email')}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="contactType" md={2}>
                    Best way to reach you?
                  </Label>
                  <Col md={4}>
                    <Input
                      type="select"
                      name="contactType"
                      value={this.state.contactType}
                      onChange={this.handleInputChange}
                    >
                      <option>By Phone</option>
                      <option>By Email</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="feedback" md={2}>
                    Message
                  </Label>
                  <Col md={10}>
                    <Input
                      type="textarea"
                      id="feedback"
                      name="feedback"
                      rows="12"
                      value={this.state.feedback}
                      onChange={this.handleInputChange}
                    ></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col
                    md={{ size: 10, offset: 2 }}
                    className="text-center mt-3 mb-5"
                  >
                    <Button type="submit" className="btn-site btn-site-primary">
                      Submit
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
