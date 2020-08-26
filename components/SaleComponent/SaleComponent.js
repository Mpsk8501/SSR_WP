import {useState} from 'react'
import classes from './saleComponent.module.scss'
import arrSort from '../../helpers/arrSort'


const lapy = '/images/motor/lapy.jpg'
const flanecLapy = '/images/motor/flancLapy.jpg'
const flanec = '/images/motor/flanec.jpg'

const SaleComponent = ({motors}) => {
  const [table, setTable] = useState(motors)
  const [tableDist] = useState(motors)
  const [sortBlock, setSortBlock] = useState(false)
  const [sortedElState, setSortedElState] = useState(null)

  const [pagPage, setPagPage]  = useState(1)
  const [pagValue, setPagValue] = useState(15)
  const [pagPages, setPagPages] = useState(Math.ceil(motors.length/pagValue))

  /*pagination*/

  const pagNum = () => {
    const arr =[]
    for(let i = 1; i<= pagPages; i++){
      let btnClass = ''
      if (i === pagPage){
        btnClass = 'btn-pagination-active'
      }else {
        btnClass = 'btn-pagination'
      }

      arr.push(
          <button key={i} className={btnClass}>{i}</button>
          )
    }
    return arr
  }
  const paginationHandler = (type) => {
    if(type==='-'){
      if(pagPage>=2){
        setPagPage(pagPage - 1)
      }else setPagPage(1)
    }else if (type === '+'){
      if(pagPage <= pagPages-1){
        setPagPage(pagPage +1)
      }else setPagPage(pagPages)
    }
  }
  /*end pagination */

  /*Sorting*/



  const sortHandler = async (e) => {
    if(sortBlock){
      return
    }

    const value = e.target.value
    setSortBlock(true)

    if(sortedElState === value){
      setTable([...table].reverse())
      setSortBlock(false)
      return
    }

    let type = 'num'
    if(value === 3 || value === 4){
      type = 'str'
    }

    const sortedTable = await arrSort([...table],value, type)
    setTable(sortedTable)
    setSortedElState(value)
    setSortBlock(false)
  }

  /*End Sorting*/

  /*Filter*/
    const filterHandler = (e) => {

      const filterType = e.target.value
      const arr = [...tableDist]
      let sortedArr = []
      if(filterType === '4'){
        console.log(e.target.value)
        sortedArr = arr.filter(item => {
          return item[7].includes('L') && item[7].includes('F')
        })
        setTable(sortedArr)
      }
      if(filterType === '3') {
        console.log(e.target.value)
        sortedArr = arr.filter(item => {
          return item[7].includes('F') && !item[7].includes('L')
        })
        setTable(sortedArr)
      }
      if(filterType === '2') {
        console.log(e.target.value)
        sortedArr = arr.filter(item => {
          return item[7].includes('L') && !item[7].includes('F')
        })
        setTable(sortedArr)
      }
      if(filterType === '1') {
        console.log(e.target.value)
        sortedArr = arr.filter(item => {
          return !item[7].includes('L') && !item[7].includes('F')
        })
        setTable(sortedArr)
      }
      if(filterType === '0') {
        console.log(e.target.value)
        setTable(tableDist)
        setPagPages(Math.ceil(motors.length/pagValue))
        return
      }
      setPagPage(1)
      setPagPages(Math.ceil(sortedArr.length/pagValue))
      setSortedElState(null)
    }

  /*End filter*/

  /*PagSelect*/

   const pagNumHandler = (e) => {
     console.log(e.target.value)
     const pagNum = e.target.value
     setPagPage(1)
     setPagPages(Math.ceil(table.length/pagNum))
     setPagValue(pagNum)
   }

  /*End pagSelect*/
  return (
      <div className={classes.saleComponent}>
        <div className="container">
          <h2>Электрооборудование в наличии</h2>
          <h4>Цены приведены без учета НДС на 11.07.18 г.</h4>
          <div className={classes.tableHead}>
            <div className={classes.filter}>
              <span>Фильтр по креплению:</span>
              <select className={classes.selectCss} onChange={filterHandler}  name="filter">
                <option value="0" >--</option>
                <option value="1" >Без крепления</option>
                <option value="2" >Лапы</option>
                <option value="3" >Флянец</option>
                <option value="4" >Лапы и флянец</option>
              </select>
            </div>
            <div className={classes.filter}>
              <span>Количество на странице</span>
              <select className={classes.selectCss} onChange={pagNumHandler}  name="pagSelect">
                <option value="15" >15</option>
                <option value="20" >20</option>
                <option value="25" >25</option>
                <option value="30" >30</option>
              </select>
            </div>
          </div>
          <div className={classes.table}>
            <ul>
              <li value={0} onClick={sortHandler}>Номер</li>
              <li value={5} onClick={sortHandler}>кВт</li>
              <li value={3} onClick={sortHandler}>Комплектность</li>
              <li value={4} onClick={sortHandler}>Обозначение/Тип</li>
              <li value={6} onClick={sortHandler}>об/мин</li>
              <li value={8} onClick={sortHandler}>Цена,Р</li>
            </ul>
            {
              table.map((item, index) =>{

                if(index+1>(pagPage-1)*pagValue && index<=(pagPage)*pagValue){

                  const img = item[7].includes('L') && item[7].includes('F')
                      ? flanecLapy
                      : item[7].includes('L') && !item[7].includes('F')
                          ? lapy
                          : item[7].includes('F') && !item[7].includes('L')
                              ? flanec
                              : null

                  return(
                      <ul key={index}>
                        <li
                            style={img
                                ? {backgroundImage: `url(${img})`}
                                : {backgroundImage: 'none'}
                            }>
                          {item[0]}
                        </li>
                        <li>{item[5]}</li>
                        <li>{item[3]}</li>
                        <li>{item[4]}</li>
                        <li>{item[6]}</li>
                        <li>{item[8]}</li>
                      </ul>)
                }

                  }
              )
            }
          </div>
          <div className={classes.pagination}>
            <div onClick={() => paginationHandler('-')} className="btn">
              prev
            </div>
            <div className={classes.paginationWrapper}>
              {pagNum()}
            </div>
            <div onClick={() => paginationHandler('+')} className="btn">
              next
            </div>
          </div>

        </div>
      </div>
  )
}

export default SaleComponent