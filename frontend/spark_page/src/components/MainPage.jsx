import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Pencil from '../images/pencil.jpg'

import './Pages.css'

export default function MainPage(){
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/character')
	}

	return(
		<div className='MainPageBackGround'>
			<div className='MainPageLargeTextSet'>
				<h1 className='MainPageLargeText'>Fiction</h1>
				<div className='TextBox'>
					<img src={Pencil} width={38} height={38} style={{marginTop:'2%'}}></img>
					<h1 className='MainPageLargeText'>Comes True!</h1>
				</div>
				
			</div>
			<div className='MainPageSmallTextSet'>
				<h2 className='MainPageSmallText'>좋아하는 웹툰 등장 인물과</h2>
				<h2 className='MainPageSmallText'>다양한 상황에서 대화해보세요!</h2>
			</div>
			<Button variant='primary' className='StartButton' onClick={handleClick}>등장 인물 찾아보기</Button>
		</div>
	)
}