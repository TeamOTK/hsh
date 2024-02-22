import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsChevronLeft } from "react-icons/bs";
import Form from 'react-bootstrap/Form';

import './CharacterSettingPage.css'
import { useState } from 'react';

export default function SituationSettingPage(){
	const navigate = useNavigate();

	const onClickButton = () => {
		navigate(-1);
	}

	const handleClickButton = () => {
		navigate('/page/chat/0')
	}

	const ClickExButton = () => {
		
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
				<div className='SettingBtnContainer'>
					<div className='WarningLargeTextSet'>
						<h2 className='WarningPageLargeText'>대화 상황을 설정해주세요</h2>
					</div>
					<div className='SubWarning'>캐릭터는 사용자의 창작물입니다.</div>
					<div className='Settings'>
						<Form className='SettingBox'>
							<div className='TagBox'>
								<Form.Label className='Tag'>상황</Form.Label>
								<Form.Label style={{textDecoration:'underline'}} onClick={ClickExButton}>예시 입력</Form.Label>
							</div>
							<Form.Control className='inputBox' rows={6} as='textarea'></Form.Control>
						</Form>
						<Form className='SettingBox'>
							<Form.Label className='Tag'>첫 대사</Form.Label>
							<Form.Control className='inputBox' rows={1} as='textarea'></Form.Control>
						</Form>
					</div>
				</div>
				<Button className='SettingButton' onClick={handleClickButton}>채팅 시작하기</Button>
			</div>
		</>
		
	)
}