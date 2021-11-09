import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesFood(props) {
console.log(props.selectedChoices.food)
		return (
			<>
				{props.selectedChoices.food.map((choice, j) => {
					return (
						<Grid.Column key={j}>
							<List key={choice}>
    							<List.Item>
    								{choice.replace('_', ' ')}
    							</List.Item>
  							</List>
  						</Grid.Column>
  					)
				})}
			</>
		)
}