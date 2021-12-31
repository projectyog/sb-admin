import React from 'react';

const UserListTable = (props) => {
    return (
        <div className="container">
  <div className="row">
    <div className="col-12">
		<table className="table table-image">
		  <thead>
		    <tr>
		      <th scope="col">Image</th>
		      <th scope="col">User Name</th>
              <th scope="col">Actions</th>
		    </tr>
		  </thead>
		  <tbody>
          { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, pic, name} = user;
                        return (
                            <tr key={id}>
                                <td className='img-fluid img-thumbnail'><img src={pic} style={{width:"100%" , height:"200px" , 
                                borderRadius:"50%"}} alt="sheep"/></td>
                                <td><h3>{name}</h3></td>
                                <td>
                                    <button className='buttonDesign' onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button className='buttonDesign' onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
		  </tbody>
		</table>   
    </div>
  </div>
</div>
        
    )
}

export default UserListTable;