import { createContext } from 'react';
import { Parser } from '../types';
import { BABEL } from '../constants';

interface ParserContextState {
    parser: Parser;
    setParser: (nextParser: Parser) => void;
}

export const parserContext = createContext<ParserContextState>({
    parser: BABEL,
    setParser: null as any,
});
