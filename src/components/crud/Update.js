import React, {useEffect, useState} from 'react';
import { Form, Input, TextArea, Button,} from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function Update() {
    let navigate = useNavigate;
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('');
    const [ID, setID] = useState(null)

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(comment);

    //connecting with mockAPI and sending user's data
    const sendDataToApi = () => {
        axios.put(`https://62e2a5913891dd9ba8ed3db7.mockapi.io/tembea/${ID}`, {
            firstName,
            lastName,
            comment,
            email            
        }).then(() => navigate.push('./read'))
    }
  useEffect(() => {
    setFirstname(localStorage.getItem('firstName'));
    setLastname(localStorage.getItem('lastName'));
    setComment(localStorage.getItem('comment'));
    setEmail(localStorage.getItem('email'));
    setID(localStorage.getItem('ID'))
  }, []);


  return (
    <div>
      <h1 className = "title_text" >Reviews</h1>
        <div className='reviews_container'>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                          id='form-input-control-first-name'
                          control={ Input }
                          value = {firstName}
                          label='First name'
                          placeholder='First name'
                          name='fname'
                          onChange = {(e)=> setFirstname(e.target.value)}
                    />
                    <Form.Field
                          id='form-input-control-last-name'
                          control={ Input }
                          value = {lastName}
                          label='Last name'
                          placeholder='Last name'
                          name='lname'
                          onChange = {(e)=> setLastname(e.target.value)}
                    />
                    </Form.Group>
                        <Form.Field
                          id='form-textarea-control-opinion'
                          control={ TextArea }
                          value = {comment}
                          label='Opinion'
                          placeholder='Opinion'
                          name='lname'
                          onChange = {(e)=> setComment(e.target.value)}
                        />
                        <Form.Field
                          id='form-input-control-error-email'
                          control={ Input }
                          value = {email}
                          label='Email'
                          placeholder='earnytech@live.com'
                          name='email'
                          onChange = {(e)=> setEmail(e.target.value)}
                        />
                        <Form.Field
                          id='form-button-control-public'
                          control={Button}
                          content='Update'
                          type='submit'
                          onClick = {sendDataToApi}
                        />
                </Form>
          </div>
      </div>     
    
  )
}

export default Update;