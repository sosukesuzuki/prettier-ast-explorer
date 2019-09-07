import { createContext } from 'react';

interface SourceContextState {
    source: string;
    setSource: (newSource: string) => void;
}

export const sourceContext = createContext<SourceContextState>({
    source: '',
    setSource: null as any,
});
