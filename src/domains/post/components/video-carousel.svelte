<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<Carousel.Root
	opts={{
		align: 'start'
	}}
	class="w-full  xl:max-w-[73rem] p-4  md:max-w-[50rem]"

>
	<Carousel.Content >
		{#each Array(5) as _, i (i)}
			<Carousel.Item class="xl:basis-1/3  md:basis-1/3">
				<div class="p-1">
					<Card.Root>
						<Card.Content class="flex w-full h-40 items-center justify-center p-6">
							<span class="text-3xl font-semibold">{i + 1}</span>
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>
