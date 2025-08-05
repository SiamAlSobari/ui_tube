<script>
	import Profile from '../../../domains/profile/components/profile.svelte';
	import ProfileTabs from '../../../domains/profile/components/profile-tabs.svelte';
	import CreatePostButton from '../../../domains/post/components/create-post-button.svelte';
</script>

<div class="flex flex-col gap-4 p-6">
	<div class="flex justify-end">
		<CreatePostButton />
	</div>
	<Profile />
	<ProfileTabs />
</div>
