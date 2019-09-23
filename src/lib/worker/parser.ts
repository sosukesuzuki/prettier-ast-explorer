import { Parser } from '../types';

let prettier: any = null;
let babylon: any = null;
let typescript: any = null;

export type AST = any;

export async function parse(text: string, parser: Parser): Promise<AST> {
    if (prettier && babylon && typescript) {
        const parse = (prettier as any)['__debug']['parse'];
        try {
            const parsed = parse(text, {
                plugins: [babylon, typescript],
                parser,
            });
            return parsed.ast;
        } catch (error) {
            throw error;
        }
    }

    return null;
}

console.time('worker:load-prettier');
(async function(): Promise<void> {
    const [p0, p1, p2] = await Promise.all([
        import(/* webpackChunkName: "prettier" */ 'prettier/standalone'),
        import(/* webpackChunkName: "prettier" */ 'prettier/parser-babylon'),
        import(/* webpackChunkName: "prettier" */ 'prettier/parser-typescript'),
    ]);

    prettier = p0.default || p0;
    babylon = p1.default || p1;
    typescript = p2.default || p2;
    console.timeEnd('worker:load-prettier');
})();
