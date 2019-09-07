let prettier: any = null;
let babylon: any = null;
let typescript: any = null;
import { Parser } from '../types';

export interface ParseResult {
    ast?: any;
    error?: string;
}

export function createParser(parser: Parser): (text: string) => ParseResult {
    if (prettier && babylon && typescript) {
        const parse = (prettier as any)['__debug']['parse'];
        return function(text: string): ParseResult {
            let ast: any;
            let error: string | undefined = undefined;
            try {
                ast = parse(text, { plugins: [babylon, typescript], parser })
                    .ast;
            } catch (err) {
                error = err.message;
            }
            return { ast, error };
        };
    }
    return () => ({ ast: {}, error: 'Prettier has not loaded yet' });
}

async function loadPrettier() {
    console.time('worker:load-prettier');
    const [p0, p1, p2] = await Promise.all([
        import('prettier/standalone'),
        import('prettier/parser-babylon'),
        import('prettier/parser-typescript'),
    ]);
    prettier = p0.default || p0;
    babylon = p1.default || p1;
    typescript = p2.default || p2;
    console.timeEnd('worker:load-prettier');
}

loadPrettier();
