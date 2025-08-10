import { getContext, setContext } from 'svelte';
import type { postQueries } from '../../domains/post/queries';
import { POST_QUERIES_VIDEO_CONTEXT } from './key';

// Tipe data context
export interface PostQueriesContext {
	postVideoQ: ReturnType<typeof postQueries.getPostVideoByUser>;
	postShortQ: ReturnType<typeof postQueries.getPostShortByUser>;
}

// Key khusus (pakai object kosong)

// Setter (type-safe)
export function setPostQueriesProfileContext(value: PostQueriesContext) {
	setContext(POST_QUERIES_VIDEO_CONTEXT, value);
}

// Getter (type-safe)
export function getPostQueriesProfileContext() {
	return getContext(POST_QUERIES_VIDEO_CONTEXT) as PostQueriesContext;
}
