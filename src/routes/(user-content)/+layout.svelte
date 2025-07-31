<script lang="ts">
	import UserNavbar from '../../common/ui/layouts/user-navbar.svelte';

	let { children } = $props();
</script>

<UserNavbar />
{@render children()}
