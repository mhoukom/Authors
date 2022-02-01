import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Author from './Author';

const New = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const createAuthor = (author) => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            
            .catch(err => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse);
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr);
                })
    }

    return(
        <div className='container'>
            <Link to={'/'}>Home</Link>
            <h3 className='pt-4 pb-4'>Add a new author:</h3>
            {errors.map((err, index) => <p className='text-danger fw-bold' key={index}>{err}</p>)}
            <Author onSubmitProp={createAuthor} initialName=""/>
        </div>
    )
}

export default New;