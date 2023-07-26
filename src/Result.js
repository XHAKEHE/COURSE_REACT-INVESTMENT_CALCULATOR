import React, { useState } from 'react'
import ResultYear from './ResultYear'

function Result(props) {
	const calculateHandler = () => {
		const yearlyData = [] // per-year results

		let currentSavings = props.inputData.currentSavings
		const yearlyContribution = props.inputData.yearlyContribution
		const expectedReturn = props.inputData.expectedReturn / 100
		const duration = props.inputData.duration
		let totalInterest = 0
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn

			totalInterest = yearlyInterest + totalInterest
			currentSavings += yearlyInterest + yearlyContribution
			yearlyData.push({
				year: i + 1,
				savingsEndOfYear: Math.round(currentSavings * 100) / 100,
				yearlyInterest: Math.round(yearlyInterest * 100) / 100,
				yearlyContribution: Math.round(yearlyContribution * 100) / 100,
				totalInterest: Math.round(totalInterest * 100) / 100,
			})
		}
		return yearlyData
	}

	let resultsContent = (
		<tr>
			<td>No results yet...</td>
		</tr>
	)

	if (Object.keys(props.inputData).length === 4) {
		console.log('Generating results...')
		resultsContent = calculateHandler().map(column => (
			<ResultYear
				year={column.year}
				savingsEndOfYear={column.savingsEndOfYear}
				yearlyInterest={column.yearlyInterest}
				totalInterest={column.totalInterest}
				totalContribution={props.inputData.currentSavings + column.yearlyContribution * column.year}
			></ResultYear>
		))
	}

	return (
		<table className='result'>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>{resultsContent}</tbody>
		</table>
	)
}
export default Result
