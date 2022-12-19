

import React, { useState,useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function formReducerFn(lastState, dispatchedData) {
    if (dispatchedData.msg === 'nameHandler') {
        return {
            name: dispatchedData.value,
            isNameValid: dispatchedData.value.length>0.
        }
    }
}

function FormExample() {
    const [validated, setValidated] = useState(false);
    const [formData,setFormData] = useReducer(formReducerFn,{name:'',isNameValid:false})

    const updateHandler = (e) => {
        console.log(e.currentTarget.value);

        // dont trim the value if prev state value length>1
        if (formData.name.length > 1) {
            setFormData({ value: e.currentTarget.value, msg: 'nameHandler' })
        }   // else trim the value to remove space
        else { 
            setFormData({ value: e.currentTarget.value.trim(), msg:'nameHandler'})
        }
        
        // also before submiting the form remove space charecters if any
        
    }
    
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    //   event.stopPropagation();
    } 

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
                required
                type="text"
                placeholder="First name"
                
                name='fName'
                onChange={updateHandler}
                value={formData.name}
                isValid={formData.isNameValid}

          />
          <Form.Control.Feedback >Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
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
          </Row>
        <Form.Switch> 
            <Form.Group className="mb-3">
                <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      
                />
            </Form.Group>
        </Form.Switch>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;