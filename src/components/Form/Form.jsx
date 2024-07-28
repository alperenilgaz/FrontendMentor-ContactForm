import React, { useState } from 'react';
import './form.css';
import Success from '../../../public/assets/images/icon-success-check.svg'
const Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        checkbox: false
    });
    const [formSubmit, setFormSubmit] = useState(null);
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(e.target);
        if (type === "radio") {
            setFormData(prevState => (
                {
                    ...prevState,
                    queryType: value
                }
            ));
        } else if (type === "checkbox") {
            setFormData(prevState => ({
                ...prevState,
                checkbox: checked
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors={}
        if(!formData.firstName) newErrors.firstName = " isim alanın doldurulması zorunludur * "
        if(!formData.lastName) newErrors.lastName = " soyisim alanının doldurulması zorunludur *"
        if(!formData.email) newErrors.email = "email alanın doldurulması zorunludur *"
        if(!formData.queryType) newErrors.queryType= "lütfen seçeneklerden birini seçin *"
        if(!formData.message) newErrors.message = "mesaj alanın doldurulması zorunludur *"
        if(!formData.checkbox) newErrors.checkbox = "göndermek için lütfen kutuyu işaretleyin *"

        if(Object.keys(newErrors).length>0){
            setErrors(newErrors)
        }else{
            setErrors({})
            setFormSubmit(formData)
            console.log("succes");
        }
    };



    return (
        <>
            <div  className={`success-message ${formSubmit ? 'active' : ''}`}>
                <div className="message-container">
                    <div className="title">
                        <img src={Success} alt="" />
                        <p>Message Sent</p>                    
                    </div>
                </div>
                <div className="desc">
                    <p>Thanks for compeiteing the form. We'll be in touch soon!</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="form-title">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="name-input">
                        <div className="first">
                            <label htmlFor="firstname">First Name *</label>
                            <input onChange={handleChange} id='firstname' value={formData.firstName} name='firstName' type="text" />
                            {errors.firstName  && <span className='error'>{errors.firstName}</span> }
                        </div>
                        <div className="second">
                            <label htmlFor="lastname">Last Name *</label>
                            <input onChange={handleChange} id='lastname' value={formData.lastName} name='lastName' type="text" />
                            {errors.lastName  && <span className='error'>{errors.lastName}</span> }
                        </div>
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email Address *</label>
                        <input value={formData.email} onChange={handleChange} id='email' name='email' type="email" />
                        {errors.email  && <span className='error'>{errors.email}</span> }
                    </div>

                    <div className="query-type">
                        <p>Query Type</p>

                        <div className="wrap">
                     
                            <div className={`general ${formData.queryType === "general" ? 'selected' : ''}`}>
                                <input checked={formData.queryType === "general"} onChange={handleChange} id='general' value="general" name='queryType' type="radio" />
                                <label htmlFor="general">General Enquiry</label>
                            </div>
                            <div className={`general ${formData.queryType === "support" ? 'selected' : ''}`}>
                                <input checked={formData.queryType === "support"} onChange={handleChange} id='support' value="support" name='queryType' type="radio" />
                                <label htmlFor="support">Support Request</label>
                                
                            </div>
                            
                        </div>
                        {errors.queryType  && <span className='error'>{errors.queryType}</span> }
                    </div>

                    <div className="message">
                        <label>Message</label>
                        <textarea onChange={handleChange} name="message" id="message" rows="6"></textarea>
                        {errors.message  && <span className='error'>{errors.message}</span> }
                    </div>
                    <div className="checkbox">
                        <input onChange={handleChange} id="consent" checked={formData.checkbox} type="checkbox" />
                        <label htmlFor="consent">I consent to being contacted by the team *</label>

                    </div>
                    {errors.checkbox  && <span className='error'>{errors.checkbox}</span> }
                    <div className="submit-btn">
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Form;
