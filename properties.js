// getNamedItem()
// takes the attribute node  for the specific  value of an element

const myDiv = document.querySelector('div')
// console.log(myDiv.attributes.getNamedItem('xxx').value) // yyy
// console.log(myDiv.attributes.getNamedItem('aaa').value) // bbb

// isId Property
// NOTE: This is not supported anymore in modern browers
// .log(myDiv.attributes[1].isId) // undefined in chrome (my case)

// item()
//  It takes an index of which attribute you wanna get | It is similar to the array indexing []
// console.log(myDiv.attributes.item(0)) // aaa="bbb"
// console.log(myDiv.attributes.item(0).value) // bbb

// length
// This property returns the number of attributes of an element
// console.log(myDiv.attributes.length) // 3

// name
// This property returns the name of an attribute
// console.log(myDiv.attributes[0].name) // aaa

// removeNamedItem(type)
// remove the type attribute from an element
// myDiv.attributes.removeNamedItem('aaa') // myDiv has no aaa attribute

// setNamedItem(type)
// This method will add attribute value to an element, if its already defined it replaced by the new one
const attr = document.createAttribute('class')
attr.value = 'red-color'
myDiv.attributes.setNamedItem(attr) // myDiv has now a class with 'red-color'

// specified
// this property find out an attribute has been specified or not
// const x = document.createAttribute('someAttribute')
// console.log(x.specified) // true
// console.log(myDiv.attributes[0].specified) // true

// value
// this property returns the value of an attribute
// console.log(myDiv.attributes[0].value) // get myDiv's first attribute's value
