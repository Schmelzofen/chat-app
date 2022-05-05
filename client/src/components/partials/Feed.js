import { useState, useEffect, useContext } from 'react';
import UserContext from '../store/contextProvider';

import { Link } from "react-router-dom";
import { useHttpClient } from '../hooks/http-hook';

const Feed = () => {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [feed, setFeed] = useState([]);
    const [message, setMessage] = useState("");
    const userAuth = useContext(UserContext);
    const parsedToken = JSON.parse(userAuth.token);

    useEffect(() => {
        const fetchFeed = async () => {
            const response = await fetch(`http://localhost:8000/api/social/feed`);
            const data = await response.json();
            setFeed(data);
        }
        fetchFeed();
    }, [])
    const handleSubmit = async (e) => {
        const newFeedMessage = {
            message: message,
            id: parsedToken.id,
            username: parsedToken.username,
        }
        e.preventDefault();
        const response = await sendRequest(
            `http://localhost:8000/api/social/feed`,
            "POST",
            JSON.stringify(newFeedMessage),
            { "Content-Type": "application/json" }
        );
        setMessage("");
        window.location.reload();
    }

    return (
        <div className="feedContainer">
            <h1></h1>
            <div className="feedMessagesContainer">
                {feed.length > 0 ? (
                    feed.map((message, index) => {
                        return (
                            <div className="feedMessage" key={index}>
                                <div className="feedMessageUsername">
                                    <Link className="feedMessageUsername" to={`/profile/${message.id}`}><h4>{message.username}:</h4></Link>
                                </div>
                                <div className="feedMessageText">
                                    <h5>{message.message}</h5>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="feedMessage">
                        <div className="feedMessageUsername">
                            No messages yet
                        </div>
                    </div>
                )}
            </div>
            <div className="feedSendMessage">
                <input type="text" placeholder="Write a message" value={message} onChange={(e) => setMessage(e.target.value)} />
                {message.length > 0 ? (
                    <button onClick={handleSubmit}>Send</button>
                ) : (
                    <button disabled>Send</button>
                )}
            </div>
        </div>
    );
}

export default Feed;
