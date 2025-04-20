<script>
async function getNowPlaying() {
    const lfmResponse = await fetch(`/api/lfm`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Cache-Control': 'no-cache'
            }
        });
    const data = await lfmResponse.json();
    console.log(data);
    return {
        artist: data.artist,
        track: data.track,
        album: data.album,
        albumArt: data.albumArt
    };
}
</script>

{#await getNowPlaying() then np}
<div class="radio">
    <img src={np.albumArt} width="64px"/>
    <p>
        <small><a href="https://last.fm/user/rotaluclac" style="color: gray; text-decoration: none;">recently listened to:</a></small><br>
        <b>{np.artist}</b> <br>
        {np.track} <br>
        <small style="color: gray">from </small> <i>{np.album}</i>
    </p>
</div>
{/await}
