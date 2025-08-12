<script>
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { writable } from 'svelte/store';
	import CreateVideoModalForm from './create-video-modal-form.svelte';
	import CreateShortModalForm from './create-short-modal-form.svelte';

	let isOpenVideoModal = writable(false);
	let isOpenShortModal = writable(false);
</script>

<CreateVideoModalForm
	onCancel={() => isOpenVideoModal.set(false)}
	onSuccess={() => isOpenVideoModal.set(false)}
	isOpen={isOpenVideoModal}
/>
<CreateShortModalForm
	onCancel={() => isOpenShortModal.set(false)}
	onSuccess={() => isOpenShortModal.set(false)}
	isOpen={isOpenShortModal}
/>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<Button size="lg">Create Post</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="flex flex-col gap-2">
		<Button
			onclick={() => {
				isOpenVideoModal.set(true);
			}}
			variant="ghost">Video</Button
		>
		<Button
			onclick={() => {
				isOpenShortModal.set(true);
			}}
			variant="ghost">Short</Button
		>
	</DropdownMenu.Content>
</DropdownMenu.Root>
