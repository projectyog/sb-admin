import React, {useState} from 'react';

const AddUser = (props) => {

    const initUser = {id: null, pic: '', name: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.pic && user.name) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form className='formDesign'>
            <label>Image</label>
            <input className="u-full-width" type="text" value={user.pic} name="pic" onChange={handleChange} />
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUser;