import { GetAllGames } from '../lib/api';
import { gameActions } from './game-slice';

export const fetchGameData = () => {
    return async (dispatch: any) => {
        const fetchData = await GetAllGames()
        try {
            dispatch(changeGameContext(fetchData.types[0]))
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


export const changeSelectedNumbers = (number: any) => {
    return async (dispatch: any) => {
        try {
            dispatch(
                gameActions.addNumber({
                    number: number,
                })
            );
        } catch (error) {
            console.log(error)
        }
    };
};