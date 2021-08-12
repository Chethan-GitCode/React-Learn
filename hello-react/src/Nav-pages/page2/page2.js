import React, { Component } from 'react';
import { Form, Col, Row, Container, Button, InputGroup } from 'react-bootstrap';
import './page2.css';



const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
class page2 extends Component {

  constructor(props) {

    super(props);
    // const [validated, setValidated] = useState(false);
    this.state = {
      fullName: null,
      email: null,
      password: null,
      isLoggedIn: false,
      isToggled: false,
      errors: {
        fullName: '',
        email: '',
        password: '',
      }
    };
    this.toggle = this.toggle.bind(this);
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}



  handleChange = (event) => {


    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }

    //  this.setState({
    //    validated: true
    //  }

    //  )
    const { name, value } = event.target;

    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName =
          value.length < 5
            ? 'Full Name must be 5 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {

      console.log(errors)
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {

      console.info('Valid Form');
      alert("successfull");
    } else {
      console.error('Invalid Form');
    }
  }
  validating() {
    const { errors } = this.state;
    return errors.fullName.length <= 5 && errors.fullName === '';
  }
  toggle() {

    this.setState(state => ({
      isToggled: !state.isToggled
    }));
  }
  render() {
    const { errors } = this.state;
    const isEnabled = this.validating();

    return (

      <div >
{this.state.isToggled?
    <Form noValidate onSubmit={this.handleSubmit} className="p-3" >
    <Form.Row>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>First name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="First name"
          defaultValue="Mark"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Last name"
          defaultValue="Otto"
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Username</Form.Label>
        <InputGroup >
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            name="fullName"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
            onChange={this.handleChange}
          />

          <Form.Control.Feedback type="invalid"   >


          </Form.Control.Feedback>
        </InputGroup>
        {errors.fullName.length > 0 &&
          <span className='error'>{errors.fullName}</span>}
      </Form.Group>

    </Form.Row>
    <Form.Row>
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>City</Form.Label>
        <Form.Control type="email" placeholder="email" name="email" required onChange={this.handleChange} />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
    </Form.Control.Feedback>
        {errors.email.length > 0 &&
          <span className='error'>{errors.email}</span>}
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid state.
    </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label>Zip</Form.Label>
        <Form.Control type="text" placeholder="Zip" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid zip.
    </Form.Control.Feedback>
      </Form.Group>
    </Form.Row>
    <Form.Group>
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
      />
    </Form.Group>
    {
      isEnabled ? <Button type="submit" disabled={!isEnabled}>Submit form</Button> : ''
    }


  </Form>:''}
    
        <Row noGutters>
          <Col xs={12}>
            <Button type="button" onClick={this.toggle}>{this.state.isToggled ? 'Showed' : 'Hidded'}</Button>
          </Col>
          {
            this.state.isToggled ? <Col className="bg-secondary">
              Shown
       </Col>
              :
              <Col>
                Hiden</Col>
          }

        </Row>

      </div>
    );
  }

}

export default page2;