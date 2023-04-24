import React from 'react';
import cl from 'classnames'

const MyButton = ({children, addExtraClass, onClick}) => {
	return (
		<button 
			className={cl("button", addExtraClass)}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default MyButton
