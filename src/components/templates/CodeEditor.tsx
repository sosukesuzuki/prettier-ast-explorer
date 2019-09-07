import React, { useContext } from 'react';
import styled from 'styled-components';
import { sourceContext } from '../../lib/contexts';

const Container = styled.textarea`
    resize: none;
    background-color: black;
    color: white;
    width: 50%;
`;

const CodeEditor: React.FC = () => {
    const { source, setSource } = useContext(sourceContext);

    return (
        <Container
            value={source}
            onChange={e => {
                setSource(e.target.value);
            }}
        />
    );
};

export default CodeEditor;
