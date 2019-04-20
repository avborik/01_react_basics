import React from 'react';
// import ReactDOM from 'react-dom';
const user = {
    name: 'Boris',
    lastname: 'Avdeev',
    age:28
}
const Header = () => {
    return <div>
        <div>{user.name}</div>
        <div>{user.lastname}</div> 
        <div>{user.age}</div>  
        
    </div>
}

export default Header;