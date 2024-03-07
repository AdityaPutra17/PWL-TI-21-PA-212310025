import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Form = () => {
    

    const [npm, setNpm] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);
    const [show, setShow] = useState(false);   

    function handleSubmit(e) {
        e.preventDefault();
        // validasi
        if (!npm || !firstName || !lastName || !birthdate) {
            alert('Semua field wajib diisi kecuali Middle Name');
            return;
        }

        //Validasi Numerik
        if (!/^\d{10}$/.test(npm)) {
            alert('NPM harus terdiri dari 10 digit numerik');
            return;
        }

        //hitung umur
        const dateofbirth = new Date(birthdate);
        const ageDate = new Date(Date.now() - dateofbirth.getTime());
        const countAge = Math.abs(ageDate.getUTCFullYear() - 1970);
        setAge(countAge);
        
        setShow(true)        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="npm" className="form-label">NPM</label>
                    <input type='number' value={npm} className="form-control" maxLength="10" id="npm" onChange={(e) => setNpm(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input className="form-control" value={firstName} id="firstname" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="middlename" className="form-label">Middle Name</label>
                    <input className="form-control" value={middleName} id="middlename" onChange={(e) => setMiddleName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input className="form-control" value={lastName} id="lastname" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Birthday</label>
                    <input type='date' className="form-control" value={birthdate} id="date" onChange={(e) => setBirthdate(e.target.value)} />
                </div>
                <Button type='submit' variant="primary">Submit</Button>
            </form>
            {/* Modal */}

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Form Biodata</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <p>NPM : {npm}</p>
                        <p>Name : {firstName} {middleName} {lastName}</p>
                        <p>Age : {age}</p>
                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
                    <Button variant="primary" onClick={() => setShow(false)}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
            {/* Modal */}
        </div>
    );
}

export default Form;
