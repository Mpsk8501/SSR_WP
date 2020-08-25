import {
  FETCH_ERROR,
  FETCH_VACATION,
  FETCH_START, FETCH_SUCCESS
} from '../types'

// import {parse} from 'node-html-parser'


export function fetchVacations() {
  return async dispatch => {
    dispatch(fetchStart())
    try {
      const response = await fetch('http://wp-test//wp-json/wp/v2/jobopenings')
      const responseData = await response.json()
      // const mediaResponse = await fetch('http://wp-test//wp-json/wp/v2/media')
      // const media = await mediaResponse.json()
      const vacations = []
      responseData.forEach(postData => {
        const vacation = {
          id: postData.id,
          date: postData.date,
          title: postData.title.rendered,
          type: postData.type,
          author: postData.author,
          excerpt: postData.excerpt.rendered,
          /*categories: postData.categories[0],*/
          content: postData.content.rendered,
        }

       /* const mediaFiltered = media.filter(item =>
            item.post === postData.id
        )
        post.media = mediaFiltered*/
        vacations.push(vacation)

      })
      console.log(vacations)
      dispatch(fetchVacation(vacations))
      dispatch(fetchSuccess())

    } catch (e) {
      dispatch(fetchError(e))
    }
  }
}

function fetchStart () {
  console.log('fetchStart!!!!')
  return {
    type: FETCH_START
  }
}

function fetchError (e) {
  console.log('ssss',e)
  return {
    type: FETCH_ERROR,
    error: e
  }
}

function fetchVacation (vacation) {
  console.log('fetchVacation!!!!')
  return {
    type: FETCH_VACATION,
    vacation
  }
}

function fetchSuccess () {
  console.log('fetchSuccess!!!!')
  return {
    type: FETCH_SUCCESS
  }
}
