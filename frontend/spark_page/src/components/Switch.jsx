import './Switch.css'

export default function SwitchComponent({isOn, setisOn}){

	const toggleHandler = () => {
		// isOn의 상태를 변경하는 메소드를 구현
		setisOn(!isOn)
	};
	
	return (
    <>
      <div className='ToggleContainer' onClick={toggleHandler}>
				<div className='ToggleBox'>
					<div className={`toggle-container ${isOn ? "toggle--checked" : null}`}/>
					{isOn === false ? <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}>원작</div> : <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}>상황</div>}
				</div>
      </div>
      
    </>
  );
}

