import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Uuid } from '../../Const/Methods';
import { addBirthday } from '../../Redux/birthdaysListSlice';
import { setSelectedBirthday } from '../../Redux/selectedBirthdaySlice';
import './AddBirthdayMenu.scss';

export default function AddBirthdayMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const dispatch = useDispatch();

    const handleOnSubmit = () => {
        dispatch(addBirthday({
            id: Uuid(),
            name: fullName,
            dob: dob,
            img: imgUrl
        }))
        setFullName("");
        setDob("");
        setImgUrl("");
        setIsOpen(false);

        dispatch(setSelectedBirthday(0));
    }

    const handleValidation = () => {
        return !fullName.length || !dob.length || !imgUrl.length;
    }

    return (
        <div className={isOpen ? "AddBirthdayMenu Open" : "AddBirthdayMenu Closed"}>
            <button onClick={() => { setIsOpen(!isOpen) }} className={isOpen ? "AddBirthdayMenu--ToggleBtn Open" : "AddBirthdayMenu--ToggleBtn Closed"}>
                <p>ADD B-DAY +</p>
            </button>
            <div className="AddBirthdayMenu--FormContainer">
                <div className="AddBirthdayMenu--FieldContainer">
                    <label>Full Name</label>
                    <input value={fullName} maxLength={30} onChange={(e) => { setFullName(e.target.value) }} type="text" placeholder='Enter full name' />
                    <span className="AddBirthdayMenu--LetterCounter">{fullName.length}/30</span>
                </div>
                <div className="AddBirthdayMenu--FieldContainer">
                    <label>Date of Birth</label>
                    <input value={dob} onChange={(e) => { setDob(e.target.value) }} type="date" />
                </div>
                <div className="AddBirthdayMenu--FieldContainer">
                    <label>Image URL</label>
                    <input value={imgUrl} onChange={(e) => { setImgUrl(e.target.value) }} type="text" placeholder='Enter image url' />
                </div>
                <button disabled={handleValidation()} onClick={handleOnSubmit} className="AddBirthdayMenu--SubmitBtn" >
                    <p>SUBMIT</p>
                </button>
            </div>
        </div>
    );
}
