import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            nom: newUser.nom,
            prenom: newUser.prenom,
            adresse: newUser.adresse,
            ville: newUser.ville,
            code_postal: newUser.code_postal,
            password: newUser.password,
            password2: newUser.password2,
            email: newUser.email,
            phone: newUser.phone
        })
        .then(res => {
            console.log('Enregistré!')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

