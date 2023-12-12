const httpService = {
    login: (data: any) => {
        return fetch("http://192.168.0.10:3000/api/user/auth",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    createUser: (data: any) => {
        return fetch("http://192.168.0.10:3000/api/user",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export default httpService