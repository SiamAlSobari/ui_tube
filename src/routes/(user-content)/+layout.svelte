<script lang="ts">
	import UserNavbar from '../../common/ui/layouts/user-navbar.svelte';
	import UserSidebar from '../../common/ui/layouts/user-sidebar.svelte';

	let { children } = $props();
</script>

<div class="flex min-h-screen w-full flex-col">
	<header class="sticky top-0 z-40">
		<UserNavbar />
	</header>
	<div class="flex flex-1">
		<div class="fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 shadow-md">
			<UserSidebar />
		</div>
		<main class="z-10 ml-64 flex-1 overflow-y-auto p-4">
			{@render children()}
		</main>
	</div>
</div>
