<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { writable } from 'svelte/store';
	import { auth_queries } from '../queries';
	import ConfirmModal from '../../../common/ui/modal/confirm-modal.svelte';

	let isOpen = writable(false);
	const logout = auth_queries.logout();
	const handleLogout = () => {
		$logout.mutate();
	};
</script>

<ConfirmModal
	onSuccess={handleLogout}
	{isOpen}
	title="Logout"
	description="Are you sure you want to logout?"
	onCancel={() => isOpen.set(false)}
/>
<Button class="w-full" onclick={() => isOpen.set(true)} variant="destructive">Logout</Button>
