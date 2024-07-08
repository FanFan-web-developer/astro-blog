export { renderers } from '../renderers.mjs';

const page = () => import('./pages/free_CpuHn-5K.mjs').then(n => n.f);

export { page };
