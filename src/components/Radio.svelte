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
    return {
        artist: data.artist,
        track: data.track,
        album: data.album,
        albumArt: data.albumArt
    };
}
</script>

{#await getNowPlaying()}
    <p style="margin: 4ch; color: #aaaaaa"><em>listening...</em></p>
{:then np}
    <img alt="album art" src={np.albumArt} width="64px"/>
    <p>
        <small><a href="https://last.fm/user/rotaluclac" style="color: gray; text-decoration: none;">recently listened to:</a></small><br>
        <b>{np.artist}</b> <br>
        {np.track} <br>
        <small style="color: gray">from </small> <i>{np.album}</i>
    </p>
{/await}
