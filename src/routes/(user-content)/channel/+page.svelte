<script>
	import { Button } from '$lib/components/ui/button';
	import { writable } from 'svelte/store';
	import ConfirmModal from '../../../common/ui/modal/confirm-modal.svelte';
	let isOpen = writable(false);
</script>

<Button
	onclick={() => {
		isOpen.set(true);
	}}>Open Modal</Button
>
<ConfirmModal
	{isOpen}
	title="asas"
	description="asas"
	onSuccess={() => {}}
	onCancel={() => {
		isOpen.set(false);
	}}
/>
