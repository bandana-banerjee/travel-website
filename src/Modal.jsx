
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext()
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    // const [phoneNumber, setPhoneNumber] = useState('');
    // const handleChange = (e) => {
    //     const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    //     if (input.length <= 10) {
    //         setPhoneNumber(input);
    //     }
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const isEmpty = Object.values(formData).some((value) => value === '');
        if (isEmpty) {
            toast.error('please provide a value')
            return
        }
        else {
            emailjs
                .sendForm('service_oo0juvs', 'template_fwu54gs', form.current, {
                    publicKey: 'aQ-OFcZomZUF3SfJn',
                })
                .then(
                    () => {
                        toast.success('Form Submitted!');
                        setFormData({
                            user_name: '',
                            user_email: '',
                            message: ''
                        });
                    },
                    (error) => {
                        toast.error('Invalid Inputs !');
                        console.log('FAILED...', error.text);
                    },
                );
        };
    }


    return (

        <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
            <div className="modal-container">
                <h3 style={{ color: 'hsl(183.96694214876032, 57.34597156398104%, 41.372549019607845%)', fontStyle: 'italic', fontWeight: 'bold' }}>Make your tour search easy</h3>
                <button className="close-modal-btn" onClick={closeModal}><FaTimes /></button>
                <h6 style={{ fontStyle: 'italic' }}>Let an expert from our team contact you to help you customize and book perfect Andaman tour package for you.</h6>
                <div>
                    <form ref={form} className='form' onSubmit={sendEmail}>

                        {/* name */}
                        <div className='form-row'>
                            <label htmlFor='name' className='form-label'>
                                Name:
                            </label>
                            <input type='text' className='form-input' id='name' name="user_name" placeholder="Enter Your Name" onChange={handleChange} value={formData.user_name} />
                        </div>
                        {/* email */}
                        <div className='form-row'>
                            <label htmlFor='email' className='form-label'>
                                Email:
                            </label>
                            <input type='email' className='form-input' id='email' name='user_email' placeholder="Enter Email Address" onChange={handleChange} value={formData.user_email} />
                        </div>
                        {/* email */}
                        <div className='form-row'>
                            {/* <label htmlFor='text' className='form-label'>
                                Contact No:
                            </label>
                            < input type='text' className='form-input' id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter 10 digits" /> */}
                            <label className='form-label'>Message:</label>
                            <textarea name="message" className='form-input' placeholder="Type Your Query" onChange={handleChange} value={formData.message} />
                        </div>

                        <button type='submit' className='btn btn-block' value="Send">
                            submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer position='top-center' />
        </div>
    )
}

export default Modal