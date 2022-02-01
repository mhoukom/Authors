import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Author from './Author';

const Update = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [author, setAuthor] = useState(null);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res.data.author);
                setAuthor(res.data.author);
            })
            .catch(err => console.error(err));
    }, []);

    const updateAuthor = (author) => {

        axios.put(`http://localhost:8000/api/authors/${id}`, author)
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
            <h3 className='pt-4 pb-4'>Edit this author:</h3>
            {errors.map((err, index) => <p className='text-danger fw-bold' key={index}>{err}</p>)}
            {author ? <Author onSubmitProp={updateAuthor} initialName={author.name}/>: <p>Loading</p>}
        </div>
    )
}

export default Update;