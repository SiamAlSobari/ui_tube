import { getContext, setContext } from 'svelte';
import type { postQueries } from '../../domains/post/queries';

// Tipe data context
export interface PostQueriesContext {
	postVideoQ: ReturnType<typeof postQueries.getPostVideoByUser>;
	postShortQ: ReturnType<typeof postQueries.getPostShortByUser>;
}

// Key khusus (pakai object kosong)
const key = 'post-queries';

// Setter (type-safe)
export function setPostQueriesContext(value: PostQueriesContext) {
	setContext(key, value);
}

// Getter (type-safe)
export function getPostQueriesContext() {
	return getContext(key) as PostQueriesContext;
}
