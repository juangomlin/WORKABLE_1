import React from "react";
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import './ForgotPassword.css'

const ForgotPassword = () => {
    return (
    <>
        <Header />
            <main className="main-forgotpsw">
                <section className="section-forgotpsw">
                    <h1>¿Olvidaste tu contraseña?</h1>
                    <div className="div-forgotpsw">
                        <form className="form-forgotpsw">
                            <input type="text" 
                            className="input-forgotpsw" 
                            placeholder="Correo electronico"
                            />
                        </form>
                    </div>
                </section>
            </main>
    </>
    )
}

export default ForgotPassword;