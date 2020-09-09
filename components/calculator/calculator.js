import classes from './Calculator.module.scss'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider'

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {useState} from 'react'
import { Checkbox } from '@material-ui/core'


const baseValueSplitter3000 = {
  1:2116.47,
  2:2717.37,
  3:2911.75,
  4:3189.01,
  5:4373.05,
  6:4610.85,
  7:5308.45,
  8:7042.57,
  9:10634.55,
  10:12314.06,
  11:14511.50,
  12:16063.13,
  13:19387.65,
  14:22210.27,
  15:24301.59,
  16:34511.13,
  17:36847.06
}
const baseValueSplitter1500 = {
  1:2717.37,
  2:2911.75,
  3:3449.02,
  4:4373.05,
  5:5000.85,
  6:5852.61,
  7:6437.40,
  8:7710.50,
  9:11855.93,
  10:13570.21,
  11:15485.96,
  12:17513.94,
  13:20432.61,
  14:22716.63,
  15:25374.29,
  16:38396.78,
  17:42433.87
}
const baseValueSplitter1000 = {
  1:2911.75,
  2:3189.01,
  3:4426.62,
  4:5288.93,
  5:5890.96,
  6:7996.22,
  7:9121.22,
  8:11358.63,
  9:13201.19,
  10:15718.66,
  11:19759.14,
  12:21530.68,
  13:25388.25,
  14:27585.34,
  15:30098.79,
  16:45610.90,
  17:51185.04
}
const baseValueSplitter750 = {
  1:4138.22,
  2:4600.70,
  3:5419.31,
  4:6441.51,
  5:8064.30,
  6:8720.84,
  7:10006.41,
  8:12053.18,
  9:14128.34,
  10:16439.58,
  11:22018.58,
  12:25235.80,
  13:32137.47,
  14:35285.22,
  15:42691.56,
  16:51009.13,
  17:60571.27
}




const Calculator = () => {
  const [calcResult, setCalcResult] = useState(3189)

  const [leftSliderMargin, setLeftSliderMargin] = useState(-80)

  const [inputsState, setInputState] = useState({
    inputValue: 1,
    caruselClasses:{
      3:classes.preActive,
      4:classes.active,
      5:classes.preActive,
    },
    activeCaruselElem: 4,
    sliderValue:0,
    checkboxState:{
      checkedA: false,
      checkedB: false,
    }
  })

  const [activeSlider, setActiveSlider] = useState(4)

  const [sliderClasses, setSliderClasses] = useState({
    3:classes.preActive,
    4:classes.active,
    5:classes.preActive,

  })

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const [sliderValue, setSliderValue] =useState(0)


  const [inputValue, setInputValue] = useState(1)


  const handleSliderChange = (event,newValue) => {
    setSliderValue(newValue)
    calcResultHandler()
  };

  const handleInputChange = (event) => {
    setInputValue((state) => event.target.value)
    calcResultHandler()
  }

  const speedClickHandler = (value) => {
    setSliderValue(value)
    calcResultHandler()
  }

  const leftSliderHandler = (e) => {
    let newActiveSlider = activeSlider
    const marginValue = +e.target.value
    if(activeSlider===17&&marginValue<0||activeSlider===1&&marginValue>0){
      return
    }
    if(marginValue>0){
      newActiveSlider--
    }else if(marginValue<0){
      newActiveSlider++
    }
    setLeftSliderMargin(leftSliderMargin + marginValue)
    setSliderClasses({[newActiveSlider+1]:classes.preActive,
      [newActiveSlider-1]:classes.preActive,
      [newActiveSlider]:classes.active})
    setActiveSlider(newActiveSlider)
    calcResultHandler()
  }

  const checkboxHandleChange = (event) => {
    const newCheckBoxState = {
      ...inputsState.checkboxState,
      [event.target.name]: event.target.checked
    }
    const newInputsState = {
      ...inputsState,
      checkboxState:{...newCheckBoxState}
    }
    setInputState(newInputsState)
    calcResultHandler()
  };

  const calcResultHandler = () => {
    let baseValueArr = baseValueSplitter3000
    switch (sliderValue) {
      case 3:
        baseValueArr = baseValueSplitter750
        break
      case 2:
        baseValueArr = baseValueSplitter1000
        break
      case 1:
        baseValueArr = baseValueSplitter1500
        break
      case 0:
        baseValueArr = baseValueSplitter3000
        break
    }
    console.log(baseValueArr[activeSlider])
    console.log(inputValue)
    const newValue = Math.floor(baseValueArr[activeSlider] * inputValue)
    setCalcResult(newValue)
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
              <MenuItem value={0.9}>электродвигателя без ротора</MenuItem>
              <MenuItem value={1}>фазного ротора</MenuItem>
              <MenuItem value={1.15}>импортного электродвигателя</MenuItem>
              <MenuItem value={1.4}>многоскоростного однообмоточного электродвигателя</MenuItem>
              <MenuItem value={2}>многоскоростного двухобмоточного электродвигателя</MenuItem>
              <MenuItem value={1.2}>встроенного электродвигателя</MenuItem>
              <MenuItem value={1.5}>с частотой менее 500об/мин.</MenuItem>
              <MenuItem value={1.2}>с частотой от 500 до 750об/мин.</MenuItem>
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
          <div className={classes.leftSlider}>
              <div className={classes.btnBlock}>
                <button
                    onClick={leftSliderHandler}
                    value={+80} >
                </button>
                <button
                    onClick={leftSliderHandler}
                    value={-80} >
                </button>
              </div>
              <div style={{marginTop: leftSliderMargin}}  className={classes.leftSliderWrapper}>
                <div className={sliderClasses[1]||null}>1100</div>
                <div className={sliderClasses[2]||null}>1500</div>
                <div className={sliderClasses[3]||null}>2200</div>
                <div className={sliderClasses[4]||null}>3000</div>
                <div className={sliderClasses[5]||null}>4000</div>
                <div className={sliderClasses[6]||null}>5500</div>
                <div className={sliderClasses[7]||null}>7500</div>
                <div className={sliderClasses[8]||null}>11000</div>
                <div className={sliderClasses[9]||null}>15000</div>
                <div className={sliderClasses[10]||null}>18500</div>
                <div className={sliderClasses[11]||null}>22000</div>
                <div className={sliderClasses[12]||null}>30000</div>
                <div className={sliderClasses[13]||null}>37000</div>
                <div className={sliderClasses[14]||null}>45000</div>
                <div className={sliderClasses[15]||null}>55000</div>
                <div className={sliderClasses[16]||null}>75000</div>
                <div className={sliderClasses[17]||null}>90000</div>
              </div>
            </div>
          <img src="/images/calculator/motor.png" alt=""/>
          <div className={classes.slider}>
            <div className={classes.valuesBlock}>
              <span
                  onClick={()=>speedClickHandler(3)}
                  className={sliderValue===3?classes.spanActive:null}>750</span>
              <span
                  onClick={()=>speedClickHandler(2)}
                  className={sliderValue===2?classes.spanActive:null}>1000</span>
              <span
                  onClick={()=>speedClickHandler(1)}
                  className={sliderValue===1?classes.spanActive:null}>1500</span>
              <span
                  onClick={()=>speedClickHandler(0)}
                  className={sliderValue===0?classes.spanActive:null}>3000</span>
            </div>
            <Slider
                orientation="vertical"
                aria-labelledby="vertical-slider"
                step={1}
                min={0}
                max={3}
                name={'sliderB'}
                value={typeof sliderValue === 'number' ? sliderValue : 0}
                onChange={handleSliderChange}
            />
          </div>
        </div>
        <div className={classes.switcherBlock}>
          <div>
            <FormControlLabel
                control={
                  <Switch
                      checked={inputsState.checkboxState.checkedA}
                      onChange={checkboxHandleChange}
                      name="checkedA"
                      color={'primary'}
                  />}
                label="Срочность ремонта 3 дня"
            />
          </div>
          <div>
            <FormControlLabel
                control={
                  <Switch
                      checked={inputsState.checkboxState.checkedB}
                      onChange={checkboxHandleChange}
                      name="checkedB"
                      color="primary"
                  />
                }
                label="Двигатели разработаные до 1972 года"
            />
          </div>
        </div>
        <div className={classes.senderBlock}>
          <span>{calcResult} P</span>
          <button>оставить<br/>заявку</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
