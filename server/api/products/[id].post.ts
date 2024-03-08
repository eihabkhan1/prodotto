import { isAxiosError } from "axios";
import storeClient from "~/lib/storeClient";

export default defineEventHandler((event) => {
    const { accessToken } = event.context.session;
    const  productId = event.context.params?.id;

    
    // console.log("TOKEN", context.session);
    // try {
    //     const productId = event.context.params?.id;
    //     const body = await readBody(event);

    //     const formData = new FormData();

    //     formData.append('description', body.description);

    //     const data =  (await storeClient.post(`/products/update/${productId}`, formData,
    //     {
    //         headers: {
    //             Authorization: 'Bearer ' + accessToken,
    //         }
    //     }
    //     )).data;

    //     console.log(data);

    // } catch (error) {
    //     if (isAxiosError(error))
    //         throw createError({
    //             "statusCode": error.response?.status,
    //             "statusText": error.response?.statusText,
    //         });
    // }
    return []
})
