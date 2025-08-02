<script lang="ts">
	import UserNavbar from '../../common/ui/layouts/user-navbar.svelte';
	import UserSidebar from '../../common/ui/layouts/user-sidebar.svelte';

	let { children } = $props();
	let isOpen = $state(false);
	const handleOpen = () => {
		isOpen = !isOpen;
	};

</script>

<div class="flex min-h-screen w-full flex-col">
	<header class="sticky top-0 z-40">
		<UserNavbar {handleOpen} />
	</header>
	<div class="flex flex-1">
		<UserSidebar {isOpen} />
		<main class="z-1 ml-64 flex-1 overflow-y-auto p-4">
			{@render children()}
		</main>
	</div>
</div>
