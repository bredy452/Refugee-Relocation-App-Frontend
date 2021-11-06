import React from 'react'
import {List, Grid} from 'semantic-ui-react'

export default function ChoicesCommunity(props) {

		return (
			<>
				{props.selectedChoices.religion !== undefined && 
					<Grid.Column>
						<List>
    						<List.Item>
    							<h5>Religion:</h5>
    							{props.selectedChoices.religion.replace('_', ' ')}
    						</List.Item>
  						</List>
  					</Grid.Column>
  				}

  				{props.selectedChoices.language !== "" && 
  					<Grid.Column>
						<List>
    						<List.Item>
    							<h5>Language:</h5>
    							{props.selectedChoices.language.replace('_', ' ')}
    						</List.Item>
  						</List>
  					</Grid.Column>
  				}

  				{props.selectedChoices.countryOfOrigin !== "" &&
  					<Grid.Column>
						<List>
    						<List.Item>
    							<h5>Country of Origin:</h5>
    							{props.selectedChoices.countryOfOrigin.replace('_', ' ')}
    						</List.Item>
  						</List>
  					</Grid.Column>
  				}

				{/*{props.selectedChoices.religion.map((choice, i, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)		
				})}
				{props.selectedChoices.language.map((choice, i, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)		
				})}
				{props.selectedChoices.countryOfOrigin.map((choice, i, f) => {
					return (
						<Grid.Column key={f}>
							<List key={choice}>
    							<List.Item>{choice}</List.Item>
  							</List>
  						</Grid.Column>
  					)		
				})}*/}
			</>
		)
}