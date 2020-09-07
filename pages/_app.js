import '../index.scss'
// import { combineReducers, applyMiddleware } from 'redux'
// import { appWithRedux } from 'next-redux'
// import rootReducer from '../Store/rootReducer'
// import thunk from 'redux-thunk'
import '@brainhubeu/react-carousel/lib/style.css';
import NextNprogress from 'nextjs-progressbar'
const MyApp = function({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
          color={"#29D"}
          startPosition={0.3}
          stopDelayMs={200}
          height={"3"}
      />
      <Component {...pageProps}/>
    </>
  )
}

// export default appWithRedux(rootReducer, applyMiddleware(thunk))

export default MyApp