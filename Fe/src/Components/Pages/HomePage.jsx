import React, { useEffect, useState, Modal, Button } from 'react'
import NavBar from '../NavBar/NavBar';
import LastRelase from '../Post/LastRelase';
import Footer from '../Footer/Footer';




function HomePage(  ) {

  const [posts, setPosts] = useState([]);



  const getPostsApi = async () => {

    try {
      const data = await fetch('http://localhost:5050/posts')

      const response = await data.json()

      setPosts(response.posts);

    } catch (error) {
      console.log('Errore nella risposta!');
    }

  }

  useEffect(() => {
    getPostsApi()

  }, []);
  
  return (
    <>

      <NavBar  />
      <LastRelase posts={posts} />

      
    
      </>
      )
  
}
export default HomePage;