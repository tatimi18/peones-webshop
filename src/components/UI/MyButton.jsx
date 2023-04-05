import React from 'react';
import cl from 'classnames'

const MyButton = ({children, addExtraClass}) => {
	return (
		<button className={cl("button", addExtraClass)}>
			{children}
		</button>
	)
}

export default MyButton
