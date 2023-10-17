export default async function handler(request, response) {
    
    try{
        const lfmAPI = process.env.LAST_FM_API_KEY;
        const username = 'rotaluclac';
        const lfmResponse = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${lfmAPI}&format=json`,
        {
            method: "GET",
        });
        const data = await lfmResponse.json();
        const recent = data.recenttracks.track[0];
        const np = {
            artist: recent.artist['#text'],
            track: recent.name,
            album: recent.album['#text'],
            albumArt: recent.image[1]['#text'],
        };
        response.status(200).json(np);
    } catch (err) {
        console.error(err);
        response.status(500).json({error: 'API error'});
    }
}