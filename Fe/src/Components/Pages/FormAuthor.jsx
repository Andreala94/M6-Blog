import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/form'

const FormAuthor = () => {
    const name = useRef(null)
    const secondName = useRef(null)
    const birthData = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const avatar = useRef(null)

    const handleSubmit = () => {

        const data = {
            name: name.current.value,
            secondName: secondName.current.value,
            birthData: birthData.current.value,
            email: email.current.value,
            password: password.current.value,
            avatar: avatar.current.files[0],
       
        }
        console.log(data);
        const FormData = async () => {
            try {
                const data = await fetch('http://localhost:5050/register/authors',{
                    method: 'POST',
                    body: data, 
                })

                const jsonData = await data.json();

            } catch (error) {
                console.error('Si è verificato un errore:', error);
            }
        }
    }



   
// const handleSubmit = async () => {
//     try {
//         const data = {
//             name: name.current.value,
//             secondName: secondName.current.value,
//             birthData: birthData.current.value,
//             email: email.current.value,
//             password: password.current.value,
//         };

//         const formData = new FormData(); // Crea un nuovo oggetto FormData
//         formData.append('name', data.name);
//         formData.append('secondName', data.secondName);
//         formData.append('birthData', data.birthData);
//         formData.append('email', data.email);
//         formData.append('password', data.password);
//         formData.append('avatar', avatar.current.files[0]);

//         console.log(data); // Logga i dati inviati (senza avatar)

//         const response = await fetch('http://localhost:5050/register/authors', {
//             method: 'POST',
//             headers:{
//                 "Content Type": "multipat/form-data"
//             },
//             body: formData, 
//         });

//         if (response.ok) {
//             const jsonData = await response.json();
//             return jsonData
        
            
//             console.log(jsonData); // Logga la risposta JSON dal server
//         } else {
//             console.error('Errore nella risposta:', response.status);
//         }
//     } catch (error) {
//         console.error('Si è verificato un errore:', error);
//     }
// };


const saveUser = () => {
    localStorage.setItem('formData', JSON.stringify(FormData))
}
return (
    <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>NAME</Form.Label>
            <Form.Control type="input" ref={name} placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>SECOND NAME</Form.Label>
            <Form.Control
                type="input"
                ref={secondName}
                placeholder="Second Name"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>EMAIL ADDRESS</Form.Label>
            <Form.Control
                type="email"
                ref={email}
                placeholder="Enter email"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>BIRTH DATE</Form.Label>
            <Form.Control
                type="date"
                ref={birthData}
                placeholder="Enter your birthdate"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
                type="password"
                ref={password}
                placeholder="Password"
            />
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>AVATAR</Form.Label>
                <Form.Control type="file" ref={avatar} />
            </Form.Group>
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
            Submit
        </Button>
    </Form>
)
}

export default FormAuthor
