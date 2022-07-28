import React, {useState} from 'react';
import "./Reviews.css"
import { Form, Input, TextArea, Button,} from 'semantic-ui-react'
import axios from 'axios';
import Read from '../read/Read';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

function Reviews() {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(comment);

    //connecting with mockAPI and sending user's data
    const sendDataToApi = () => {
        axios.post(`https://62e2a5913891dd9ba8ed3db7.mockapi.io/tembea`, {
            firstName,
            lastName,
            email,
            comment
        })

    }

  return (

    <div>
      <h1 className = "title_text" >Reviews</h1>
        <div className='reviews_container'>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='First name'
                          placeholder='First name'
                          name='fname'
                          onChange = {(e)=> setFirstname(e.target.value)}
                    />
                    <Form.Field
                        id='form-input-control-last-name'
                        control={Input}
                        label='Last name'
                          placeholder='Last name'
                          name='lname'
                          onChange = {(e)=> setLastname(e.target.value)}
                    />
                    </Form.Group>
                        <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Opinion'
                        placeholder='Opinion'
                        name='lname'
                        onChange = {(e)=> setComment(e.target.value)}
                        />
                        <Form.Field
                        id='form-input-control-error-email'
                        control={Input}
                        label='Email'
                        placeholder='earnytech@live.com'
                        name='email'
                        onChange = {(e)=> setEmail(e.target.value)}
                        />
                        <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Submit'
                        label='Label with htmlFor'
                        type='submit'
                        onClick = {sendDataToApi}
                        />
                </Form>
          </div>
          <Read />
      </div>
      
    
  )
}

export default Reviews;