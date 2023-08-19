import React, { useEffect, useRef } from 'react'
import { Button, Form } from 'react-bootstrap';

const FormAuthor = () => {
    const name = useRef(null);
    const surname = useRef(null);
    const dob = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const avatar = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita l'invio del modulo predefinito

        const formData = new FormData();
        formData.append('name', name.current.value);
        formData.append('surname', surname.current.value);
        formData.append('dob', dob.current.value);
        formData.append('email', email.current.value);
        formData.append('password', password.current.value);
        formData.append('avatar', avatar.current.files[0]);
        console.log(FormData);

        try {
            const response = await fetch('http://localhost:5050/register/authors', {
                method: 'POST',
               
                body: formData,
            });

            if (response.ok) {
                const jsonData = await response.json();
                console.log(jsonData); // Logga la risposta JSON dal server
            } else {
                console.error('Errore nella risposta:', response.status);
            }
        } catch (error) {
            console.error('Si è verificato un errore:', error);
        }
    };
    const saveUser = () => {
            localStorage.setItem('formData', JSON.stringify(FormData))
         
        }
        
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>NAME</Form.Label>
                <Form.Control type="input" ref={name} placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupSecondName">
                <Form.Label>SECOND NAME</Form.Label>
                <Form.Control type="input" ref={surname} placeholder="Second Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>EMAIL ADDRESS</Form.Label>
                <Form.Control type="email" ref={email} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupBirthDate">
                <Form.Label>BIRTH DATE</Form.Label>
                <Form.Control type="date" ref={dob} placeholder="Enter your birthdate" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password" ref={password} placeholder="Password" />
                <Form.Label>AVATAR</Form.Label>
                <Form.Control type="file" ref={avatar} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default FormAuthor;



// const handleSubmit = async (event) => {
//     event.preventDefault(); // Evita l'invio del modulo predefinito

//     const formData = new FormData();
//     formData.append('name', name.current.value);
//     formData.append('secondName', secondName.current.value);
//     formData.append('birthData', birthData.current.value);
//     formData.append('email', email.current.value);
//     formData.append('password', password.current.value);
//     formData.append('avatar', avatar.current.files[0]);

//     try {
//         const response = await fetch('http://localhost:5050/register/authors', {
//             method: 'POST',
//             body: formData,
//         });

//         if (response.ok) {
//             const jsonData = await response.json();
//             console.log(jsonData); // Logga la risposta JSON dal server
//         } else {
//             console.error('Errore nella risposta:', response.status);
//         }
//     } catch (error) {
//         console.error('Si è verificato un errore:', error);
//     }
// };


// const FormAuthor = () => {
//     const name = useRef(null)
//     const secondName = useRef(null)
//     const birthData = useRef(null)
//     const email = useRef(null)
//     const password = useRef(null)
//     const avatar = useRef(null)

//     const handleSubmit = () => {

//         const data = {
//             name: name.current.value,
//             secondName: secondName.current.value,
//             birthData: birthData.current.value,
//             email: email.current.value,
//             password: password.current.value,
//             avatar: avatar.current.files[0],
       
//         }
//         console.log(data);

       
        
//         const FormData = async () => {
//             try {
//                 const data = await fetch('http://localhost:5050/register/authors',{
//                     method: 'POST',
//                     body: data, 
//                 })

//                 const jsonData = await data.json();

//             } catch (error) {
//                 console.error('Si è verificato un errore:', error);
//             }
        
        
//         }

    
//     }
   



// const saveUser = () => {
//     localStorage.setItem('formData', JSON.stringify(FormData))
// }
// return (
//     <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formGroupEmail">
//             <Form.Label>NAME</Form.Label>
//             <Form.Control type="input" ref={name} placeholder="Name" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGroupPassword">
//             <Form.Label>SECOND NAME</Form.Label>
//             <Form.Control
//                 type="input"
//                 ref={secondName}
//                 placeholder="Second Name"
//             />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGroupEmail">
//             <Form.Label>EMAIL ADDRESS</Form.Label>
//             <Form.Control
//                 type="email"
//                 ref={email}
//                 placeholder="Enter email"
//             />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGroupEmail">
//             <Form.Label>BIRTH DATE</Form.Label>
//             <Form.Control
//                 type="date"
//                 ref={birthData}
//                 placeholder="Enter your birthdate"
//             />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formGroupPassword">
//             <Form.Label>PASSWORD</Form.Label>
//             <Form.Control
//                 type="password"
//                 ref={password}
//                 placeholder="Password"
//             />
//             <Form.Group className="mb-3" controlId="formGroupEmail">
//                 <Form.Label>AVATAR</Form.Label>
//                 <Form.Control type="file" ref={avatar} />
//             </Form.Group>
//         </Form.Group>

//         <Button variant="primary" type='submit'>
//             Submit
//         </Button>
//     </Form>
// )


// export default FormAuthor
