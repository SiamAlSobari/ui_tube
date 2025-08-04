<script>
	import * as Card from '$lib/components/ui/card/index';
</script>

<div class="grid grid-cols-1 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
	{#each Array(5) as _, i (i)}
		<div class="flex flex-col gap-2 p-1">
			<Card.Root class="animate-pulse">
				<Card.Content class="flex h-20 w-full items-center justify-center p-6">
					<div class="h-6 w-24 rounded bg-gray-300"></div>
				</Card.Content>
			</Card.Root>
		</div>
	{/each}
</div>
