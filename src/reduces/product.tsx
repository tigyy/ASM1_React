import { produce } from "immer"

const initalState = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    products: [] as any,
    loading: false as boolean,
    error: "" as any
}

const productReducer = (state = initalState, action: any) => {
    return produce(state, (setState) => {
        switch (action.type) {
            case "GET":
                setState.products = action.payload
                break;
            case "POST":
                setState.products = [...setState.products, action.payload]
                break;
            case "PUT":
                setState.products = setState.products.map((item: any) => item.id === action.payload.id ? action.payload : item);
                
                break;
            case "DELETE":
                setState.products = setState.products.filter((item: any) => item.id !== action.payload.id);
                break;
            default:
                return state;
        }
    })
}
export default productReducer;