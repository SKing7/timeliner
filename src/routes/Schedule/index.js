import ScheduleList from './scheduleList.js'
//import ScheduleIndex from './scheduleIndex.js'
import AddSchedule from './addSchedule.js'
import ScheduleGraph from './ScheduleGraph.js'
import DefaultLayout from 'layouts/DefaultLayout'

export default  (store) => ({
  path: '/schedule/',
  component: DefaultLayout,
  indexRoute: { onEnter: (nextState, replace) => replace('/schedule/list') },
  childRoutes: [
    ScheduleList(store),
    AddSchedule(store),
    ScheduleGraph(store)
  ]
})
