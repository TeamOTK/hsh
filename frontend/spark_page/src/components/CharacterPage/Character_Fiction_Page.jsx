import CM from '../../images/CheongMyeong.png'
import './Character_Fiction_Page.css'

export default function CharacterFicion({handleClickCharacter}) {
	const datas = require('../../data/situation.json');
	return(
		<>
			<div className='FictionList'>
				{/* map 함수 이용해 아이템 추가 */}
				{datas.map((item) => (
					<div className='FictionItem'>
							<div className='FictionCharacter'>
								<img src={CM} className='FictionCharacterImg'/>
								<div className='CharacterDesc'>
									<div className='NameInfo'>{item.bot}</div>
									<div className='PlatformInfo'>네이버웹툰</div>
									<div className='WebtoonInfo'>{item.story}</div>
								</div>
							</div>
							<div className='SubFictionList'>
								<div className='SubFictionItem' onClick={() => handleClickCharacter(item.children[0].id)} key={item.children[0].id}>{item.children[0].sit_title}</div>
								<div className='SubFictionItem' onClick={() => handleClickCharacter(item.children[1].id)} key={item.children[1].id}>{item.children[1].sit_title}</div>
							</div>
					</div>)
				)}
				
			</div>
		</>
			
		
	)
}