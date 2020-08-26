import delay from './delay'

const re = /[0-9/.]+/

const sortNum = (arr, key) => arr.sort((a,b) =>
    a[key].match(re) - b[key].match(re)
)

const sortStr = (arr, key) => arr.sort((a,b) => {
   let A = a[key]
   let B = b[key]
   //return A > B ? 1 : A === B ? 0 : -1
   return A > B  ? 1 :  -1
})





const arrSort = async (arr,key,type) => {
   //await delay(1000)
   if(type==='num'){
      return sortNum(arr,key)
   }else if (type === 'str') {
      return sortStr(arr,key)
   }
   else return arr

}

export default arrSort