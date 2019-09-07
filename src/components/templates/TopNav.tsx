import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    padding: 10px;
    font-size: 10px;
    background-color: #3d3d3d;
    h1 {
        margin: 0;
        color: white;
    }
`;

const TopNav: React.FC = () => {
    return (
        <Container>
            <h1>AST Exploler</h1>
        </Container>
    );
};

export default TopNav;
