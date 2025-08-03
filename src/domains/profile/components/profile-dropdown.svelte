<script>
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import LoginButton from '../../auth/components/login-button.svelte';
	import LogoutButton from '../../auth/components/logout-button.svelte';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<img
			src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
			class="h-14 w-14 rounded-full"
			alt="profile"
		/>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="flex flex-col gap-2">
        <LoginButton />
        <LogoutButton />
	</DropdownMenu.Content>
</DropdownMenu.Root>
