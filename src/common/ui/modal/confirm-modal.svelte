<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { Writable } from 'svelte/store';

	interface Props {
		isOpen: Writable<boolean>;
		title: string;
		description: string;
		onSuccess: () => void;
		onCancel: () => void;
	}
	let { isOpen, title, description, onSuccess, onCancel }: Props = $props();
</script>

<Dialog.Root bind:open={$isOpen}>
	<Dialog.Content  showCloseButton={false}>
		<Dialog.Header class="flex items-center justify-center space-y-1.5">
			<Dialog.Title class="text-lg">{title}</Dialog.Title>
		</Dialog.Header>
		<Dialog.Description>{description}</Dialog.Description>
		<Dialog.Footer>
			<Button onclick={onCancel}>Cancel</Button>
			<Button onclick={onSuccess}>Confirm</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
