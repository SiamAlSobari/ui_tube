<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { getPostQueriesProfileContext } from '../../../common/context/post-context';
	import ShortPostSkeleton from '../../../common/ui/skeleton/short-post-skeleton.svelte';

	const { postShortQ } = getPostQueriesProfileContext();
</script>

{#if $postShortQ.isSuccess}
	{#if $postShortQ.data?.data?.length}
		<div class="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
			{#each $postShortQ.data.data as vid, i (i)}
				<div class="flex h-52 w-36 flex-col gap-2 p-1">
					<img class="h-full w-full rounded-md object-cover" src={vid.media.videoUrl} alt="" />
				</div>
			{/each}
		</div>
	{:else}
		<Card.Root class="p-4 text-center text-gray-500">Not Found</Card.Root>
	{/if}
{:else if $postShortQ.isPending}
	<ShortPostSkeleton />
{/if}
