import { getContext, setContext } from 'svelte';
import type { postQueries } from '../../domains/post/queries';
import { POST_QUERIES_CONTEXT, POST_QUERIES_DETAIL_CONTEXT } from './key';

// Tipe data context
export interface PostQueriesContext {
	postVideoQ: ReturnType<typeof postQueries.getPostVideoByUser>;
	postShortQ: ReturnType<typeof postQueries.getPostShortByUser>;
}

// Key khusus (pakai object kosong)

// Setter (type-safe)
export function setPostQueriesProfileContext(value: PostQueriesContext) {
	setContext(POST_QUERIES_CONTEXT, value);
}

// Getter (type-safe)
export function getPostQueriesProfileContext() {
	return getContext(POST_QUERIES_CONTEXT) as PostQueriesContext;
}



//Detail

interface postQueriesDetailContext {
	postVideoDetailQ: ReturnType<typeof postQueries.getPostVideoDetail>;
}
// Setter (type-unsafe)
export function setPostQueriesVideoDetailContext(value: postQueriesDetailContext) {
	setContext(POST_QUERIES_DETAIL_CONTEXT, value);
}

// Getter (type-unsafe)
export function getPostQueriesVideoDetailContext() {
	return getContext(POST_QUERIES_DETAIL_CONTEXT) as postQueriesDetailContext;
}
