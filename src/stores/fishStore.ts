import { create } from 'zustand'
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware';

const initialFoodValue = {
    fish: 0
}
type FoodState = typeof initialFoodValue;

export const useFoodStore = create<FoodState>()(
    devtools(
        subscribeWithSelector(
            persist(
                () => initialFoodValue, { name: 'food store' })
        ),
        { name: 'food store' }
    )
);


export const addOneFish = () => useFoodStore.setState((state) => ({ fish: state.fish + 1 }));
export const removeOneFish = () => useFoodStore.setState((state) => ({ fish: state.fish - 1 }));
export const removeAllFish = () => useFoodStore.setState({ fish: 0 });