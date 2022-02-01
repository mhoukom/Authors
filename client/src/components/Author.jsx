import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';

const Author = (props) => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
        
    return (
        <div className='container'>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group controlId="formBasicName">
                    <Form.Label className='fw-bold'>Name:</Form.Label>
                    <Form.Control
                        type="text" 
                        name="name" value={name} 
                        onChange={(e) => {setName(e.target.value)}} />
                </Form.Group>
                <div className='mt-4'>
                    <Link to={'/'}>
                        <Button className='me-5' type="button">Cancel</Button>
                    </Link>
                    <Button variant="success" type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    )
}

export default Author;