<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { writable } from 'svelte/store';
	import ConfirmModal from '../../../common/ui/modal/confirm-modal.svelte';
	import { authQueries } from '../queries';

	let isOpen = writable(false);
	const logout = authQueries.logout();
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
