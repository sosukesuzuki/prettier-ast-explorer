import * as Comlink from 'comlink';
import { parse, AST } from './parser';
import { Parser } from '../types';

export class WorkerAPI {
    async parse(text: string, parser: Parser): Promise<AST> {
        return await parse(text, parser);
    }
}

Comlink.expose(WorkerAPI);
