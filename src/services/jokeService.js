import * as consts from './httpConsts'

export async function getRandomJokes(count, categories) {
    try {
        const query = `?limitTo=[${categories.join()}]`
        const url = consts.API_BASE_URL + consts.API_GET_RAMDOM_JOKES + count + (categories.length > 0 ? query : "")
        return (await fetch(url)).json()
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function getCategories() {
    try {
        return (await fetch(consts.API_BASE_URL + consts.API_GET_JOKE_CATEGORIES)).json()
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function getJoke(id) {
    try {
        return (await fetch(consts.API_BASE_URL + consts.API_GET_JOKE + id)).json()
    } catch (e) {
        console.error(e);
        throw e;
    }
}
