import React from 'react'
import Footer from './Footer'

const Contact = () => {

    return (
        <div className='Contactbody'>
            <div className='content'>
                <div className='contact-form-container'>
                    <form id='contact-form'>
                        <h3>Contact Our Store</h3>
                        <div className='first-last-container'>
                            <div className='first-last'>
                                <label htmlFor="firstName">
                                    First Name:
                                </label>
                                <br></br>
                                <input className='first-last-input' id="firstName" type="text" name="firstName" required="" />

                            </div>
                            <div className='first-last'>
                                <label htmlFor="lastName">
                                    Last:
                                </label>
                                <br></br>
                                <input id="lastName" type="text" name="lastName" required="" />
                                <br></br>
                            </div>
                            <br></br>
                        </div>
                        <label htmlFor="    Telephone">
                            Phone:
                        </label>
                        <br></br>
                        <input id="telephone" type="tel" name="telephone" />
                        <br></br>
                        <label htmlFor="email">
                            Email:
                        </label>
                        <br></br>
                        <input id="email" type="email" name="email" />
                        <br></br>
                        <label htmlFor="comments">
                            Comments:
                        </label>
                        <br></br>
                        <textarea id="comments" type="text" name="comments" />
                        <br></br>
                        <button id="submit" type="submit" name="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Contact
