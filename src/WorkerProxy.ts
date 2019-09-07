import * as Comlink from 'comlink';

export default Comlink.wrap(
    new Worker('./lib/worker/index.ts', { type: 'module' }),
);
