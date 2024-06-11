import { Icon } from "@iconify/react/dist/iconify.js";

const Input = () =>
{
    return (
        <div className="center input">
            <input className="input-text" type="text" placeholder="what do you want to talk?..." />
            <button className="center input-send">
                <Icon className="input-send-icon" icon="bxs:send" />
            </button>
        </div>
    )
}

export default Input;