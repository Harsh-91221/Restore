import { Grid2, Typography } from "@mui/material";
import { useFetchbasketQuery } from "./basketApi"
import BasketItem from "./BasketItem";
import OrderSummary from "../../app/shared/components/OrderSummary";

export default function BasketPage() {
    const { data, isLoading } = useFetchbasketQuery();
    if (isLoading)
        return <Typography> Loading Basket...</Typography>
    if (!data || data.items.length === 0)
        return <Typography variant="h3"> Your Basket is empty</Typography>
    return (
        <Grid2 container spacing={2}>
            <Grid2 size={8}>
                {data.items.map(item => (
                    <BasketItem item={item} key={item.productId} />
                ))}
            </Grid2>
            <Grid2 size={4}>
                <OrderSummary />
            </Grid2>
        </Grid2>
    )
}