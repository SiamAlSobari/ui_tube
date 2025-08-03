<script>
	import { fade } from 'svelte/transition';
	import LoginForm from '../../../domains/auth/components/login-form.svelte';
</script>

<div  in:fade={{ duration: 500 }} class="flex min-h-screen w-full items-center justify-center">
	<LoginForm />
</div>
