import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            nom: '',
            prenom: '',
            adresse: '',
            ville: '',
            code_postal: '',
            password: '',
            password2: '',
            email: '',
            phone: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email,
            adresse: this.state.adresse,
            ville: this.state.ville,
            code_postal: this.state.code_postal,
            password: this.state.password,
            password2: this.state.password2,
            phone: this.state.phone
        }

        register(user).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Enregistrez vous</h1>
                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text"
                                    className="form-control"
                                    name="nom"
                                    placeholder="Entrez votre nom"
                                    value={this.state.nom}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prenom">Prenom</label>
                                <input type="text"
                                    className="form-control"
                                    name="prenom"
                                    placeholder="Entrer votre prenom"
                                    value={this.state.prenom}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Entrez un email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Téléphone</label>
                                <input type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Entrez un numéro de téléphone"
                                    value={this.state.phone}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adresse">Addresse</label>
                                <input type="text"
                                    className="form-control"
                                    name="adresse"
                                    placeholder="Entrez votre adresse"
                                    value={this.state.adresse}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ville">Ville</label>
                                <input type="text"
                                    className="form-control"
                                    name="ville"
                                    placeholder="Entrez votre ville"
                                    value={this.state.ville}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="code_postal">Code Postal</label>
                                <input type="text" 
                                    className="form-control"
                                    name="code_postal"
                                    placeholder="Entrez votre code postal"
                                    value={this.state.code_postal}
                                    onChange={this.onChange} />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder=""
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Confirmer mot de passe</label>
                                <input type="password"
                                    className="form-control"
                                    name="password2"
                                    placeholder=""
                                    value={this.state.password2}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                S'enregistrer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register