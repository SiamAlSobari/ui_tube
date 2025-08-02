<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<Carousel.Root
	opts={{
		align: 'start'
	}}
	class="w-full  p-4 md:max-w-[50rem]  xl:max-w-[85rem]"
>
	<Carousel.Content>
		{#each Array(5) as _, i (i)}
			<Carousel.Item class="md:basis-1/3  xl:basis-1/3">
				<div class="flex flex-col gap-2 p-1">
					<Card.Root>
						<Card.Content class="flex h-40 w-full items-center justify-center p-6">
							<span class="text-3xl font-semibold">{i + 1}</span>
						</Card.Content>
					</Card.Root>
					<div class="flex items-center gap-2">
						<img
							class="h-14 w-14 rounded-full"
							src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=60"
							alt=""
						/>
						<div>
							<h1 class="line-clamp-2 overflow-hidden text-xl font-semibold wrap-break-word">
								description ini saasa sasa assa sasas sa sas sa s a sa s asaklsaa sakkajs sahahs
							</h1>
							<span class="text-sm">John Doe</span>
							<div class="flex items-center gap-2">
								<span class="text-muted-foreground">14 views</span>
								<span class="text-muted-foreground">2 hours ago</span>
							</div>
						</div>
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>
