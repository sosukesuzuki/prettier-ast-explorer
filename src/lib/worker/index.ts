import * as Comlink from 'comlink';
import { parse, ParseResult } from './parser';
import { Parser } from '../types';

export class WorkerAPI {
    async parse(text: string, parser: Parser): Promise<ParseResult> {
        return await parse(text, parser);
    }
}

Comlink.expose(WorkerAPI);
