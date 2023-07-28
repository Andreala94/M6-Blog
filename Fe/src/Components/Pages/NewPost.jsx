import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';

export const NewPost = () => {
    const [titleValue, setTitleValue] = useState('');
    const [authorValue, setAuthorValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const [coverValue, setCoverValue] = useState(null);
    const [readTimeValue, setReadTimeValue] = useState('');
    const [readTimeUnit, setReadTimeUnit] = useState('')


    const uploadCover = async (file) =>{
        const coverData = new FormData();
        coverData.append("cover", file);

        try {
            
        } catch (error) {
            
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

    
        setTitleValue(event.target.value);
        setAuthorValue(event.target.value);
        setCategoryValue(event.target.value);
        setContentValue(event.target.value);
        // setReadTimeUnit(event.target.value);
        // setReadTimeValue(event.target.value);

        try {
            const response = await fetch('http://localhost:5050/posts/create', {
                method: 'POST',
                
                body: JSON.stringify({
                    category: categoryValue,
                    title: titleValue,
                    cover: coverValue,
                   
                    author: authorValue,
                    content: contentValue
                })

            });

            

        } catch (error) {
            throw new Error('Errore nella richiesta');
        }
    }


//? gestire un input di tipo file (enctype)

return (
    <>    
        <NavBar />
        
        <Form className='m-5' encType='multipart/from-data' onSubmit={handleSubmit}>  
            <Form.Group controlId="formTitle">
                <Form.Label>Titolo</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il titolo" onChange={(event) => setTitleValue(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formAuthor" className='mt-3'>
                <Form.Label>Autore</Form.Label>
                <Form.Control type="text" placeholder="Inserisci l'autore" onChange={(event) => setAuthorValue(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formCategory" className='mt-3'>
                <Form.Label>Categoria</Form.Label>
                <Form.Control type="text" placeholder="Inserisci la categoria" onChange={(event) => setCategoryValue(event.target.value)} />
            </Form.Group>

            <Form.Group className='mt-3'>
                <Form.Label>Carica un'immagine</Form.Label>
                <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formContent" className='mt-3'>
                <Form.Label>Contenuto</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Inserisci il contenuto" onChange={(event) => setContentValue(event.target.value)} />
            </Form.Group>

            <Button className='ms-5' type='submit'>
                Crea
            </Button>
        </Form>
       
    </>
)
}
