import React, { useState } from 'react';
import './form.css'; 

const Form = () => {
    const [selectedRadio, setselectedRadio] = useState("")
    const toogleClick =(e)=>{
        setselectedRadio(e.target.value)
    }
    console.log(selectedRadio);
    return (
        <>
            <form>
                <div className="form-container">
                    <div className="form-title">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="name-input">
                        <div className="first">
                            <label htmlFor="firstname">First Name *</label>
                            <input id='firstname' name='firstnameh' type="text" />
                        </div>
                        <div className="second">
                            <label htmlFor="lastname">Last Name *</label>
                            <input id='lastname' name='lastname' type="text" />
                        </div>
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email Address *</label>
                        <input id='email' name='email' type="email" />
                    </div>

                    <div className="query-type">
                        <p>Query Type</p>

                        <div className="wrap">
                            <div className={`general ${selectedRadio==="general" ? 'selected' :''}`}>
                                <input onChange={toogleClick} id='general' value="general" name='queryType' type="radio" />
                                <label htmlFor="general">General Enquiry</label>
                            </div>
                            <div className={`general ${selectedRadio==="support" ? 'selected' :''}`}>
                                <input onChange={toogleClick} id='support' value="support" name='queryType' type="radio" />
                                <label htmlFor="support">Support Request</label>
                            </div>
                        </div>
                    </div>

                    <div className="message">
                        <label>Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <div className="checkbox">
                    <input id="consent" type="checkbox" />
                    <label htmlFor="consent">I consent to being contacted by the team *</label>
                    </div>
                    <div className="submit-btn">
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Form;
