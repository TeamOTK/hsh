import { useState, useEffect, React } from "react";

import CM from '../../images/CheongMyeong.png'
import './Character_Original_Page.css'

export default function CharacterOriginal({handleClickCharacter}) {
	const datas = require('../../data/original.json');

	return(
		<>
			<div className='OriginalList'>
				{/* map 함수 이용해 아이템 추가 */}
				{datas.map((item) => (
					<div className='OriginalItem' onClick={() => handleClickCharacter(item.id)} key={item.id}>
							<div className='OriginalCharacter'>
								<img src={require(`../../images/${item.img_name}.png`)} className='OriginalCharacterImg'/>
								<div className='OriginalCharacterDesc'>
									<div className='NameInfo'>{item.bot}</div>
									<div className='PlatformInfo'>네이버웹툰</div>
									<div className='WebtoonInfo'>{item.story}</div>
								</div>
							</div>
					</div>
				)
				)};
				
			</div>
		</>
			
		
	)
}