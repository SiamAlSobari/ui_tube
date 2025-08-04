<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index";
	import VideoCard from "../../post/components/video-card.svelte";
	import ProfileShortCard from "./profile-short-card.svelte";
	import ProfileVideoCard from "./profile-video-card.svelte";

</script>

<Tabs.Root  value="video">
    <Tabs.List class="w-full bg-none bg-transparent border-none border-0 active:bg-transparent  active:border-0 active:border-none">
        <Tabs.TabsTrigger value="video">Video</Tabs.TabsTrigger>
        <Tabs.TabsTrigger value="short">Short</Tabs.TabsTrigger>
    </Tabs.List>
    <Tabs.Content value="video">
        <ProfileVideoCard/>
    </Tabs.Content>
    <Tabs.Content value="short">
        <ProfileShortCard/>
    </Tabs.Content>
</Tabs.Root>