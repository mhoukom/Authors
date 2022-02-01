import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import {Button, Card} from 'react-bootstrap';

const Main = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors()
    }, [])

    const getAuthors = () => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log(res.data.authors);
                setAuthors(res.data.authors);
            })
            .catch(err => console.log(err))
    }

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then( res => {
                console.log(res.data);
                getAuthors();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <Link to={'/authors/new'}>Add an author</Link>
            <h3 className='pt-4 pb-4'>We have quotes by:</h3>
            <div className="row ps-3">
                <h4 className="col">Author</h4>
                <h4 className="col">Actions available</h4>
            </div>
            {
                authors.map((author, i) => {
                    return (
                        <Card className="p-3 bg-secondary">
                            <div key={i} className="row">
                                <h3 className="col">
                                    <p className="text-white">{author.name}</p>
                                </h3>
                                <div className="col">
                                    <Link to={`/authors/update/${author._id}`}>
                                        <Button className='m-2' type="button">Edit</Button>
                                    </Link>
                                    <Button className='m-2' variant="danger" onClick={() => deleteAuthor(author._id)}>Delete</Button>
                                </div>
                            </div>
                        </Card>
                    )
                })
            }
        </div>
    )
};

export default Main;