const Initial_state = {
    data:[],
    fbuser:[],
}
// export default (state = Initial_state , action)=> {
//     switch (action.type){
//         case "SETDATA":
//             return({
//                 data: action.obj
//             })
//     }
//     return state;
// }
const reducer = (state = Initial_state, action) => {
    switch (action.type) {
      case "SETDATA": {
        return({
          ...state,
          data: action.add
        });
        // return { ...state, data: state.data.push(action.obj) };
        // console.log(action.obj)
      } 
      case "SETUSER": {
        return ({ 
          ...state,
          fbuser: action.payload
         });
        // console.log(action.obj)
      } 
        // return { ...state, data: state.data.push(action.obj) };
        // console.log(action.obj)
      default: {
        return state
      }
    }
  }
export default reducer;