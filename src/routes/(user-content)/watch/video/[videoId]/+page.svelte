<script lang="ts">
	import { page } from "$app/state";
	import { postQueries } from "../../../../../domains/post/queries";

    let videoId = page.params.videoId
    const videoDetailQ = postQueries.getPostVideoDetail(videoId!)
    console.log($videoDetailQ.data)
</script>

<p>{videoId}</p>