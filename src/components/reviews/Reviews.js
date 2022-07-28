import React, {useState} from 'react';
import "./Reviews.css"
import { Form, Input, TextArea, Button, Select, Table } from 'semantic-ui-react'
import axios from 'axios';

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
                        error={{
                            content: 'Please enter a valid email address',
                            pointing: 'below',
                        } }
                        name='email'
                        onChange = {(e)=> setEmail(e.target.value)}
                        />
                        <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Confirm'
                        label='Label with htmlFor'
                        type='submit'
                        onClick = {sendDataToApi}
                        />
                </Form>
              
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First name</Table.HeaderCell>
                        <Table.HeaderCell>Last name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Comments</Table.HeaderCell>
                        <Table.HeaderCell >Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Earnest</Table.Cell>
                        <Table.Cell>Achayo</Table.Cell>
                        <Table.Cell>arnytech@live</Table.Cell>
                        <Table.Cell>*******</Table.Cell>
                        <Table.Cell className='btn-delete-cell'><Button  color='blue'>Update</Button></Table.Cell>
                        <Table.Cell><Button color='red'>Delete</Button></Table.Cell>                    
                    </Table.Row>                
                </Table.Body>
            </Table>
        </div>
    </div>
    
  )
}

export default Reviews;