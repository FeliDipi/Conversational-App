import { Icon } from "@iconify/react/dist/iconify.js"

const ChatBubbleUser = () =>
{
    return (
        <div className="center chat-bubble">
            <div className="chat-dot-0 user-dot"></div>
            <div className="chat-dot-1 user-dot"></div>
            <div className="center chat-content user-bg">
                <button className="center chat-audio">
                    <Icon className="chat-audio-icon user-color" icon="ant-design:sound-filled" />
                </button>
                <p className="chat-text user-color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quia ducimus amet aperiam quasi nulla veniam ipsa temporibus officiis eum mollitia qui adipisci blanditiis placeat, pariatur, commodi, ab quae. Fugit.</p>
            </div>
        </div>
    )
}

export default ChatBubbleUser;