export const prerender = false;
export const GET = async () => {
    const lfmAPI = import.meta.env.LAST_FM_API_KEY;
    const username = 'rotaluclac';
    const lfmResponse = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${lfmAPI}&format=json`,
        {
            method: "GET"
        });
    const data = await lfmResponse.json();
    const recent = data.recenttracks.track[0];
    const np = {
        artist: recent.artist['#text'],
        track: recent.name,
        album: recent.album['#text'],
        albumArt: recent.image[1]['#text'],
    };
    return new Response(JSON.stringify(np), {
        status: 200,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    });
}
