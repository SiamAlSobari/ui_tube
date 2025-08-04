<script lang="ts">
	import { writable } from 'svelte/store';
	import PreviewImagaeModal from '../../../common/ui/modal/preview-imagae-modal.svelte';
	import UploadImageProfile from './upload-image-profile.svelte';
	import { Save, X } from 'lucide-svelte';
	import { profileServices } from '../services';
	import { profileQueries } from '../queries';
	let isOpen = writable(false);
	let imagePreview = $state<string | null>(null);
	const profileQ = profileQueries.getProfile();

	const updateProfile = profileQueries.updateAvatar(() => {
		imagePreview = null;
		profileServices.avatar = null;
	});

	const handleOpen = () => {
		isOpen.set(true);
	};

	const handlePreview = (e: Event) => {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0];
		if (file) {
			imagePreview = URL.createObjectURL(file);
			profileServices.avatar = file;
		}
	};

	const handleRemovePreview = () => {
		imagePreview = null;
		profileServices.avatar = null;
	};

	const handleSubmit = () => {
		$updateProfile.mutate();
	};
</script>

<section class="flex items-center gap-2">
	<PreviewImagaeModal
		{isOpen}
		onClose={() => isOpen.set(false)}
		image_url={imagePreview || $profileQ.data?.data?.avatarUrl || ''}
	/>
	<div class="relative flex items-center gap-2">
		<button class="h-40 w-40" onclick={handleOpen}>
			<img
				src={$profileQ.data?.data.avatarUrl || 'https://via.placeholder.com/150'}
				alt="profile"
				class="h-full w-full rounded-full object-cover"
			/>
		</button>
		{#if !imagePreview}
			<div class="absolute right-0 bottom-0">
				<UploadImageProfile onChangeImage={handlePreview} />
			</div>
		{:else}
			<div class="absolute -right-10 bottom-0">
				<button onclick={handleSubmit}>
					<Save class="h-8 w-8 text-green-500" />
				</button>
				<button onclick={handleRemovePreview}>
					<X class="h-8 w-8 text-red-500" />
				</button>
			</div>
		{/if}
	</div>
	<div>
		<h1 class="text-2xl font-semibold">{$profileQ.data?.data?.name}</h1>
		<p class="line-clamp-1 w-full wrap-break-word text-muted-foreground">
			{$profileQ.data?.data?.bio || '-'}
		</p>
	</div>
</section>
