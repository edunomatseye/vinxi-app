import { eventHandler, readBody } from "vinxi/http";

export default eventHandler(async (event) => {
    console.log('server is running...........', new Date());

    const { song, artist } = await readBody(event);

    return `KC is singing ${song} by ${artist}`;
})