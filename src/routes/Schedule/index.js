import ScheduleList from './scheduleList.js'
import ScheduleIndex from './scheduleIndex.js'
import AddSchedule from './addSchedule.js'
import DefaultLayout from 'layouts/DefaultLayout'

export default  (store) => ({
  path: '/schedule/index',
  component: DefaultLayout,
  indexRoute: { onEnter: (nextState, replace) => replace('/schedule/index') },
  childRoutes: [
    ScheduleIndex(store),
    ScheduleList(store),
    AddSchedule(store),
  ]
})
