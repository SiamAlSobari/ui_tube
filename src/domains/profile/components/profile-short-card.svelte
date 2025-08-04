<script>
	import * as Card from '$lib/components/ui/card/index';
</script>

<div class="grid gap-2 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
	{#each Array(5) as _, i (i)}
		<div class=" gap-2 p-1">
			<Card.Root class="h-52 w-36">
				<Card.Content class="flex  items-center justify-center p-6">
					<span class="text-xl font-semibold">assaas</span>
				</Card.Content>
			</Card.Root>
		</div>
	{/each}
</div>
