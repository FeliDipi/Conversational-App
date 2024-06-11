import ChatBubbleSystem from "./ChatBubbleSystem.jsx";
import ChatBubbleUser from "./ChatBubbleUser.jsx";

const Chat = () =>
{
    return (
        <div className="chat">
            <ChatBubbleUser/>
            <ChatBubbleSystem/>
        </div>
    )
}

export default Chat;