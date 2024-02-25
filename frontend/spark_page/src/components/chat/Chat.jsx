import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';


import CM from '../../images/CheongMyeong.png'
import { BsCursorFill } from "react-icons/bs";
import './Chat.css';
import { BsChevronLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import SubHeader from '../Header/SubHeader';
import ChatHeader from '../Header/ChatHeader';
import Rightchat from './RightChat';
import Leftchat from './LeftChat';

export default function Chat(){
	const navigate = useNavigate();
	const location = useLocation();
	
	const [chatId, setChatId] = useState(0)

	const userId = location.state.userId;

	const characterId = location.state.characterId;
	const situationId = location.state.situationId;
	const name = location.state.character_name;
	const imgName = location.state.imgName;
	const firstConv = location.state.firstConv;

	const [user, setUser] = useState("user")
	const [chats, setChats] = useState([{ name: name, content: firstConv }]);
	const [content,setContent] = useState('');

	const sendChat = async () => {
		setChats(currentChats => [...currentChats, { key: Date.now(), name: user, content }]);
		setContent('');

		const res = await axios.post(`http://13.209.167.220/chats/response`, {
			"user_id": userId,
			"character_id": characterId,
			"situation_id": situationId,
			"user_chat": content
		});
		// 답장
		setChats(currentChats => [...currentChats, { key: Date.now(), name: name, content: res.data.chat.response }]);
	}

	const handleOnKeyPress = (e) => {
		if (e.nativeEvent.isComposing) return;
		if (e.key === 'Enter') {
			sendChat(); // Enter 입력이 되면 클릭 이벤트 실행
		}
	};

	const onClickButton = () => {
		navigate('/setting/situation', {state: {userId: userId, characterId: characterId, situationId: situationId, character_name: name}});
	}
	const scrollRef = useRef()

	useEffect(() => {
		scrollToBottom();
	}, [chats]);

	const scrollToBottom = () => {
			if (scrollRef.current) {
					scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
			}
	};
	return(
		<>
			<div className='ChattingHeader'>
				<BsChevronLeft size={25} onClick={onClickButton}/>
				<h2 className="text">{name}</h2>
				{/* <BsSearch size={30} style={{marginRight:'3%',fontWeight:'bold'}} onClick={handleClickSearch}/> */}
				<div></div>
			</div>
			<ChatHeader/>
			<div className='ChatContainer'>
				<div className="ChatLog" ref={scrollRef}>
					{chats && chats.map((chat, index) => (
						chat.name === user ?
						<Rightchat key={index} name={chat.name} content={chat.content}/> :
						<Leftchat key={index} name={chat.name} content={chat.content} imgName={imgName}/>
					))}
				</div>
			</div>
			
			<div className='d-flex justify-content-center' style={{height:'6%', marginTop:'4%'}}>
				<div className="InputBox">
					<input type='text'className='InputBoxText' placeholder='메세지를 입력하세요' value={content} onChange={e => setContent(e.target.value)} onKeyDown={handleOnKeyPress}></input>
					<div onClick={sendChat} className='InputBtn'>
						<BsCursorFill size={24} style={{color:'black'}} />
					</div>
				</div>
			</div>
			
		</>
	)
}