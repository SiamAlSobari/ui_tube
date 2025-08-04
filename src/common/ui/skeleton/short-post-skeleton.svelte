<script>
	import * as Card from '$lib/components/ui/card/index';
</script>

<div class="grid gap-2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
	{#each Array(5) as _, i (i)}
		<div class="gap-2 p-1">
			<Card.Root class="h-52 w-36 animate-pulse">
				<Card.Content class="flex items-center justify-center p-6">
					<div class="h-6 w-20 bg-gray-300 rounded"></div>
				</Card.Content>
			</Card.Root>
		</div>
	{/each}
</div>
