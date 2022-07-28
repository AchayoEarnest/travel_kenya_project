import React from 'react';
import "./Reviews.css"
import { Form, Input, TextArea, Button, Select, Table } from 'semantic-ui-react'

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

function Reviews() {
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
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Last name'
                    placeholder='Last name'
                />
                <Form.Field
                    control={Select}
                    options={genderOptions}
                    label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                    placeholder='Gender'
                    search
                    searchInput={{ id: 'form-select-control-gender' }}
                />
                </Form.Group>
                <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Opinion'
                placeholder='Opinion'
                />
                <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='earnytech@live.com'
                error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                }}
                />
                <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Label with htmlFor'
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