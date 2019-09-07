import React, { useContext } from 'react';
import styled from 'styled-components';
import { sourceContext } from '../../lib/contexts';

const Container = styled.div`
    width: 50%;
`;

const ASTPreviewer: React.FC = () => {
    const { source } = useContext(sourceContext);
    return <Container>{source}</Container>;
};

export default ASTPreviewer;
