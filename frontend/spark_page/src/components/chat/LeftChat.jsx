import './Chat.css'

import { useState } from 'react'

export default function Leftchat({name, content,imgName}) {
	// const [imgName,setImgName] = useState()
	// if(name == "전영중"){
	// 	setImgName("YeongJoong")
	// }
	return (
		<div className="AiChat">
			{imgName && <img src={require(`../../images/${imgName}.png`)} width={60}/>}
			<div className='AiChatBox'>
				<div className='AiName'>{name}</div>
				<div className='AiText'>{content}</div>
			</div>
		</div>
	)
}