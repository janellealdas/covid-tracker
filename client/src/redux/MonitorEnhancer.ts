import { Action, AnyAction, Reducer, StoreEnhancer, StoreEnhancerStoreCreator } from "redux";

const round = (value: number) => Math.round(value * 100) / 100;
const monitoEnhancer: StoreEnhancer = (createStore: StoreEnhancerStoreCreator): StoreEnhancerStoreCreator =>
    <S = any, A extends Action = AnyAction>(reducer: Reducer<S, A>) => {
        const monitorReducer = (state: any, action: any) => {
            const start = performance.now()
            console.log('reducer start process:', start)
            console.log('reducer processing....')
            const newState = reducer(state, action)
            const end = performance.now()
            console.log('reducer end process:', end)
            const diff = round(end - start)
            console.log('reducer process time:', diff)
            return newState;
        }

        const store = createStore(monitorReducer);
        return store;
    }

export default monitoEnhancer;