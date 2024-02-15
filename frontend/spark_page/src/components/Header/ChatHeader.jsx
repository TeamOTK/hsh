import './ChatHeader.css'

export default function ChatHeader(props){

	return(
		<>
			<div className='ChatHeader'>
				{/* 이름 이후 전달 받아서 출력하는 것으로 수정 예정 */}
				<h2 className="ChatHeaderText">{props.content}</h2>
				<div style={{width:'25px'}}></div>
			</div>
		</>
		
	)
}