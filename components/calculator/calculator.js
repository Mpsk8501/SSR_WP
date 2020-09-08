import classes from './Calculator.module.scss'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {useState} from 'react'


const Calculator = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const [sliderValue, setSliderValue] =useState({
    sliderA: 0,
    sliderB: 3
  })


  const [inputValue, setInputValue] = useState(10)

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleSliderBChange = (event,newValue) => {
    setSliderValue({ ...sliderValue, sliderB: newValue })
  };
  const handleSliderAChange = (event,newValue) => {
    setSliderValue({ ...sliderValue, sliderA: newValue })
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div className={classes.Calculator}>
      <div className={classes.calculatorHeader}>
        <img src="/images/calculator/logo.PNG"alt=""/>
        <h2>
          УралЭлектроРемонт
        </h2>
        <button>
          <img src="/images/calculator/btn.PNG" alt=""/>
        </button>
      </div>
      <div className={classes.main}>
        <div className={classes.title}>
          <h2>
            Расчитать стоимость <br/> ремонта электродвигателя онлайн
          </h2>
        </div>
        <div className={classes.input}>
          <h2>
            Замена <br/>
            обмотки:
          </h2>
          <FormControl style={{"minWidth": "480px",}} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Тип ЭД</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={inputValue}
                onChange={handleInputChange}
                label="Тип ЭД"
            >
              <MenuItem value={10}>электродвигателя
                без ротора</MenuItem>
              <MenuItem value={20}>фазного ротора</MenuItem>
              <MenuItem value={30}>импортного электродвигателя</MenuItem>
            </Select>
          </FormControl>
        </div>

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
            />
          </div>
          <img src="/images/calculator/motor.png" alt=""/>
          <div className={classes.slider}>
            <div className={classes.valuesBlock}>
              <span className={sliderValue.sliderB===3?classes.spanActive:null}>750</span>
              <span className={sliderValue.sliderB===2?classes.spanActive:null}>1000</span>
              <span className={sliderValue.sliderB===1?classes.spanActive:null}>1500</span>
              <span className={sliderValue.sliderB===0?classes.spanActive:null}>3000</span>
            </div>
            <Slider
                orientation="vertical"
                defaultValue={3}
                aria-labelledby="vertical-slider"
                step={1}
                min={0}
                max={3}
                name={'sliderB'}
                value={sliderValue.sliderB}
                onChange={handleSliderBChange}
            />
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
