import React from "react";
import styled from "styled-components";

const Container = styled.header`
    border-bottom: 1px solid rgb(225, 228, 232);
    padding: 10px;
    font-size: 10px;
    h1 {
        margin: 0;
    }
`;

const TopNav: React.FC = () => {
    return (
        <Container>
            <h1>AST Exploler</h1>
        </Container>
    )
};

export default TopNav;
