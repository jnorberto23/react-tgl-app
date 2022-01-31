import { gameActions } from './game-slice';

export const fetchGameData = () => {
    return async (dispatch: any) => {
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.REACT_APP_BASEURL}/games/1`
            );

            if (!response.ok) {
                throw new Error('Could not fetch game data!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const gameData = await fetchData();
            dispatch(
                gameActions.changeGame({
                    id: gameData.id,
                    type: gameData.type,
                    description: gameData.description,
                    range: gameData.range,
                    price: gameData.price,
                    max_number: gameData.max_number,
                    color: gameData.color,
                    created_at: gameData.created_at,
                })
            );
        } catch (error) {
            console.log(error)
        }
    };
};

export const changeGameContext = (data: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(
                gameActions.changeGame({
                    id: data.id,
                    type: data.type,
                    description: data.description,
                    range: data.range,
                    price: data.price,
                    max_number: data.max_number,
                    color: data.color,
                    created_at: data.created_at,
                })
            );
        } catch (error) {
            console.log(error)
        }
    };
};