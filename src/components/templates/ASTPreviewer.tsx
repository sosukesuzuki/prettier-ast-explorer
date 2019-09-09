import React, { useContext, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import JSONTree from 'react-json-tree';
import {
    sourceContext,
    parserContext,
    workerContext,
} from '../../lib/contexts';
import { theme } from '../../lib/constants';
import { Flash } from '@primer/components';
import { usePrevious } from '../../lib/hooks';

const Container = styled.div`
    width: 50%;
    white-space: pre-wrap;
    overflow-y: scroll;
    background-color: #1c2023;
`;
const FixedFlash = styled(Flash)`
    position: fixed;
    bottom: 30px;
    z-index: 1;
    right: 0;
`;

const ASTPreviewer: React.FC = () => {
    const [ast, setAst] = useState(null as any);
    const [error, setError] = useState('');
    const { parser } = useContext(parserContext);
    const { source } = useContext(sourceContext);
    const proxy = useContext(workerContext);
    // Basically, we want to show the AST parsed from current source.
    // But, when syntax errror happend, we cannot.
    // So, we show the AST parsed from source before error happend.
    const prevAst = usePrevious(ast);
    const shownAst = useMemo(() => ast || prevAst, [ast, prevAst]);

    const isNotExistsAST = useMemo(() => !!(!ast && !prevAst), [ast, prevAst]);

    useEffect(() => {
        setError('');
        proxy
            .parse(source, parser)
            .then(({ ast }) => {
                setAst(ast);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [source, parser]);

    return (
        <Container>
            {shownAst && (
                <JSONTree
                    data={shownAst}
                    theme={theme}
                    invertTheme={false}
                    shouldExpandNode={() => true}
                />
            )}
            {(error || isNotExistsAST) && (
                <FixedFlash scheme="red">
                    {error || '...Waiting Worker'}
                </FixedFlash>
            )}
        </Container>
    );
};

export default ASTPreviewer;
