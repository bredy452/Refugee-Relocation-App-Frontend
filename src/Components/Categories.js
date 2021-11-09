import React, {Component} from "react"
import { Link } from "react-router-dom"
import ChoicesEducation from "./ChoicesEducation"
import ChoicesCommunity from "./ChoicesCommunity"
import ChoicesTransportation from "./ChoicesTransportation"
import ChoicesHousing from "./ChoicesHousing"
import ChoicesSafetyAndResources from "./ChoicesSafetyAndResources"
import ChoicesFood from "./ChoicesFood"

import {Button, Popup, Form, Dropdown, Radio, Card} from "semantic-ui-react"
// import SliderView from "semantic-ui-react-slider"

// import USWDS from "../node_modules/uswds/src/js/components"
let languages = [
	{
		text: "Mandarin",
		id: "mandarin"
	},
	{
		text: "Spanish",
		id: "spanish"
	}, 
	{
		text: "English",
		id: "english"
	}, 
	{
		text: "Hindi",
		id: "hindi"
	},
	{
		text: "Arabic",
		id: "arabic"
	},
	{
		text: "Portuguese",
		id: "portuguese"
	}, 
	{
		text: "Bengali",
		id: "bengali"
	}, 
	{
		text: "Russian",
		id: "russian"
	}, 
	{
		text: "Japanese",
		id: "japanese"
	}, 
	{
		text: "Punjabi",
		id: "punjabi"
	},
	{
		text: "German",
		id: "German"
	}, 
	{
		text: "Malay",
		id: "malay"
	},
	{
		text: "Telugu",
		id: "telugu"
	}, 
	{
		text: "Vietnamese",
		id: "vietnamese"
	}, 
	{
		text: "Korean",
		id: "korean"
	}, 
	{
		text: "French",
		id: "french"
	}, 
	{
		text: "Marathi",
		id: "marathi"
	}, 
	{
		text: "Tamil",
		id: "tamil"
	}, 
	{
		text: "Urdu",
		id: "urdu"
	}, 
	{
		text: "Turkish",
		id: "turkish" 
	}, 
	{
		text: "Italian",
		id: "italian"
	},
	{
		text: "Cantonese",
		id: "cantonese"
	}, 
	{
		text: "Thai",
		id: "thai"
	}, 
	{
		text: "Gujarati",
		id: "gujarati"
	},  
	{
		text: "Persian",
		id: "persian"
	}, 
	{
		text: "Polish",
		id: "polish"
	}, 
	{
		text: "Pashto",
		id: "pashto"
	}, 
	{
		text: "Kannada",
		id: "kannada"
	}, 
	{
		text: "Hunnanese",
		id: "hunnanese"
	}, 
	{
		text: "Malayalam",
		id: "malayalam"
	}, 
	{
		text: "Sundanese",
		id: "sundanese"
	}, 
	{
		text: "Hausa",
		id: "hausa"
	}, 
	{
		text: "Burmese",
		id: "burmese"
	}, 
	{
		text: "Hakka",
		id: "hakka"
	}, 
	{
		text: "Ukrainian",
		id: "ukrainian"
	}, 
	{
		text: "Bhojpuri",
		id: "bhojpuri"
	}, 
	{
		text: "Tagalog",
		id: "tagalog"
	}, 
	{
		text: "Yoruba",
		id: "yoruba"
	},
	{
		text: "Amharic",
		id: "amharic"
	}, 
	{
		text: "Fula",
		id: "fula"
	}, 
	{
		text: "Romanian",
		id: "romanian"
	}, 
	{
		text: "Oromo",
		id: "oromo"
	}, 
	{
		text: "Igbo",
		id: "igbo"
	}, 
	{
		text: "Azerbaijani",
		id: "azerbaijani"
	}, 
	{
		text: "Awadhi",
		id: "awadhi"
	},  
	{
		text: "Dutch",
		id: "dutch"
	},
	{
		text: "Kurdish",
		id: "kurdish"
	}, 
	{
		text: "Malagasy",
		id: "malagasy"
	}, 
	{
		text: "Saraiki",
		id: "saraiki"
	}, 
	{
		text: "Nepali",
		id: "nepali"
	},  
	{
		text: "Sinhalese",
		id: "sinhalese"
	}, 
	{
		text: "Chittagonian",
		id: "chittagonian"
	}, 
	{
		text: "Zhuang",
		id: "zhuang" 
	}, 
	{
		text: "Khmer",
		id: "khmer"  
	}, 
	{
		text: "Turkmen",
		id: "turkmen" 
	}, 
	{
		text: "Assamese",
		id: "assamese" 
	}, 
	{
		text: "Madurese",
		id: "Madurese"  
	}, 
	{
		text: "Somali",
		id: "somali"  
	}, 
	{
		text: "Marwari",
		id: "marwari" 
	}, 
	{
		text: "Magahi",
		id: "magahi"  
	}, 
	{
		text: "Haryanvi",
		id: "haryanvi"  
	}, 
	{
		text: "Hungarian",
		id: "hungarian"  
	}, 
	{
		text: "Chhattisgarhi",
		id: "chhattisgarhi"  
	}, 
	{
		text: "Greek",
		id: "greek"  
	},
	{
		text: "Chewa",
		id: "chewa" 
	},
	{
		text: "Deccan",
		id: "deccan"  
	},
	{
		text: "Akan",
		id: "akan"  
	},
	{
		text: "Kazakh",
		id: "kazakh"  
	},
	{
		text: "Sylheti",
		id: "sylheti" 
	}, 
	{
		text: "Zulu",
		id: "zulu" 
	}, 
	{
		text: "Czech",
		id: "czech"  
	},
	{
		text: "Kinyarwanda",
		id: "kinyarwanda"  
	}, 
	{
		text: "Dhundhari",
		id: "dhundhari" 
	},  
	{
		text: "Kirundi",
		id: "kirundi"  
	}, 
	{
		text: "Swedish",
		id: "swedish"  
	}, 
	{
		text: "Hmong",
		id: "hmong"  
	},
	{
		text: "Shona",
		id: "shona"  
	}, 
	{
		text: "Uyghur",
		id: "uyghur"  
	}, 
	{
		text: "Hiligaynon",
		id: "hiligaynon"  
	}, 
	{
		text: "Mossi",
		id: "mossi"  
	}, 
	{
		text: "Xhosa",
		id: "xhosa"  
	} 
]

const religions = [
	{
		text: "Buddhism",
		id: "buddhism"
	},
	{
		text: "Christianity",
		id: "christianity"
	},
	{
		text: "Hinduism",
		id: "hinduism"
	},
	{
		text: "Islam",
		id: "islam"
	},
	{
		text: "Judaism",
		id: "judaism"
	},
	{
		text: "Nonreligious",
		id: "nonreligious"
	}
]

const countryOfOrigin = [
  { text: "Afghanistan", id: "afghanistan" },
  { text: "Aland Islands", id: "aland_islands" },
  { text: "Albania", id: "albania" },
  { text: "Algeria", id: "algeria" },
  { text: "American Samoa", id: "american_samoa" },
  { text: "Andorra", id: "andorra" },
  { text: "Angola", id: "angola" },
  { text: "Anguilla", id: "anguilla" },
  { text: "Antigua", id: "antigua" },
  { text: "Argentina", id: "argentina" },
  { text: "Armenia", id: "armenia" },
  { text: "Aruba", id: "aruba" },
  { text: "Australia", id: "australia" },
  { text: "Austria", id: "austria" },
  { text: "Azerbaijan", id: "azerbaijan" },
  { text: "Bahamas", id: "bahamas" },
  { text: "Bahrain", id: "bahrain" },
  { text: "Bangladesh", id: "bangladesh" },
  { text: "Barbados", id: "barbados" },
  { text: "Belarus", id: "belarus" },
  { text: "Belgium", id: "belgium" },
  { text: "Belize", id: "belize" },
  { text: "Benin", id: "benin" },
  { text: "Bermuda", id: "bermuda" },
  { text: "Bhutan", id: "bhutan" },
  { text: "Bolivia", id: "bolivia" },
  { text: "Bosnia", id: "bosnia" },
  { text: "Botswana", id: "botswana" },
  { text: "Bouvet Island", id: "bouvet_island" },
  { text: "Brazil", id: "brazil" },
  { text: "British Virgin Islands", id: "british_virgin_islands" },
  { text: "Brunei", id: "brunei" },
  { text: "Bulgaria", id: "bulgaria" },
  { text: "Burkina Faso", id: "burkina_faso" },
  { text: "Burma", id: "burma"},
  { text: "Burundi", id: "burundi" },
  { text: "Caicos Islands", id: "caicos_islands" },
  { text: "Cambodia", id: "cambodia" },
  { text: "Cameroon", id: "cameroon" },
  { text: "Canada", id: "canada" },
  { text: "Cape Verde", id: "cape_verde" },
  { text: "Cayman Islands", id: "cayman_islands" },
  { text: "Central African Republic", id: "central_african_republic" },
  { text: "Chad", id: "chad" },
  { text: "Chile", id: "chile" },
  { text: "China", id: "china" },
  { text: "Christmas Island", id: "christmas_island" },
  { text: "Cocos Islands", id: "cocos_islands" },
  { text: "Colombia", id: "colombia" },
  { text: "Comoros", id: "comoros" },
  { text: "Congo", id: "congo" },
  { text: "Congo Brazzaville", id: "congo_brazzaville" },
  { text: "Cook Islands", id: "cook_islands" },
  { text: "Costa Rica", id: "costa_rica" },
  { text: "Cote Divoire", id: "cote_divoire" },
  { text: "Croatia", id: "croatia" },
  { text: "Cuba", id: "cuba" },
  { text: "Cyprus", id: "cyprus" },
  { text: "Czech Republic", id: "czech_republic" },
  { text: "Denmark", id: "denmark" },
  { text: "Djibouti", id: "djibouti" },
  { text: "Dominica", id: "dominica" },
  { text: "Dominican Republic", id: "dominican_republic" },
  { text: "Ecuador", id: "ecuador" },
  { text: "Egypt", id: "egypt" },
  { text: "El Salvador", id: "el_salvador" },
  { text: "England", id: "england" },
  { text: "Equatorial Guinea", id: "equatorial_guinea" },
  { text: "Eritrea", id: "eritrea" },
  { text: "Estonia", id: "estonia" },
  { text: "Ethiopia", id: "ethiopia" },
  { text: "Europeanunion", id: "europeanunion" },
  { text: "Falkland Islands", id: "falkland_islands" },
  { text: "Faroe Islands", id: "faroe_islands" },
  { text: "Fiji", id: "fiji" },
  { text: "Finland", id: "finland" },
  { text: "France", id: "france" },
  { text: "French Guiana", id: "french_guiana" },
  { text: "French Polynesia", id: "french_polynesia" },
  { text: "French Territories", id: "french_territories" },
  { text: "Gabon", id: "gabon" },
  { text: "Gambia", id: "gambia" },
  { text: "Georgia", id: "georgia" },
  { text: "Germany", id: "germany" },
  { text: "Ghana", id: "ghana" },
  { text: "Gibraltar", id: "gibraltar" },
  { text: "Greece", id: "greece" },
  { text: "Greenland", id: "greenland" },
  { text: "Grenada", id: "grenada" },
  { text: "Guadeloupe", id: "guadeloupe" },
  { text: "Guam", id: "guam" },
  { text: "Guatemala", id: "guatemala" },
  { text: "Guinea", id: "guinea" },
  { text: "Guinea-Bissau", id: "guinea_bissau" },
  { text: "Guyana", id: "guyana" },
  { text: "Haiti", id: "haiti" },
  { text: "Heard Island", id: "heard_island" },
  { text: "Honduras", id: "honduras" },
  { text: "Hong Kong", id: "hong Kong" },
  { text: "Hungary", id: "hungary" },
  { text: "Iceland", id: "iceland" },
  { text: "India", id: "india" },
  { text: "Indian Ocean Territory", id: "indian_ocean_territoryo" },
  { text: "Indonesia", id: "indonesia" },
  { text: "Iran", id: "iran" },
  { text: "Iraq", id: "iraq" },
  { text: "Ireland", id: "ireland" },
  { text: "Israel", id: "israel" },
  { text: "Italy", id: "italy" },
  { text: "Jamaica", id: "jamaica" },
  { text: "Jan Mayen", id: "jan_mayen" },
  { text: "Japan", id: "japan" },
  { text: "Jordan", id: "jordan" },
  { text: "Kazakhstan", id: "kazakhstan" },
  { text: "Kenya", id: "kenya" },
  { text: "Kiribati", id: "kiribati" },
  { text: "Kuwait", id: "kuwait" },
  { text: "Kyrgyzstan", id: "kyrgyzstan" },
  { text: "Laos", id: "laos" },
  { text: "Latvia", id: "latvia" },
  { text: "Lebanon", id: "lebanon" },
  { text: "Lesotho", id: "lesotho" },
  { text: "Liberia", id: "liberia" },
  { text: "Libya", id: "libya" },
  { text: "Liechtenstein", id: "liechtenstein" },
  { text: "Lithuania", id: "lithuania" },
  { text: "Luxembourg", id: "luxembourg" },
  { text: "Macau", id: "macau" },
  { text: "Macedonia", id: "macedonia" },
  { text: "Madagascar", id: "madagascar" },
  { text: "Malawi", id: "malawi" },
  { text: "Malaysia", id: "malaysia" },
  { text: "Maldives", id: "maldives" },
  { text: "Mali", id: "mali" },
  { text: "Malta", id: "malta" },
  { text: "Marshall Islands", id: "marshall_islands" },
  { text: "Martinique", id: "martinique" },
  { text: "Mauritania", id: "mauritania" },
  { text: "Mauritius", id: "mauritius" },
  { text: "Mayotte", id: "mayotte" },
  { text: "Mexico", id: "mexico" },
  { text: "Micronesia", id: "micronesia" },
  { text: "Moldova", id: "moldova" },
  { text: "Monaco", id: "monaco" },
  { text: "Mongolia", id: "mongolia" },
  { text: "Montenegro", id: "montenegro" },
  { text: "Montserrat", id: "montserrat" },
  { text: "Morocco", id: "morocco" },
  { text: "Mozambique", id: "mozambique" },
  { text: "Namibia", id: "namibia" },
  { text: "Nauru", id: "nauru" },
  { text: "Nepal", id: "nepal" },
  { text: "Netherlands", id: "netherlands" },
  { text: "Netherlandsantilles", id: "netherlandsantilles" },
  { text: "New Caledonia", id: "new_caledonia" },
  { text: "New Guinea", id: "new_guinea" },
  { text: "New Zealand", id: "new_zealand" },
  { text: "Nicaragua", id: "nicaragua" },
  { text: "Niger", id: "niger" },
  { text: "Nigeria", id: "nigeria" },
  { text: "Niue", id: "niue" },
  { text: "Norfolk Island", id: "norfolk_island" },
  { text: "North Korea", id: "north_korea" },
  { text: "Northern Mariana Islands", id: "northern_mariana_islands" },
  { text: "Norway", id: "norway" },
  { text: "Oman", id: "oman" },
  { text: "Pakistan", id: "pakistan" },
  { text: "Palau", id: "palau" },
  { text: "Palestine", id: "palestine" },
  { text: "Panama", id: "panama" },
  { text: "Paraguay", id: "paraguay" },
  { text: "Peru", id: "peru" },
  { text: "Philippines", id: "philippines" },
  { text: "Pitcairn Islands", id: "pitcairn_islands" },
  { text: "Poland", id: "poland" },
  { text: "Portugal", id: "portugal" },
  { text: "Puerto Rico", id: "puerto_rico" },
  { text: "Qatar", id: "qata" },
  { text: "Reunion", id: "reunion" },
  { text: "Romania", id: "Romania" },
  { text: "Russia", id: "Russia" },
  { text: "Rwanda", id: "Rwanda" },
  { text: "Saint Helena", id: "saint_helena" },
  { text: "Saint Kitts and Nevis", id: "saint_kitts_and_nevis" },
  { text: "Saint Lucia", id: "saint_lucia" },
  { text: "Saint Pierre", id: "saint_pierre" },
  { text: "Saint Vincent", id: "saint_vincent" },
  { text: "Samoa", id: "samoa" },
  { text: "San Marino", id: "san_marino" },
  { text: "Sandwich Islands", id: "sandwich_islands" },
  { text: "Sao Tome", id: "sao_tome" },
  { text: "Saudi Arabia", id: "saudi_arabia" },
  { text: "Scotland", id: "scotland" },
  { text: "Senegal", id: "senegal" },
  { text: "Serbia", id: "serbia" },
  { text: "Serbia", id: "serbia" },
  { text: "Seychelles", id: "seychelles" },
  { text: "Sierra Leone", id: "sierra_leone" },
  { text: "Singapore", id: "singapore" },
  { text: "Slovakia", id: "slovakia" },
  { text: "Slovenia", id: "slovenia" },
  { text: "Solomon Islands", id: "solomon_islands" },
  { text: "Somalia", id: "somalia" },
  { text: "South Africa", id: "south_africa" },
  { text: "South Korea", id: "south_korea" },
  { text: "Spain", id: "spain" },
  { text: "Sri Lanka", id: "sri_lanka" },
  { text: "Sudan", id: "sudan" },
  { text: "Suriname", id: "suriname" },
  { text: "Swaziland", id: "swaziland" },
  { text: "Sweden", id: "sweden" },
  { text: "Switzerland", id: "switzerland" },
  { text: "Syria", id: "syria" },
  { text: "Taiwan", id: "taiwan" },
  { text: "Tajikistan", id: "tajikistan" },
  { text: "Tanzania", id: "tanzania" },
  { text: "Thailand", id: "thailand" },
  { text: "Timorleste", id: "timorleste" },
  { text: "Togo", id: "togo" },
  { text: "Tokelau", id: "tokelau" },
  { text: "Tonga", id: "tonga" },
  { text: "Trinidad", id: "trinidad" },
  { text: "Tunisia", id: "tunisia" },
  { text: "Turkey", id: "turkey" },
  { text: "Turkmenistan", id: "turkmenistan" },
  { text: "Tuvalu", id: "tuvalu" },
  { text: "U.A.E.", id: "united_arab_emirates" },
  { text: "Uganda", id: "uganda" },
  { text: "Ukraine", id: "ukraine" },
  { text: "United Kingdom", id: "united_kingdom" },
  { text: "United States", id: "united_states" },
  { text: "Uruguay", id: "uruguay" },
  { text: "US Minor Islands", id: "us_minor_islands" },
  { text: "US Virgin Islands", id: "us_virgin_islands" },
  { text: "Uzbekistan", id: "uzbekistan" },
  { text: "Vanuatu", id: "vanuatu" },
  { text: "Vatican City", id: "vatican_city" },
  { text: "Venezuela", id: "venezuela" },
  { text: "Vietnam", id: "vietnam" },
  { text: "Wales", id: "wales" },
  { text: "Wallis and Futuna", id: "wallis_and_futuna" },
  { text: "Western Sahara", id: "western_sahara" },
  { text: "Yemen", id: "yemen" },
  { text: "Zambia", id: "zambia" },
  { text: "Zimbabwe", id: "zimbabwe" },
]

export default class Categories extends Component {
	constructor(props) {
		super(props)
		this.state = {
			education: [],
			// community: [],
			religion: undefined,
			language: "",
			countryOfOrigin: "",
			transportation: [],
			housing: [],
			medianMonthlyCost: undefined,
			safetyAndResources: [],
			food: [],
			rating: undefined,
			educationToggle: false,
			employmentToggle: false,
			communityToggle: false, 
			transportationToggle: false,
			housingToggle: false,
			safetyAndResourcesToggle: false,
			foodToggle: false,
      		data: [],
      		educationClose: false

		}
	}

	toggleChangeEducation = (e) => {
		this.setState({
			educationToggle: !this.state.educationToggle
		})

		if (this.state.educationToggle !== false) {
			this.setState({
				education: []
			})
		}
		// console.log(this.state.educationToggle)
	}

	componentDidUpdate() {
		console.log(this.state)
	}

	toggleChangeHousing = (e) => {
		this.setState({
			housingToggle: !this.state.housingToggle
		})

		if (this.state.housingToggle !== false) {
			this.setState({
				housing: []
			})
		}
	}

	toggleChangeCommunity = (e) => {
		this.setState({
			communityToggle: !this.state.communityToggle
		})

		if (this.state.communityToggle !== false) {
			this.setState({
				religion: undefined,
				language: "",
				countryOfOrigin: ""
			})
		}
	}

	toggleChangeTransportation = (e) => {
		this.setState({
			transportationToggle: !this.state.transportationToggle
		})

		if (this.state.transportationToggle !== false) {
			this.setState({
				transportation: []
			})
		}
	}

	toggleChangeSafety = (e) => {
		this.setState({
			safetyAndResourcesToggle: !this.state.safetyAndResourcesToggle
		})

		if (this.state.safetyAndResourcesToggle !== false) {
			this.setState({
				safetyAndResources: []
			})
		}
	}

	toggleChangeFood = (e) => {
		this.setState({
			foodToggle: !this.state.foodToggle
		})

		if (this.state.foodToggle !== false) {
			this.setState({
				food: []
			})
		}
	}

  	handleChange = (e) => {
  		this.setState({ rating: e.target.value })
  		
  	}

	handleClickEducation = (e) => {
		const copyState = [...this.state.education]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		// console.log(this.state.education)
	}

	handleClickReligion = (e) => {
		this.setState({
			religion: e.target.closest("div").id
		})

		// const copyState = [...this.state.transportation]
		// copyState.push(e.target.id)
		// console.log(e.target.innerHTML)
		// console.log(e.target.closest("div").id)
		console.log(this.state.religion)
	}

	handleClickLanguage = (e) => {
		// const copyState = [...this.state.transportation]
		// copyState.push(e.target.id)
		this.setState({
			language: e.target.closest("div").id
		})
		console.log(this.state)
	}

	handleClickCountryOfOrigin = (e) => {
		// const copyState = [...this.state.transportation]
		// copyState.push(e.target.id)
		this.setState({
			countryOfOrigin: e.target.closest("div").id
		})
		console.log(this.state)
	}

	handleClickTransportation = (e) => {
		const copyState = [...this.state.transportation]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	handleClickHousing = (e) => {
		const copyState = [...this.state.housing]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	handleClickSafety = (e) => {
		const copyState = [...this.state.safetyAndResources]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	handleClickFood = (e) => {
		const copyState = [...this.state.food]
		copyState.push(e.target.id)
		this.setState({
			[e.target.value]: copyState
		})
		console.log(this.state)
	}

	// educationClose = (e) => {
	// 	this.setState({
	// 		educationClose: !this.state.educationClose
	// 	})
	// }

	results = (e) => {
		// console.log(this.state.education)
		// console.log(this.state.religion)
		// console.log(this.state.language)
		// console.log()
		e.preventDefault()
		fetch(this.props.apiUrl , { 
			method: "POST",
			headers: {
					"Content-Type": "application/json",
					"key": "se73A36yNqLbFyihaMgH"
			},
			body: JSON.stringify({
				"meta": {
        			"length": 4
    			},
    			"params": {
        			"education": [
            			{
               				"prompt": "education_type",
                			"type": "select_multiple",
                			"response": this.state.education
            			}
        			],
        			"community": [
            			{
                			"prompt": "religion",
                			"type": "select_one",
                			"response": this.state.religion
            			},
            			{
                			"prompt": "language",
                			"type": "select_one",
                			"response": this.state.language
            			},
            			{
                			"prompt": "country_of_origin",
                			"type": "select_one",
                			"response": this.state.countryOfOrigin
            			}
        			],
        			"transportation": [
            			{
                			"prompt": "transport_preference",
                			"type": "select_multiple",
                			"response": this.state.transportation
            			}
        			],
        			"housing": [
            			{
                			"prompt": "housing_preference",
                			"type": "select_multiple",
                			"response": this.state.housing
            			},
            			{
                			"prompt": "median_monthly_cost",
                			"type": "select_one",
                			"response": `${this.state.rating}`
            			}
        			],
        			"safety_and_resources": [
            			{
                			"prompt": "safety_preference",
                			"type": "select_multiple",
                			"response": this.state.safetyAndResources
            			}
        			],
        			"food": [
            			{
                			"prompt": "food_preferences",
                			"type": "select_multiple",
                			"response": this.state.food
            			}
        			]
				},
				credentials: "include"
			})
		}).then(res => {
			return res.json()
		}).then(data => {
			this.setState({data});
		}).catch(error=> console.error)
	}

	render() {
		const {rating} = this.state
		return (
			<>
			<div className="Options">
				<div className="Education">
					<Popup trigger={<Radio toggle label="Education" onChange={(e) => this.toggleChangeEducation(e)}/>} on={'click'} flowing>
    					<Form>
    						<Form.Checkbox value="education" id="primary_school" label="Primary School" onClick={(e) => this.handleClickEducation(e)}/>

    						<Form.Checkbox value="education" id="junior_high" label="Junior High School" onClick={(e) => this.handleClickEducation(e)}/>

    						<Form.Checkbox value="education" id="high_school" label="High School" onClick={(e) => this.handleClickEducation(e)}/>

    						<Form.Checkbox value="education" id="college" label="College/University" onClick={(e) => this.handleClickEducation(e)}/>

    						<Form.Checkbox value="education" id="ged_classes" label="GED Classes" onClick={(e) => this.handleClickEducation(e)}/>

    						<Form.Checkbox value="education" id="night_classes" label="Night Classes" onClick={(e) => this.handleClickEducation(e)}/>

    						<Button>Close</Button>
    					</Form>
  					</Popup>
  					<ChoicesEducation selectedChoices={this.state} toggleEducation={this.toggleChangeEducation} refresh={this.componentDidUpdate}/>
  				</div>

  				<div className="Community">
  					<Popup trigger={<Radio toggle label="Community" onChange={(e) => this.toggleChangeCommunity(e)}/>} on={"click"} flowing>
    					<Form>
    						<Form.Field>
    							<label>Religion</label>	
    								<Dropdown
    								label="religion"
    								selection
    								fluid
    								placeholder={this.state.religion}
    								clearable options={religions}
    								onChange={(e) => this.handleClickReligion(e)}/>
    						</Form.Field>
    						<Form.Field>
    							<label>Language</label>	
    								<Dropdown
    								label="langauge"
    								selection
    								fluid
    								placeholder={this.state.language}
    								options={languages}
    								onChange={(e) => this.handleClickLanguage(e)}/>
    						</Form.Field>
    						<Form.Field>
    							<label>Country of Origin</label>	
    								<Dropdown
    								label="countryOfOrigin"
    								selection
    								fluid
    								placeholder={this.state.countryOfOrigin}
    								options={countryOfOrigin}
    								onChange={(e) => this.handleClickCountryOfOrigin(e)}/>
    						</Form.Field>
    						<Button>Close</Button>
    					</Form>
  					</Popup>
  					<ChoicesCommunity selectedChoices={this.state} toggleCommunity={this.toggleChangeCommunity} refresh={this.componentDidUpdate}
  					/>
  				</div>

  				<div className="transportation">
  					<Popup trigger={<Radio toggle label="Transportation" onChange={(e) => this.toggleChangeTransportation(e)}/>} on={"click"} flowing>
    					<Form>
    						<Form.Checkbox value="transportation" id="public_transportation" label="Public Transportation" onClick={(e) => this.handleClickTransportation(e)}/>
    						<Form.Checkbox value="transportation" id="walkability" label="Walkability" onClick={(e) => this.handleClickTransportation(e)}/>
    						<Form.Checkbox value="transportation" id="carpooling" label="Carpooling Programs" onClick={(e) => this.handleClickTransportation(e)}/>
    						<Button>Close</Button>
    					</Form>
  					</Popup>
  					<ChoicesTransportation selectedChoices={this.state} toggleTransportation={this.toggleChangeTransportation} refresh={this.componentDidUpdate}/>
  				</div>

  				<div className="Housing">
  					<Popup trigger={<Radio toggle label="Housing" onChange={(e) => this.toggleChangeHousing(e)}/>} on={"click"} flowing>
  						<Form>
    						<Form.Checkbox value="housing" id="temporary" label="Temporary Housing" onClick={(e) => this.handleClickHousing(e)}/>
    						<Form.Checkbox value="housing" id="low_income" label="Low Income Housing" onClick={(e) => this.handleClickHousing(e)}/>
    						<Form.Checkbox value="housing" id="rent_stabilized" label="Rent Stabalized Housing" onClick={(e) => this.handleClickHousing(e)}/>
    						<Form.Checkbox value="housing" id="median_monthly_cost" label="Median Monthly Housing Cost"/>
    						<input
          					type="range"
          					min={0}
          					max={4000}
          					value={rating}
          					onChange={this.handleChange}
        					/>
        					<br />
        					<div>${rating}</div>

    						<Button>Close</Button>
    					</Form>
  					</Popup>
  					<ChoicesHousing selectedChoices={this.state} toggleHousing={this.toggleChangeHousing} refresh={this.componentDidUpdate}/>
  				</div>

  				<div className="Safety">
  					<Popup trigger={<Radio toggle label="Safety and Resources" onChange={(e) => this.toggleChangeSafety(e)}/>} on={"click"} flowing>
    					<Form>
    						<Form.Checkbox value="safetyAndResources" id="low_crime" label="Low Crime" onClick={(e) => this.handleClickSafety(e)}/>
    						<Form.Checkbox value="safetyAndResources" id="hospitals" label="Hospitals" onClick={(e) => this.handleClickSafety(e)}/>
    						<Form.Checkbox value="safetyAndResources" id="police" label="Police" onClick={(e) => this.handleClickSafety(e)}/>
    						<Form.Checkbox value="safetyAndResources" id="shelters" label="Shelters" onClick={(e) => this.handleClickSafety(e)}/>
    						<Button>Close</Button>
    					</Form>
  					</Popup>
  					<ChoicesSafetyAndResources selectedChoices={this.state} toggleSafety={this.toggleChangeSafety} refresh={this.componentDidUpdate}/>
  				</div>

  				<div className="Food">
  					<Popup trigger={<Radio toggle label="Food" onChange={(e) => this.toggleChangeFood(e)}/>} on={"click"} flowing>
    					<Form>
    						<Form.Checkbox value="food" id="supermarkets" label="Supermarkets" onClick={(e) => this.handleClickFood(e)}/>
    						<Form.Checkbox value="food" id="convience_stores" label="Convience Stores" onClick={(e) => this.handleClickFood(e)}/>
    						<Form.Checkbox value="food" id="snap_ebt" label="Snap EBT" onClick={(e) => this.handleClickFood(e)}/>
    						<Form.Checkbox value="food" id="ethnic_markets" label="Ethnic Markets" onClick={(e) => this.handleClickFood(e)}/>
    						<Button>Close</Button>
    					</Form>
  					</Popup>
  					<ChoicesFood selectedChoices={this.state} toggleFood={this.toggleChangeFood} refresh={this.componentDidUpdate}/>
  				</div>		
  			</div><br></br>
  				<Button as={Link} to='/results' primary onClick={(e) => this.results(e)}>See Results</Button><br></br><br></br>
          <div className="city-container">

            {this.state.data.map((data) => {
            	return (
              		<div className="city-cards" key={data.id}>
                		<Card.Group>
                			<Card centered key={data.id}>
                				<Card.Content>
                					<Card.Header>
                						{data.place}
                					</Card.Header>
                					<Card.Meta>
                						{data.state}
                					</Card.Meta>
                					<Card.Description>
                						{data.description}
                					</Card.Description><br></br>
                					<Link to={`/city/${data.id}`}><Button primary>See Details</Button></Link>
                				</Card.Content>

                			</Card>

                		</Card.Group>
              		</div>
              	)
            })}
          </div>
			</>

			)
	}


}
