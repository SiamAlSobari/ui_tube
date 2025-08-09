<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index';
	import type { Post } from '../../post/type';
	import ProfileShortCard from './profile-short-card.svelte';
	import ProfileVideoCard from './profile-video-card.svelte';

</script>
<Tabs.Root value="video">
	<Tabs.List
		class="w-full border-0 border-none bg-transparent bg-none active:border-0  active:border-none active:bg-transparent"
	>
		<Tabs.TabsTrigger value="video">Video</Tabs.TabsTrigger>
		<Tabs.TabsTrigger value="short">Short</Tabs.TabsTrigger>
	</Tabs.List>
	<Tabs.Content value="video">
		<ProfileVideoCard />
	</Tabs.Content>
	<Tabs.Content value="short">
		<ProfileShortCard />
	</Tabs.Content>
</Tabs.Root>
