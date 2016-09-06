import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/schedule/',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      const Container = require('./containers/ScheduleIndexContainer').default

      /*  Return getComponent   */
      cb(null, Container)

    /* Webpack named bundle   */
    }, 'schedule.index')
  }
})
