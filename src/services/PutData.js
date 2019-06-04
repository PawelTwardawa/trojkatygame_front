export function PutData(token, url)
{
    return new Promise((resolve, reject) => {
        //fetch("https://api.trojkatygame.tk/api/users/authenticate", {
        fetch(url, {
            method: "PUT",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + token,
                //'Host': 'api.trojkatygame.com'
            }
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

export default PutData;