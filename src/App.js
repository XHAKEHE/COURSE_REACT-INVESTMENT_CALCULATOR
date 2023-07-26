import React, { useState } from 'react'

import Form from './Form'
import Result from './Result'
import Header from './Header'

function App() {
	const [inputData, setInputData] = useState({})

	const getFormInputData = input => {
		setInputData(() => {
			return input
		})
	}

	return (
		<div>
			<Header></Header>
			<Form onSubmitInput={getFormInputData}></Form>
			<Result inputData={inputData}></Result>
		</div>
	)
}

export default App
