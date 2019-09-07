import React, { useContext } from 'react';
import styled from 'styled-components';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';

import { sourceContext } from '../../lib/contexts';

const Container = styled.div`
    resize: none;
    width: 50%;
    height: 100%;
`;

const CodeEditor: React.FC = () => {
    const { source, setSource } = useContext(sourceContext);

    return (
        <Container>
            <AceEditor
            width="100%"
            height="100%"
                value={source}
                onChange={newValue => setSource(newValue)}
                mode="javascript"
                theme="github"
            />
        </Container>
    );
};

export default CodeEditor;
