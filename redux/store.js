import {createStore} from 'redux'
import reducer from './reducer'

 const store = createStore(reducer)

// store.dispatch(updateUser({ foo: 'foo' }))
// store.dispatch(updateUser({ bar: 'bar' }))
// store.dispatch(updateUser({ foo: 'baz' }))

// store.dispatch(addContact({ name: 'Mannu j', number: '8971011198' }))
// store.dispatch(addContact({ name: 'Mannu kumar', number: '4580098998' }))

// console.log(store.getState())

export default store