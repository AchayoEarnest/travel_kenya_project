import React, {useEffect, useState} from 'react';
import "./Read.css"
import {Button, Table } from 'semantic-ui-react'
import axios from 'axios';

function Read() { 
    const [dataFromApi, setDataFromApi] = useState([]);
    
    useEffect(() => {
        axios.get('https://62e2a5913891dd9ba8ed3db7.mockapi.io/tembea')
        .then((loadData) => setDataFromApi(loadData.data))
    }, [])
    
    return (
    <div>
        <div className='read_container'>              
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First name</Table.HeaderCell>
                        <Table.HeaderCell>Last name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Comments</Table.HeaderCell>
                        <Table.HeaderCell >Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                    <Table.Body>
                        { dataFromApi.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.id}</Table.Cell>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.email}</Table.Cell>
                                    <Table.Cell>{data.comment}</Table.Cell>
                                    <Table.Cell className='btn-delete-cell'><Button  color='blue'>Update</Button></Table.Cell>
                                    <Table.Cell><Button color='red'>Delete</Button></Table.Cell>                    
                                </Table.Row> 
                            )
                        })}
                             
                </Table.Body>
            </Table>
        </div>
    </div>
    
  )
}

export default Read;