<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { LockKeyhole, Mail, User2 } from 'lucide-svelte';
	import * as Card from '$lib/components/ui/card/index';
	import { goto } from '$app/navigation';
	import { registerValidation, type registerValidationType } from '../validations';
	import { authQueries } from '../queries';

	let form: registerValidationType = {
		name: '',
		user_name: '',
		email: '',
		password: '',
		confirm_password: ''
	};
	let errors: Partial<Record<keyof registerValidationType, string>> = {};
	const register_mutation = authQueries.register();

	function handleSubmit() {
		const result = registerValidation.safeParse(form);
		if (!result.success) {
			errors = result.error.flatten().fieldErrors as Partial<
				Record<keyof registerValidationType, string>
			>;
			return;
		} else {
			$register_mutation.mutate(form, {
				onSuccess: (data) => {
					goto('/login');
				}
			});
		}
	}
</script>

<Card.Root class="w-full max-w-md dark:border-0">
	<Card.Content>
		<form on:submit|preventDefault={handleSubmit} class="w-full space-y-4">
			<div class="space-y-1">
				<Label>User Name</Label>
				<div class="flex overflow-hidden rounded border">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-none border-r px-3 text-gray-600 hover:bg-gray-100 focus:outline-none"
						disabled
					>
						<User2 class="h-4 w-4" />
					</Button>
					<Input
						bind:value={form.user_name}
						class="w-full rounded-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
						placeholder="Enter your User Name"
					/>
				</div>
				{#if errors.user_name}
					<p class="text-sm text-red-500">{errors.user_name}</p>
				{/if}
			</div>
			<div class="space-y-1">
				<Label>Name</Label>
				<div class="flex overflow-hidden rounded border">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-none border-r px-3 text-gray-600 hover:bg-gray-100 focus:outline-none"
						disabled
					>
						<User2 class="h-4 w-4" />
					</Button>
					<Input
						bind:value={form.name}
						class="w-full rounded-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
						placeholder="Enter your Name"
					/>
				</div>
				{#if errors.name}
					<p class="text-sm text-red-500">{errors.name}</p>
				{/if}
			</div>
			<div class="space-y-1">
				<Label>Email</Label>
				<div class="flex overflow-hidden rounded border">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-none border-r px-3 text-gray-600 hover:bg-gray-100 focus:outline-none"
						disabled
					>
						<Mail class="h-4 w-4" />
					</Button>
					<Input
						bind:value={form.email}
						class="w-full rounded-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
						placeholder="Enter your email"
					/>
				</div>
				{#if errors.email}
					<p class="text-sm text-red-500">{errors.email}</p>
				{/if}
			</div>

			<div class="space-y-1">
				<Label>Password</Label>
				<div class="flex overflow-hidden rounded border">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-none border-r px-3 text-gray-600 hover:bg-gray-100 focus:outline-none"
						disabled
					>
						<LockKeyhole class="h-4 w-4" />
					</Button>
					<Input
						type="password"
						bind:value={form.password}
						class="w-full rounded-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
						placeholder="Enter your password"
					/>
				</div>

				{#if errors.password}
					<p class="text-sm text-red-500">{errors.password}</p>
				{/if}
			</div>
			<div class="space-y-1">
				<Label>Confirm Password</Label>
				<div class="flex overflow-hidden rounded border">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-none border-r px-3 text-gray-600 hover:bg-gray-100 focus:outline-none"
						disabled
					>
						<LockKeyhole class="h-4 w-4" />
					</Button>
					<Input
						type="password"
						bind:value={form.confirm_password}
						class="w-full rounded-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
						placeholder="Enter your password"
					/>
				</div>

				{#if errors.confirm_password}
					<p class="text-sm text-red-500">{errors.confirm_password}</p>
				{/if}
			</div>
			<Button class="w-full" variant="secondary" type="submit">Login</Button>
		</form>
	</Card.Content>
</Card.Root>
