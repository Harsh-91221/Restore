import { Item } from "../../app/models/basket";
import { useClearBasketMutation, useFetchbasketQuery } from "../../features/basket/basketApi";

export const useBasket = () => {
    const { data: basket } = useFetchbasketQuery();
    const [clearBasket] = useClearBasketMutation();
    const subtotal = basket?.items.reduce((sum: number, item: Item) => sum + item.quantity * item.price, 0) ?? 0;
    const deliveryFee = subtotal > 10000 ? 0 : 500;
    const total = subtotal + deliveryFee;
    return { basket, subtotal, deliveryFee, total, clearBasket };
}