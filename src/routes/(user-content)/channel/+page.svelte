<script>
	import { Button } from '$lib/components/ui/button';
	import { writable } from 'svelte/store';
	import ConfirmModal from '../../../common/ui/modal/confirm-modal.svelte';
	import Profile from '../../../domains/profile/components/profile.svelte';
	import ProfileTabs from '../../../domains/profile/components/profile-tabs.svelte';
	let isOpen = writable(false);
</script>

<!-- <Button
	onclick={() => {
		isOpen.set(true);
	}}>Open Modal</Button
> -->
<ConfirmModal
	{isOpen}
	title="asas"
	description="asas"
	onSuccess={() => {}}
	onCancel={() => {
		isOpen.set(false);
	}}
/>

<div class="flex flex-col gap-4 p-6">
	<Profile />
	<ProfileTabs/>
</div>
