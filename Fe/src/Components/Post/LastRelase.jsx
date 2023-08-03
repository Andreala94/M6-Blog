import React, { useEffect, useState } from "react";
import CardPosts from "./CardPosts";
import { Col, Container, Row, Button } from "react-bootstrap";
import { NewPost } from "../Pages/NewPost";
import { Link } from "react-router-dom";




const LastRelase = ({ posts }) => {


    useEffect(() => {

    }, []);

    return (
        <>
            <Container className="mt-5">
                <Row className="d-flex flex-wrap">
                    {posts &&
                        posts.map((post) => (
                            <Col key={post.id} md={6} lg={3} sm={3} className="mb-4">
                                <CardPosts
                                    cover={post.cover}
                                    title={post.title}
                                    category={post.category}
                                    content={post.content}
                                />
                            </Col>
                        ))}
                </Row>

                <Container className="text-center mt-5">
                    <Link  to="/newpost">
                        <p>New Post</p>
                    </Link>
                    <Link to="/form">
                        <p>Registarti</p>
                    </Link>
            

                </Container>
            </Container>
        </>
    )
}


export default LastRelase