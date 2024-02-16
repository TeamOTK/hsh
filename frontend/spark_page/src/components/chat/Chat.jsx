import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios'

import CM from '../../images/CheongMyeong.png'
import { BsCursorFill } from "react-icons/bs";
import './Chat.css'
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
	const [situationId,setSituationId] = useState(0)
	
	const datas = require('../../data/original.json');
	const situationdatas = require('../../data/situation.json');

	const [story, setStory] = useState();
	const [situation, setSituation] = useState();
	const [bot, setBot] = useState();
	const [user, setUser] = useState();
	const [firstChat, setFirstChat] = useState();
	const [content, setContent] = useState('');
	const [chats, setChats] = useState();
	const [imgName,setimgName] = useState();

	const originalSet = () => {
		setChatId(location.pathname.split('/')[3])
		setStory(datas.find(data => data.id == chatId)?.story)
		setSituation(datas.find(data => data.id == chatId)?.sit_title)
		setBot(datas.find(data => data.id == chatId)?.bot)
		setUser(datas.find(data => data.id == chatId)?.user)
		setimgName(datas.find(data => data.id == chatId)?.img_name)
		setFirstChat(datas.find(data => data.id == chatId)?.sit_line)
		setChats([{ name: bot, content: firstChat }])
	}
	const FictionSet = () => {
		setStory(situationdatas.find(data => data.id == situationId || data.id == chatId)?.story)
		setSituation(situationdatas.find(data => data.id == situationId)?.children[chatId%2].sit_title)
		setBot(situationdatas.find(data => data.id == situationId)?.bot)
		setUser(situationdatas.find(data => data.id == situationId)?.children[chatId%2].user)
		setimgName(situationdatas.find(data => data.id == situationId)?.img_name)
		setFirstChat(situationdatas.find(data => data.id == situationId)?.children[chatId%2].sit_line)
		setChats([{ name: bot, content: firstChat }])
	}

	useEffect(() => {
		
		if(chatId < 10){
			originalSet()
		}
		else{
			if(location.pathname.split('/')[3] % 2 == 0){
				setChatId(location.pathname.split('/')[3])
				setSituationId(location.pathname.split('/')[3])
			}
			else{
				setSituationId(location.pathname.split('/')[3]-1)
				setChatId(location.pathname.split('/')[3])
			}
			FictionSet()
		}
	}, [firstChat])
	

	
	

	const sendChat = async () => {
		setChats(currentChats => [...currentChats, { key: Date.now(), name: user, content }]);
		setContent('');
		const res = await axios.post(`http://43.203.207.13/api/chat/${chatId}`, {
				"chat": content
		});
		// 답장
		setChats(currentChats => [...currentChats, { key: Date.now(), name: bot, content: res.data.data }]);
	}

	const handleOnKeyPress = (e) => {
		if (e.nativeEvent.isComposing) return;
		if (e.key === 'Enter') {
			sendChat(); // Enter 입력이 되면 클릭 이벤트 실행
		}
	};

	const handleClickSearch= () => {
		navigate('/page/search')
	}

	const onClickButton = () => {
		navigate(-1);
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
				<h2 className="text">{bot}</h2>
				<BsSearch size={30} style={{marginRight:'3%',fontWeight:'bold'}} onClick={handleClickSearch}/>
			</div>
			<ChatHeader content={situation}/>
			<div className='ChatContainer'>
				<div className="ChatLog" ref={scrollRef}>
					{chats && chats.map((chat, index) => (
						chat.name === user ?
						<Rightchat key={index} name={chat.name} content={chat.content} /> :
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