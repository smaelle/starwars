export const getIdOfUrl = (url) => {
    let split = url.split('/');
    return split[split.length - 2];
}
