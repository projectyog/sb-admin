import React, {useState, useEffect} from 'react';

const EditUser = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.pic && user.name) props.updateUser(user);
    }

    return (
        <form className="formDesign">
            <label>Image</label>
            <input className="u-full-width" type="text" value={user.pic} name="pic" onChange={handleChange} />
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUser;