import { Parser } from '../types';
import { Mode } from '../types/mode';
import { BABEL, TS } from './parser';

export const javascriptMode = 'javascript';
export const typescriptMode = 'typescript';

export const parserModeMap: Map<Parser, Mode> = new Map([
    [BABEL, javascriptMode],
    [TS, typescriptMode],
]);
