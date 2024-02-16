import { useNavigate } from 'react-router-dom';
import { useState  } from 'react';

import '../Pages.css'

import SwitchComponent from '../Switch';
import { BsSearch } from "react-icons/bs";
import CharacterFicion from './Character_Fiction_Page';
import CharacterOriginal from './Character_Original_Page';


export default function CharacterPage(){
	const [isOn, setisOn] = useState(false);
	const navigate = useNavigate();

	const handleClickSearch= () => {
		navigate('/page/search')
	}

	const handleClickCharacter = (id) => {
		console.log(id)
		navigate(`/page/chat/${id}`)
	}

	return(
		<div className='MainPageBackGround'>
			<div className='CharacterHeader'>
				<SwitchComponent isOn = {isOn} setisOn={setisOn}/>
				{/* <BsSearch size={30} style={{marginRight:'3%',fontWeight:'bold'}} onClick={handleClickSearch}/> */}
			</div>
			<div className='CharacterLargeTextSet'>
				<h2 className='CharacterPageLargeText'>웹툰 등장 인물과 대화해보세요!</h2>
			</div>
			{isOn === true ? <CharacterFicion handleClickCharacter={handleClickCharacter}/> :  <CharacterOriginal handleClickCharacter={handleClickCharacter}/>}
			
		</div>
	)
}