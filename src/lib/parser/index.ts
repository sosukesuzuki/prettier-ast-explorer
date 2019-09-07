import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babylon';
import typescript from 'prettier/parser-typescript';
import { Parser } from '../types';

interface ParseResult {
    ast?: any;
    error?: string;
}

export function createParser(parser: Parser): (text: string) => ParseResult {
    const parse = (prettier as any)['__debug']['parse'];
    return function(text: string): ParseResult {
        let ast: any;
        let error: string | undefined = undefined;
        try {
            ast = parse(text, { plugins: [babylon, typescript], parser }).ast;
        } catch (err) {
            error = err.message;
        }
        return { ast, error };
    };
}
