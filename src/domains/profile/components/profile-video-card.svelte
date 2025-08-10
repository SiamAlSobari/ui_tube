<script>
	import * as Card from '$lib/components/ui/card/index';
	import { getPostQueriesProfileContext } from '../../../common/context/post-context';
	import VideoPostSkeleton from '../../../common/ui/skeleton/video-post-skeleton.svelte';
	const { postVideoQ } = getPostQueriesProfileContext();
</script>

{#if $postVideoQ.isSuccess}
	{#if $postVideoQ.data?.data?.length}
		<div class="grid grid-cols-1 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
			{#each $postVideoQ.data?.data as vid, i (i)}
				<div class="flex h-32 w-56 flex-col gap-2 p-1">
					<img class="h-full w-full rounded-md object-cover" src={vid.media.videoUrl} alt="" />
				</div>
			{/each}
		</div>
	{:else}
		<Card.Root class="p-4 text-center text-gray-500">Not Found</Card.Root>
	{/if}
{:else if $postVideoQ.isPending}
	<VideoPostSkeleton />
{/if}
