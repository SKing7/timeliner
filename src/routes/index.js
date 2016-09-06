// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import AddProject from './AddProject'
import Schedule from './Schedule'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    Home(store),
    AddProject(store),
    Schedule(store),
  ]
})

export default createRoutes
