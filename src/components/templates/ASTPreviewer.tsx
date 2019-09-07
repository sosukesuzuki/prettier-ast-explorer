import React, { useContext, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { sourceContext, parserContext } from '../../lib/contexts';
import { createParser } from '../../lib/parser';

const Container = styled.div`
    width: 50%;
    white-space: pre-wrap;
    overflow-y: scroll;
`;

const ASTPreviewer: React.FC = () => {
    const { parser } = useContext(parserContext);
    const { source } = useContext(sourceContext);
    const parse = useCallback(createParser(parser), [parser]);
    const { ast, error } = useMemo(() => parse(source), [source]);
    return (
        <Container>{error ? error : JSON.stringify(ast, null, 2)}</Container>
    );
};

export default ASTPreviewer;
