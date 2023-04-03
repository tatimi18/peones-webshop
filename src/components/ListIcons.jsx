import React from 'react';
import iconsContacts from '../data/contacts-icons.json'

const ListIcons = ({className}) => {

	const ListIcons = iconsContacts.map(item => 
	<div key={item.href} className="form-section__icon-border">
		<a href={item.href} className="form-section__link">
			<img src={item.srcImg} alt={item.altImg} className="form-section__icon"/>
		</a>
	</div>)

	return (
		<div className={className}>
			{ListIcons}
		</div>
	)
}

export default ListIcons
