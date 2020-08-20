import index from "../../view/algorithm/index"
import ThreePointFix from "../../view/algorithm/ThreePointFix";

export default [
  {
    path:'/table',
    name: 'table',
    component:index,
    children: [
      {
        path: '/ThreePointFix',
        name: 'ThreePointFix',
        component: ThreePointFix
      }
    ]
  }
]
