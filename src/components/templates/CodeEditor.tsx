import React, { useContext, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { sourceContext, parserContext } from '../../lib/contexts';
import { Mode } from '../../lib/types/mode';
import AceEditor from 'react-ace';
import { parserModeMap } from '../../lib/constants';

const Container = styled.div`
    resize: none;
    width: 50%;
    height: 100%;
`;

Promise.all([
    import(/* webpackChunkName: "brace" */ 'brace/mode/javascript'),
    import(/* webpackChunkName: "brace" */ 'brace/mode/typescript'),
    import(/* webpackChunkName: "brace" */ 'brace/theme/dawn'),
]);

const CodeEditor: React.FC = () => {
    const { parser } = useContext(parserContext);
    const { source, setSource } = useContext(sourceContext);
    const [mode, setMode] = useState<Mode>('javascript');

    useLayoutEffect(() => {
        const mode = parserModeMap.get(parser);
        if (mode) {
            setMode(mode);
        }
    }, [parser]);

    return (
        <Container>
            <AceEditor
                fontSize="9pt"
                width="100%"
                height="100%"
                value={source}
                onChange={(value): void => {
                    setSource(value);
                }}
                mode={mode}
                theme="dawn"
            />
        </Container>
    );
};

export default CodeEditor;
