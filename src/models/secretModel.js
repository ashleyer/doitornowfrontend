const url = `http://localhost:8000/api/v1`

class SecretModel {
    static all = () => {
        // the fetch API will not parse JSON in the response automatically so we handle it in the first .then()
        return fetch(`${url}/secrets`).then(res => res.json())
    }

    static show(id) {
        // the fetch API will not parse JSON in the response automatically so we handle it in the first .then()
        return fetch(`${url}/secrets/${id}`).then(res => res.json())
    }

    static create = (secretData) => {
        return fetch(`${url}/secrets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => {
                body: JSON.stringify(secretData)
                res.json()
            })
    }

}


export default SecretModel
