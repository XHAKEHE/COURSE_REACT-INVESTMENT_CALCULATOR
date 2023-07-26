import React, { useState } from 'react'

function Form(props) {
	const [inputData, setInputData] = useState({})

	const resetHandler = () => {
		console.log('R E S E T')
	}

	const inputChangeHandler = e => {
		if (e.target.id === 'current-savings') {
			setInputData(inputData => ({ ...inputData, currentSavings: +e.target.value }))
			//
		} else if (e.target.id === 'yearly-contribution') {
			setInputData(inputData => ({ ...inputData, yearlyContribution: +e.target.value }))
			//
		} else if (e.target.id === 'expected-return') {
			setInputData(inputData => ({ ...inputData, expectedReturn: +e.target.value }))
			//
		} else if (e.target.id === 'duration') {
			setInputData(inputData => ({ ...inputData, duration: +e.target.value }))
		}
	}

	const submitHandler = e => {
		e.preventDefault()
		if (Object.keys(inputData).length === 4) {
			props.onSubmitInput(inputData)
			console.log('SUBMITTED')
		} else {
			console.log('NO DATA')
		}
	}
	return (
		<form className='form'>
			<div className='input-group'>
				<p>
					<label htmlFor='current-savings'>Current Savings ($)</label>
					<input onChange={inputChangeHandler} type='number' id='current-savings' />
				</p>
				<p>
					<label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
					<input onChange={inputChangeHandler} type='number' id='yearly-contribution' />
				</p>
			</div>
			<div className='input-group'>
				<p>
					<label htmlFor='expected-return'>Expected Interest (%, per year)</label>
					<input onChange={inputChangeHandler} type='number' id='expected-return' />
				</p>
				<p>
					<label htmlFor='duration'>Investment Duration (years)</label>
					<input onChange={inputChangeHandler} type='number' id='duration' />
				</p>
			</div>
			<p className='actions'>
				<button onClick={resetHandler} type='reset' className='buttonAlt'>
					Reset
				</button>
				<button onClick={submitHandler} type='submit' className='button'>
					Calculate
				</button>
			</p>
		</form>
	)
}

export default Form
