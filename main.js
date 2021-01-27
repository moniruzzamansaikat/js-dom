// getNamedItem()
// takes the attribute node  for the specific  value of an element

const myDiv = document.querySelector('div')
console.log(myDiv.attributes.getNamedItem('xxx').value) // yyy
console.log(myDiv.attributes.getNamedItem('aaa').value) // bbb
