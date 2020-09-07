import classes from './Calculator.module.scss'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider'

import {useState} from 'react'



const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

const settings =  {
  arrows: false,
  arrowsBlock: false,
  slidesPerRow: 5
};


const Calculator = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const [sliderValue, setSliderValue] =useState({
    sliderA: 0,
    sliderB: 0
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleSliderBChange = (event,newValue) => {
    setSliderValue({ ...sliderValue, sliderB: newValue })
  };
  const handleSliderAChange = (event,newValue) => {
    setSliderValue({ ...sliderValue, sliderA: newValue })
  };

  return (
    <div className={classes.Calculator}>
      <div className="container">
        <h2>Частота:{sliderValue.sliderB}</h2>
        <div className={classes.sliderWrapper}>
          <div className={classes.sliderHeader}>
            <h4>
              <span>WATT</span><br/>
              мощность, <br/>
              квТ/ч
            </h4>
            <h4>
              <span>SPEED</span><br/>
              частота вращения, <br/>
              об/мин
            </h4>
          </div>
          <div className={classes.sliderBlock}>
            <div className={classes.slider}>

              <Slider
                  orientation="vertical"
                  defaultValue={30}
                  aria-labelledby="vertical-slider"
                  marks={marks}
              />
            </div>
            <img src="/images/двиг.png" alt=""/>
            <div className={classes.slider}>

              <Slider
                  orientation="vertical"
                  defaultValue={0}
                  aria-labelledby="vertical-slider"
                  step={750}
                  min={0}
                  max={3000}
                  name={'sliderB'}
                  value={sliderValue.sliderB}
                  onChange={handleSliderBChange}
              />
            </div>
          </div>
        </div>
        <div className={classes.switcherBlock}>
          <FormControlLabel
              control={
                <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    color={'primary'}
                />}
              label="Срочность ремонта 3 дня"
          />
          <FormControlLabel
              control={
                <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                />
              }
              label="Двигатели разработаные до 1972 года"
          />
        </div>

      </div>

    </div>
  )
}

export default Calculator
