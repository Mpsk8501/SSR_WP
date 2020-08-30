import {useState} from 'react'
import classes from './saleComponent.module.scss'
import arrSort from '../../helpers/arrSort'


const lapy = '/images/motor/lapy.jpg'
const flanecLapy = '/images/motor/flancLapy.jpg'
const flanec = '/images/motor/flanec.jpg'

const icoNoSort = '/images/sortIcon/no_sort.svg'
const icoUpSort = '/images/sortIcon/sort_up.svg'
const icoDownSort = '/images/sortIcon/sort_down.svg'

const initialSortState = {
  0: null,
  5: null,
  3: null,
  4: null,
  6: null,
  8: null,
}

const SaleComponent = ({motors}) => {
  const [table, setTable] = useState(motors)
  const [tableDist] = useState(motors)
  const [sortBlock, setSortBlock] = useState(false)
  const [sortedElState, setSortedElState] = useState(initialSortState)

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

    if(sortedElState[value] !== null){
      setTable([...table].reverse())
      if(sortedElState[value] === 1){
        setSortedElState({...initialSortState,[value]:-1})
      }else {
        setSortedElState({...initialSortState,[value]:1})
      }
      setSortBlock(false)
      return
    }

    let type = 'num'
    if(value === 3|| value === 4){
      type = 'str'
    }

    const sortedTable = await arrSort([...table],value, type)
    setTable(sortedTable)
    setSortedElState({...initialSortState,[value.toString()]:1})
    setSortBlock(false)
  }

  /*End Sorting*/

  /*Filter*/
    const filterHandler = (e) => {

      const filterType = e.target.value
      const arr = [...tableDist]
      let sortedArr = []
      if(filterType === '4'){
        sortedArr = arr.filter(item => {
          return item[7].includes('L') && item[7].includes('F')
        })
        setTable(sortedArr)
      }
      if(filterType === '3') {
        sortedArr = arr.filter(item => {
          return item[7].includes('F') && !item[7].includes('L')
        })
        setTable(sortedArr)
      }
      if(filterType === '2') {
        sortedArr = arr.filter(item => {
          return item[7].includes('L') && !item[7].includes('F')
        })
        setTable(sortedArr)
      }
      if(filterType === '1') {
        sortedArr = arr.filter(item => {
          return !item[7].includes('L') && !item[7].includes('F')
        })
        setTable(sortedArr)
      }
      if(filterType === '0') {
        setTable(tableDist)
        setPagPages(Math.ceil(motors.length/pagValue))
        return
      }
      setPagPage(1)
      setPagPages(Math.ceil(sortedArr.length/pagValue))
      setSortedElState(initialSortState)
    }

  /*End filter*/

  /*PagSelect*/

   const pagNumHandler = (e) => {
     const pagNum = e.target.value
     setPagPage(1)
     setPagPages(Math.ceil(table.length/pagNum))
     setPagValue(pagNum)
   }

  /*End pagSelect*/

  const returnSortImg = (num) => {
    if(sortedElState[num] === null){
      return icoNoSort
    }
    if(sortedElState[num] === 1){
      return icoUpSort
    }
    if(sortedElState[num] === -1){
      return icoDownSort
    }

  }
  return (
      <div className={classes.saleComponent}>
        <div className="container">
          <h2>Электрооборудование в наличии</h2>
          <h4>Цены приведены без учета НДС на 11.07.18 г.</h4>
          <div className={classes.tableHead}>
            <div className={classes.filter}>
              <span>Фильтр по креплению:</span>
              <select className={'selectCss'} onChange={filterHandler}  name="filter">
                <option value="0" >--</option>
                <option value="1" >Без крепления</option>
                <option value="2" >Лапы</option>
                <option value="3" >Флянец</option>
                <option value="4" >Лапы и флянец</option>
              </select>
            </div>
            <div className={classes.filter}>
              <span>Количество на странице</span>
              <select className={'selectCss'} onChange={pagNumHandler}  name="pagSelect">
                <option value="15" >15</option>
                <option value="20" >20</option>
                <option value="25" >25</option>
                <option value="30" >30</option>
              </select>
            </div>
          </div>
          <div className={classes.table}>
            <ul>
              <li value={0} onClick={sortHandler}>Номер
                <span><img src={returnSortImg(0)} /></span></li>
              <li value={5} onClick={sortHandler}>кВт
                <span><img src={returnSortImg(5)} /></span></li>
              <li value={3} onClick={sortHandler}>Комплект
                <span><img src={returnSortImg(3)} /></span>
              </li>
              <li value={4} onClick={sortHandler}>Тип
                <span><img src={returnSortImg(4)} /></span></li>
              <li value={6} onClick={sortHandler}>об/мин
                <span><img src={returnSortImg(6)} /></span></li>
              <li value={8} onClick={sortHandler}>Цена,Р
                <span><img src={returnSortImg(8)} /></span></li>
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