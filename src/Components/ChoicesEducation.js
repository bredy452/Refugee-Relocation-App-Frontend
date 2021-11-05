import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesEducation(props) {

		return (
			<>
				{props.selectedChoices.education.map((choice, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)	
				})}
			</>
		)
}




