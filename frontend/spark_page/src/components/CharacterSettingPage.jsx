import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsChevronLeft } from "react-icons/bs";
import Form from 'react-bootstrap/Form';

import './CharacterSettingPage.css'
import { useState } from 'react';

export default function CharacterSettingPage(){
	const navigate = useNavigate();

	const [imageSrc, setImageSrc] = useState('');

	const encodeFileToBase64 = (fileBlob) => {        
		const reader = new FileReader();
		reader.readAsDataURL(fileBlob);
		return new Promise((resolve) => {
			reader.onload = () => {
				setImageSrc(reader.result);
				resolve();
			};
		});
	};


	const onClickButton = () => {
		navigate('/warning');
	}

	const handleClickButton = () => {
		navigate('/community')
	}
	const handleClickNextButton = () => {
		navigate('/setting/situation')
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
				<div className='ScrollBackGround'>
					<div className='WarningLargeTextSet'>
						<h2 className='WarningPageLargeText'>캐릭터를 설정해주세요</h2>
					</div>
					<div className='SubWarning'>캐릭터는 사용자의 창작물입니다.</div>
					<div className='Settings'>
						<div className='SettingTopBox'>
							<div className='d-flex flex-column'>
								<div style={{fontWeight:'600'}}>캐릭터 설정이 어려운 분들은</div>
								<div style={{fontWeight:'600'}}>다른 사용자의 캐릭터를 선택해보세요</div>
							</div>
							<Button className='SettingTopBtn' onClick={handleClickButton}>찾아보기</Button>
						</div>
						<Form className='SettingBox'>
							<Form.Label className='Tag'>이름</Form.Label>
							<Form.Control className='inputBox' type='text'></Form.Control>
						</Form>
						<Form className='SettingBox'>
							<Form.Label className='Tag'>설정</Form.Label>
							<Form.Control className='inputBox' rows={3} as='textarea'></Form.Control>
						</Form>
						<Form className='SettingBox'>
							<Form.Label className='Tag'>말투</Form.Label>
							<Form.Control className='inputBox' rows={2} as='textarea'></Form.Control>
						</Form>
						<Form className='SettingBox'>
							<Form.Label className='Tag'>성격</Form.Label>
							<Form.Control className='inputBox' trows={2} as='textarea'></Form.Control>
						</Form>
						<div className='OpenBox'>
							<Form.Label className='Tag'>캐릭터 공개 여부</Form.Label>
							<Form className='radioContainer'>
								<Form.Group className='radioBox'>
									<Form.Check type='radio' name='open' label='공개' style={{marginRight:'10%'}} defaultChecked/>
									<Form.Check type='radio' name='open' label= '비공개' />
								</Form.Group>
							</Form>
						</div>
						<div className='OpenBox'>
							<Form.Label className='Tag'>캐릭터 사진</Form.Label>
							<div className='imgBox'>
								<input type='file' onChange={(e) => {
									encodeFileToBase64(e.target.files[0]);
								}} />
								{imageSrc && <img src={imageSrc} className='imgPreview'/>}
							</div>
						</div>
						<Button className='SettingButton' onClick={handleClickNextButton}>다음 단계로</Button>
					</div>
				</div>
				
			</div>
		</>
		
	)
}