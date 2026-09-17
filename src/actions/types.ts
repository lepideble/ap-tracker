import { type Navigate } from './navigate';
import { type OpenModal } from './modal';

export type Action = Navigate|OpenModal|'submit'|(() => void);
