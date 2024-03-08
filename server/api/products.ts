import { isAxiosError } from "axios";
import storeClient from "~/lib/storeClient";

export default defineEventHandler(async (event) => {
    const { accessToken } = event.context.session;

    try {
        const { data } = await storeClient.get("/products", {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            }
        });
        return data.data.map((product: any) => ({
            id: product.id,
            name: product.name,
            desc: product.description,
            visibility: product.visibility,
            price: product.price,
            images: product.images,
        }));
    } catch (error) {
        if (isAxiosError(error))
            throw createError({
                "statusCode": error.response?.status,
                "statusText": error.response?.statusText,
            });
    }
});