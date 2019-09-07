import React, { useContext, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { sourceContext, parserContext } from '../../lib/contexts';
import { createParser } from '../../lib/parser';
import { Flash } from '@primer/components';

const Container = styled.div`
    width: 50%;
    white-space: pre-wrap;
    overflow-y: scroll;
    padding: 10px;
`;

const ASTPreviewer: React.FC = () => {
    const { parser } = useContext(parserContext);
    const { source } = useContext(sourceContext);
    const parse = useCallback(createParser(parser), [parser]);
    const { ast, error } = useMemo(() => parse(source), [source]);
    return (
        <Container>
            {error ? (
                <Flash scheme="red">{error}</Flash>
            ) : (
                <pre>
                    <code>{JSON.stringify(ast, null, 2)}</code>
                </pre>
            )}
        </Container>
    );
};

export default ASTPreviewer;
