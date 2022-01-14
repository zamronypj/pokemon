const loginSvc = {
    auth(username, password) {
        return new Promise((resolve, reject) => {
            if ((username == 'admin') && (password == 'admin')) {
                //mock succcesful login
                resolve({
                    status : 'ok',
                    data : {
                        username : 'admin',
                        token : '1234567890'
                    }
                })
            } else {
                reject({
                    status : 'error',
                    error : 'Invalid username or password',
                    data : null
                })
            }
        })
    },

    logout() {
        return new Promise((resolve) => {
            resolve({
                status : 'ok',
                data : {
                    username : null,
                    token : null
                }
            })
        })
    }
}

export default loginSvc