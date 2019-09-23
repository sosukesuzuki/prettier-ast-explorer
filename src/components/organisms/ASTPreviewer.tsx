import React, { useContext, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import {
    sourceContext,
    parserContext,
    workerContext,
} from '../../lib/contexts';
import { theme } from '../../lib/constants';
import { usePrevious } from '../../lib/hooks';
import loadable from '@loadable/component';

const JSONTree = loadable(() =>
    import(/* webpackChunkName: "react-json-tree" */ 'react-json-tree'),
);

const Container = styled.div`
    width: 100%;
    white-space: pre-wrap;
    overflow-y: scroll;
    font-size: 14px;
`;
const Flash = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    padding: 10px;
    z-index: 1;
`;

interface Props {
    className: string;
}

const ASTPreviewer: React.FC<Props> = ({ className }) => {
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
        proxy
            .parse(source, parser)
            .then((ast): void => {
                setError('');
                setAst(ast);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [source, parser]);

    return (
        <Container className={className}>
            {shownAst && (
                <JSONTree
                    data={shownAst}
                    theme={theme}
                    invertTheme={false}
                    shouldExpandNode={(keyPath): boolean => {
                        // Expand when node is not "loc"
                        return keyPath[0] !== 'loc';
                    }}
                />
            )}
            {(error || isNotExistsAST) && (
                <Flash>{error || '...Waiting Worker'}</Flash>
            )}
        </Container>
    );
};

export default ASTPreviewer;
