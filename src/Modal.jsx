import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext()
    const [value, setValue] = useState(0);
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get('name');
        console.log(name);

        const newUser = Object.fromEntries(formData);

        console.log(newUser);

        setValue(value + 1);

        e.currentTarget.reset();
    };

    return (
        <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
            <div className="modal-container">
                <h3>Make your tour search easy</h3>
                <button className="close-modal-btn" onClick={closeModal}><FaTimes /></button>
                <h6>Let an expert from our team contact you to help you customize and book perfect Andaman tour package for you.</h6>
                <div>
                    <form className='form' onSubmit={handleSubmit}>

                        {/* name */}
                        <div className='form-row'>
                            <label htmlFor='name' className='form-label'>
                                Name:
                            </label>
                            <input type='text' className='form-input' id='name' name='name' />
                        </div>
                        {/* email */}
                        <div className='form-row'>
                            <label htmlFor='email' className='form-label'>
                                Email:
                            </label>
                            <input type='email' className='form-input' id='email' name='email' />
                        </div>
                        {/* email */}
                        <div className='form-row'>
                            <label htmlFor='text' className='form-label'>
                                Contact No:
                            </label>
                            < input type='text' />
                        </div>

                        <button type='submit' className='btn btn-block'>
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal