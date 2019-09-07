import React, { useState } from 'react';
import { BaseStyles } from '@primer/components';
import TopNav from './templates/TopNav';
import { parserContext } from '../lib/contexts';
import { Parser } from '../lib/types';
import { BABEL } from '../lib/constants';

const App: React.FC = () => {
    const [parser, setParser] = useState<Parser>(BABEL);
    return (
        <parserContext.Provider value={{ parser, setParser }}>
            <BaseStyles>
                <TopNav />
            </BaseStyles>
        </parserContext.Provider>
    );
};

export default App;
