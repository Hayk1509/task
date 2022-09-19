export const transformObjectToString = (data) => {
    let query = "?";
    Object.keys(data).map((key, n) => {
        if (data[key] !== "") {

            return query = query + `${key}=${data[key]}&`
        }

    })
    return query
}