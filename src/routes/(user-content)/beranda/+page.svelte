<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import VideoCard from '../../../domains/post/components/video-card.svelte';
	import VideoCarousel from '../../../domains/post/components/video-carousel.svelte';
</script>

<div class="flex flex-col gap-4">
	<p class="mt-10 rounded-md bg-amber-500 p-2 text-2xl font-bold">Terbaru</p>
	<div class="flex flex-col items-center justify-center">
		<VideoCarousel />
	</div>

	<p class="mt-3 rounded-md bg-amber-500 p-2 text-2xl font-bold">Recomended</p>
	<div class="flex flex-col items-center justify-center">
		<VideoCard />
	</div>
</div>
