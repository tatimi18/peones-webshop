import React from 'react'

const MySelect = ({options, value, onChange}) => {
	return (
		<div className='select__wrapper'>
			<div className="select__title">Сортировать:</div>
			<select
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className={'select'}
			>
				{options.map(option => <option className='select__option' key={option.name} value={option.value}>{option.name}</option>)}
			</select>
    	</div>
	)
}

export default MySelect
