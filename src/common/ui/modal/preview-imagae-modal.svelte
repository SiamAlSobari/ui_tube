<script lang="ts">
	import { CircleX } from 'lucide-svelte';
	import type { Writable } from 'svelte/store';

	interface Props {
		image_url: string;
		onClose: () => void;
		isOpen: Writable<boolean>;
	}
	let { image_url, onClose, isOpen }: Props = $props();
</script>

{#if $isOpen}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/85">
		<button onclick={onClose} class="absolute top-16 right-10 z-10 text-white hover:text-red-400">
			<CircleX class="h-8 w-8" />
		</button>
		<img src={image_url} alt="" class="h-full w-auto rounded object-contain" />
	</div>
{/if}
