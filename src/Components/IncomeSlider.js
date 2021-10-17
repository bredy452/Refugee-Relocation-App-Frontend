import React, { useCallback, useState } from 'react'
import SliderView from 'semantic-ui-react-slider'

export default function IncomeSlider() {
	const [minSelectedValue, setMinSelectedValue] = useState(0);
	const [maxSelectedValue, setMaxSelectedValue] = useState(100)

	const onSliderValuesChange = useCallback((minValue: number, maxValue: number) => {
        setMinSelectedValue(minValue);
        setMaxSelectedValue(maxValue);
      }, []);
   
    return (<SliderView onSliderValuesChange={onSliderValuesChange} sliderMinValue={0} sliderMaxValue={100} />)
}