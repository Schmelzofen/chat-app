import { useContext, useEffect, useState } from 'react';
import UserContext from "../store/contextProvider";

const Users = () => {
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(0);
    const userAuth = useContext(UserContext);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`api/users`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            const body = await result.json();
            setUser(body);
        }
        fetchData();
    }, [])

    return (
        <div className="usersContainer">
            <h1>Users (for testing functionalities)</h1>
            <div className="users">
                {user.map(elt => (
                    <div className="user" key={elt.id}>
                        <div className="userImage">
                            <img src={elt.image} alt="user" />
                        </div>
                        <div className="userName">
                            <h3>{elt.username}</h3>
                        </div>
                        <div className="userButtons">
                            <button onClick={() => setShow(1)}>send message</button>
                            <button onClick={() => setShow()}>add as friend</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;