import './Chat.css'
import CM from '../images/CM.png'
export default function Leftchat({name, content}) {
	return (
		<div className="AiChat">
			<img src={CM} width={60}/>
			<div className='AiChatBox'>
				<div className='AiName'>{name}</div>
				<div className='AiText'>{content}</div>
			</div>
		</div>
	)
}