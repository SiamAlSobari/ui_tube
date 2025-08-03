<script>
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import LoginButton from '../../auth/components/login-button.svelte';
	import LogoutButton from '../../auth/components/logout-button.svelte';
	import { profileQueries } from '../queries';

	const profileQ = profileQueries.getProfile();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<img
			src={$profileQ.data?.data.avatarUrl}
			class="h-14 w-14 rounded-full object-cover"
			alt="profile"
		/>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="flex flex-col gap-2">
		<LoginButton />
		<LogoutButton />
	</DropdownMenu.Content>
</DropdownMenu.Root>
