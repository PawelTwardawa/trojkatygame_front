export function PostData(userData, url)
{
    return new Promise((resolve, reject) => {
        //fetch("https://api.trojkatygame.tk/api/users/authenticate", {
        fetch(url, {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json"
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

export default PostData;