import React, { useState } from 'react';
import styled from 'styled-components';
import ParserDropdown from './organisms/ParserDropdown';
import { BaseStyles } from '@primer/components';
import { parserContext, sourceContext } from '../lib/contexts';
import { Parser } from '../lib/types';
import { BABEL } from '../lib/constants';
import CodeEditor from './templates/CodeEditor';
import Details from './templates/Details';

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const App: React.FC = () => {
    const [parser, setParser] = useState<Parser>(BABEL);
    const [source, setSource] = useState('');
    return (
        <parserContext.Provider value={{ parser, setParser }}>
            <sourceContext.Provider value={{ source, setSource }}>
                <BaseStyles>
                    <ParserDropdown />
                    <Container>
                        <CodeEditor />
                        <Details />
                    </Container>
                </BaseStyles>
            </sourceContext.Provider>
        </parserContext.Provider>
    );
};

export default App;
