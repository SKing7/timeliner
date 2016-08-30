import AddProject from './containers/AddProjectContainer.js'
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'addProject',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const AddProjectContainer = require('./containers/AddProjectContainer').default
      const reducer = require('./reducers/AddProjectReducer').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'addProject', reducer })

      /*  Return getComponent   */
      cb(null, AddProject)

    /* Webpack named bundle   */
    }, 'addProject')
  }
})