const REACT_DOMAIN = process.env.REACT_APP_BASEURL

export async function GetAllGames() {
    const response = await fetch(
        `${REACT_DOMAIN}/games`
    );

    if (!response.ok) {
        throw new Error('Could not fetch game data!');
    }

    const data = await response.json();
    return data;
}