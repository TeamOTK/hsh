import { useNavigate } from 'react-router-dom';
import { useState  } from 'react';

import Button from 'react-bootstrap/esm/Button';
import './CharacterCommunity.css'
import { BsChevronLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Bam from '../images/Bam.png'


export default function CharacterCommunity(){
	const navigate = useNavigate();

	const onClickButton = () => {
		navigate('/setting/character');
	}

	const onClickItem = () => {
		navigate('/setting/character')
	}

	return(
		<>
		<div className='WarningHeader'>
				<BsChevronLeft size={25} onClick={onClickButton}/>
				<h2 className="text"></h2>
				{/* <BsSearch size={30} style={{marginRight:'3%',fontWeight:'bold'}} onClick={handleClickSearch}/> */}
				<div></div>
			</div>
		<div className='SettingPageBackGround'>
			<div className='WarningLargeTextSet'>
				<h2 className='WarningPageLargeText'>다른 사용자의 캐릭터</h2>
			</div>
			<div className='SubWarning'>캐릭터는 사용자의 창작물입니다.</div>
			<div className='SearchContainer'>
				<BsSearch size={24}></BsSearch> 
				<input className='CommunitySearch'></input>
			</div>
			<div className='CharacterSetList'>
				<div className='CharacterSetItem'>
					<img src={Bam} className='CommunityItemImg'/>
					<div className='CommunityItemInfo'>
						<div className='CommunityItemTopBox'>
							<div style={{fontWeight:"bold", fontSize:"140%", marginRight:'-24%'}}>청명</div>
							<div style={{fontSize:'85%'}}>누적 사용자 30</div>
							<div className='CommunityItemBtn' onClick={onClickItem}>사용하기</div>
						</div>
						<div className='ItemDesc'>여기에 설명이 들어감여기에 설명이 들어감여기에 설명이 들어감</div>
					</div>
				</div>
				<div className='CharacterSetItem'>
					<img src={Bam} className='CommunityItemImg'/>
					<div className='CommunityItemInfo'>
						<div className='CommunityItemTopBox'>
							<div style={{fontWeight:"bold", fontSize:"140%", marginRight:'-24%'}}>청명</div>
							<div style={{fontSize:'85%'}}>누적 사용자 30</div>
							<div className='CommunityItemBtn' onClick={onClickItem}>사용하기</div>
						</div>
						<div className='ItemDesc'>여기에 설명이 들어감여기에 설명이 들어감여기에 설명이 들어감</div>
					</div>
				</div>
				<div className='CharacterSetItem'>
					<img src={Bam} className='CommunityItemImg'/>
					<div className='CommunityItemInfo'>
						<div className='CommunityItemTopBox'>
							<div style={{fontWeight:"bold", fontSize:"140%", marginRight:'-24%'}}>청명</div>
							<div style={{fontSize:'85%'}}>누적 사용자 30</div>
							<div className='CommunityItemBtn' onClick={onClickItem}>사용하기</div>
						</div>
						<div className='ItemDesc'>여기에 설명이 들어감여기에 설명이 들어감여기에 설명이 들어감</div>
					</div>
				</div>
				
			</div>
		</div>
		</>
		
	)
}