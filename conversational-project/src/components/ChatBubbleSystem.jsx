import { Icon } from "@iconify/react/dist/iconify.js"

const ChatBubbleSystem = () =>
{
    return (
        <div className="center chat-bubble">
            <div className="center chat-content system-bg">
                <p className="chat-text system-color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quia ducimus amet aperiam quasi nulla veniam ipsa temporibus officiis eum mollitia qui adipisci blanditiis placeat, pariatur, commodi, ab quae. Fugit.</p>
                <button className="center chat-audio">
                    <Icon className="chat-audio-icon system-color" icon="ant-design:sound-filled" />
                </button>
            </div>
            <div className="chat-dot-1 system-dot"></div>
            <div className="chat-dot-0 system-dot"></div>
        </div>
    )
}

export default ChatBubbleSystem;