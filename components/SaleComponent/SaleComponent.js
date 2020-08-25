import {useState} from 'react'
import classes from './saleComponent.module.scss'
import arrSort from '../../helpers/arrSort'

const SaleComponent = ({motors}) => {
  const [table, setTable] = useState(motors)
  const [sortBlock, setSortBlock] = useState(false)
  const [sortState, setSortState] = useState({
    0: 0,
    5: 0,
    3: 0,
    4: 0,
    6: 0,
    8: 0
  })
  /*pagination*/
  const [pagPage, setPagPage]  = useState(1)
  const [pagValue, setPagValue] = useState(25)
  const [pagPages, setPagPages] = useState(Math.ceil(motors.length/pagValue))
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

  const sortHandler = async (e) => {
    if(sortBlock){
      return
    }
    const value = e.target.value
    setSortBlock(true)
    if(sortState[value]){
      setTable([...table].reverse())
      setSortBlock(false)
      console.log('sort')
      return
    }
    const sortedTable = await arrSort([...table],value)
    setSortState({...sortState,[value]:1})
    setTable(sortedTable)
    setSortBlock(false)
  }

  return (
      <div className={classes.saleComponent}>
        <div className="container">
          <h2>Электрооборудование в наличии</h2>
          <h4>Цены приведены без учета НДС на 11.07.18 г.</h4>
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
                if(index===0){
                  return null
                }
                if(index>(pagPage-1)*pagValue && index<=(pagPage)*pagValue){
                  return(
                      <ul key={index}>
                        <li>{item[0]}</li>
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