export function PostDataAuth(token, userData, url)
{
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + token
            },
            body: JSON.stringify(userData)
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            resolve(responseJSON);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

export default PostDataAuth;