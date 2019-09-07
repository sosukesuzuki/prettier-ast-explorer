import React, { useContext, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import JSONTree from 'react-json-tree';
import { sourceContext, parserContext } from '../../lib/contexts';
import { createParser } from '../../lib/parser';
import { theme } from '../../lib/constants';

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
        <Container>
            {error ? (
                <div>{error}</div>
            ) : (
                <JSONTree
                    data={ast}
                    theme={theme}
                    invertTheme={false}
                    shouldExpandNode={() => true}
                />
            )}
        </Container>
    );
};

export default ASTPreviewer;
