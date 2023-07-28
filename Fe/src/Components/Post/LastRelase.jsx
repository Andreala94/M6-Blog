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

            <Container className="d-flex mt-5 ms-5 ">
                <Row>
                    <Col className="d-flex  "
                        md={6}
                    >
                        {
                            posts && posts.map((post) => {
                                return (
                                    <CardPosts
                                        cover={post.cover}
                                        title={post.title}
                                        category={post.category}
                                    />
                                )
                            })
                        }
                    </Col>
                </Row>

            </Container>
            <Container className="text-center mt-5">
                <Link to="/newpost" >
                    <p>New Post</p>
                </Link>

            </Container>

        </>
    )
}


export default LastRelase