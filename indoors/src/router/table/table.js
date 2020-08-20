import index from "../../view/table/index"
import station from "../../view/table/station";

export default [
  {
    path:'/table',
    name: 'table',
    component:index,
    children: [
      {
        path: '/station',
        name: 'station',
        component: station
      }
    ]
  }
]
