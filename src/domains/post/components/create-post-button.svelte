<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button size="lg">Create Post</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="flex flex-col gap-2">
		<Button
			onclick={() => {
				goto('/create/video');
			}}
			variant="ghost">Video</Button
		>
		<Button
			onclick={() => {
				goto('/create/short');
			}}
			variant="ghost">Short</Button
		>
	</DropdownMenu.Content>
</DropdownMenu.Root>
