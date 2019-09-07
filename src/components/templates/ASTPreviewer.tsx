import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import JSONTree from 'react-json-tree';
import {
    sourceContext,
    parserContext,
    workerContext,
} from '../../lib/contexts';
import { theme } from '../../lib/constants';
import { Flash } from '@primer/components';

const Container = styled.div`
    width: 50%;
    white-space: pre-wrap;
    overflow-y: scroll;
    background-color: #1c2023;
`;

const ASTPreviewer: React.FC = () => {
    const [ast, setAst] = useState(null as any);
    const [error, setError] = useState('');
    const { parser } = useContext(parserContext);
    const { source } = useContext(sourceContext);
    const proxy = useContext(workerContext);

    useEffect(() => {
        setError("");
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
            {error || !ast ? (
                <Flash scheme="red">{error || "...Waiting Worker"}</Flash>
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
