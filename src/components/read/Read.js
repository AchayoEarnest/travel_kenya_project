import React, {useEffect, useState} from 'react';
import "./Read.css"
import {Button, Table } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Read() { 
    const [dataFromApi, setDataFromApi] = useState([]);
    
    useEffect(() => {
        axios.get('https://62e2a5913891dd9ba8ed3db7.mockapi.io/tembea')
        .then((loadData) => setDataFromApi(loadData.data))
    }, [])


    const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id)
    }
    
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
                                    <Table.Cell className='btn-delete-cell'>
                                        <Link to = '/update'>
                                            <Button color='blue' onClick={()=>setID(data.id) } >Update</Button>
                                        </Link>                                        
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link to = '/delete'>
                                            <Button color='red'>Delete</Button>
                                        </Link>
                                        
                                    </Table.Cell>                    
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