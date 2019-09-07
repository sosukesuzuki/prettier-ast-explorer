import React from 'react';
import styled from 'styled-components';

const Container = styled.textarea`
    resize: none;
    background-color: black;
    color: white;
    width: 50%;
`;

const CodeEditor: React.FC = () => {
    return <Container />;
};

export default CodeEditor;
