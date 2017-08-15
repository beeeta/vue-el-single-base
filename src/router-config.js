

const one = {
  template:"<div>one<router-link to=\"/one/suboneone\">sub one one</router-link>"+
  "<router-link to=\"/one/subonetwo\">sub one two</router-link><router-view></router-view></div>"
}
const two = {
  template:"<div>two</div>"
}
const subOneOne={
  template:"<div>subOneOne</div>"
}
const subOneTwo={
  template:"<div>subOneTwo</div>"
}

export default [
  {
    path:'/one',component:one,
    children:[{
      path:'suboneone',
      component:subOneOne
    },{
      path:'subonetwo',
      component:subOneTwo
    }
    ]
  },
  {
    path:'/two',component:two,
  }
]
