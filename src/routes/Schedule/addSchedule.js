import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/schedule/add/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AddContainer = require('./containers/AddScheduleContainer').default
      const reducer = require('./modules').default

      /*  Add the reducer to the store on key  */
      injectReducer(store, { key: 'Schedule', reducer })

      /*  Return getComponent   */
      cb(null, AddContainer)

    }, 'schedule.add')
  }
})
