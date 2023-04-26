import React from 'react';
import cl from 'classnames'

const MyButton = ({children, addExtraClass, onClick, disabled}) => {
	return (
		<button 
			className={cl("button", addExtraClass)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default MyButton
