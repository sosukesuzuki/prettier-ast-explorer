import * as Comlink from 'comlink';
import { createParser, ParseResult } from './createParser';
import { Parser } from '../types';

export class WorkerAPI {
    parser: ((text: string) => ParseResult) | null = null;

    async createParser(parser: Parser) {
        this.parser = createParser(parser);
    }

    async parse(text: string): Promise<ParseResult> {
        if (!this.parser) {
            return {
                ast: {},
                error: 'Parser has not loaded yet',
            };
        }
        return this.parser(text);
    }
}

Comlink.expose(WorkerAPI);
