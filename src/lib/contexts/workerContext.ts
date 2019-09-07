import { createContext } from 'react';
import { WorkerAPI } from '../worker';

export const workerContext = createContext<WorkerAPI>(null as any);
