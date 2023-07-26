import React from 'react'

export default function ResultYear(props) {
	return (
		<tr>
			<td>{props.year}.</td>
			<td>${props.savingsEndOfYear}</td>
			<td>${props.yearlyInterest}</td>
			<td>${props.totalInterest}</td>
			<td>${props.totalContribution}</td>
		</tr>
	)
}
