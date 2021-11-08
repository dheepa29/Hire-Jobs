import React from "react";
import "../app.css";
import styled from "styled-components";

const Feedback = () => {
    return (
        <Container>
        <form className = "form">
            <h1>Feedback form</h1>

            <label>Name</label>
            <input placeholder ="Name" />

            <label>Email</label>
            <input placeholder ="email" />

            <label>Message</label>
            <textarea placeholder = "Message"></textarea>

            <Button type = "submit">Submit</Button>
        </form>
        </Container>
    )
}

const Button = styled.button`
background-color:#0a66c2;
`;

const Container = styled.div`
margin: 0 auto;
padding: 0;
box-sizing: border-box;
width: 400px;
height: 100vh;
`;

export default Feedback;