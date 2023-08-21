import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const FormAuthor = () => {
   const [formData, setFormData] = useState({})
   const [avatar, setAvatar] = useState(null)

  const onChangeHandleFile = (e) =>{
    setAvatar(e.target.files[0])
  }

  console.log(formData);

  const uploadAvatar = async (file)=>{
    const avatarFile = new FormData()
    avatarFile.append('avatar', file)
    try {
        const response = await fetch('http://localhost:5050/register/avatarCloud', {
            method: "POST",
            body: avatarFile
        })
            
        return await response.json()
    } catch (error) {
        console.log(error);
    }
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(avatar ){
        try {
            const uploadAvatarImage = await uploadAvatar(avatar)
            const formDataWithAvatar ={
                ...formData,
                avatar: uploadAvatarImage.avatar
            }
            const response = await fetch('http://localhost:5050/register/authors', {
                method: "POST",
                body: JSON.stringify(formDataWithAvatar)
            })
        } catch (error) {
            console.log(error);
        }
    }
    else{
        console.log( "Perfavore seleziona almeno un immagine!")
    }
  }
   
        console.log(formData);
    return (
        <Form onSubmit={handleSubmit} encType='multipart/form-data'>
            <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>NAME</Form.Label>
                <Form.Control type="input"  placeholder="Name" onChange={(e)=>setFormData({
                    ...formData,
                    name:e.target.value
                })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>SURNAME</Form.Label>
                <Form.Control type="input"  placeholder="Name" onChange={(e)=>setFormData({
                    ...formData,
                    surname:e.target.value
                })}/>
            
            
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>EMAIL ADDRESS</Form.Label>
                <Form.Control type="email"  placeholder="Enter email" onChange={(e)=>setFormData({
                    ...formData,
                    email:e.target.value
                })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupBirthDate">
                <Form.Label>BIRTH DATE</Form.Label>
                <Form.Control type="date"  placeholder="Enter your birthdate" onChange={(e)=>setFormData({
                    ...formData,
                    dob:e.target.value
                })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control type="password"  placeholder="Password" onChange={(e)=>setFormData({
                    ...formData,
                    password:e.target.value
                })} />
                <Form.Label>AVATAR</Form.Label>
                <Form.Control type="file" onChange={onChangeHandleFile} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default FormAuthor;






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

// }
// export default FormAuthor
