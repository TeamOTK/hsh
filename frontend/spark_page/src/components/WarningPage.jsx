import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BsChevronLeft } from "react-icons/bs";

import './WarningPage.css'

export default function WarningPage(){
	const navigate = useNavigate();

	const onClickButton = () => {
		navigate(-1);
	}

	const handleClick = () => {
		navigate('/setting/character')
	}

	return(
		<div className='MainPageBackGround'>
			<div className='WarningHeader'>
				<BsChevronLeft size={25} onClick={onClickButton}/>
				<h2 className="text"></h2>
				{/* <BsSearch size={30} style={{marginRight:'3%',fontWeight:'bold'}} onClick={handleClickSearch}/> */}
				<div></div>
			</div>
			<div className='WarningBtnContainer'>
				<div className='WarningLargeTextSet'>
					<h1 className='WarningPageLargeText'>주의 사항</h1>
				</div>
			</div>
			<Button variant='primary' className='WarningButton' onClick={handleClick}>주의사항을 확인했습니다.</Button>
		</div>
	)
}