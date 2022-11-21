const form = document.querySelector('.form')
const button = document.querySelector('.button')
const ul = document.createElement('ul')
const div = document.querySelector('.list')
const input = document.querySelector('.input')
div.append(ul)
button.textContent = '+'

const arr = [
  { text: 'Начать изучать DOM', done: true },
  { text: 'Начать изучать CSS', done: true },
  { text: 'Начать изучать REACT', done: false },
]

function render(array) {
  ul.textContent = ''
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li')
    li.className = 'li'
    li.textContent = array[i].text
    li.style.listStyle = 'none'
    ul.append(li)
    const del = document.createElement('button')
    del.className = 'xButton'
    del.textContent = 'x'
    li.append(del)
    del.addEventListener('click', () => {
      remove(i)
    })
    const input2 = document.createElement('input')
    input2.type = 'checkbox'
    li.prepend(input2)
    input2.addEventListener('click', () => {
      if (input2.checked) {
        li.style.backgroundColor = 'red'
      } else {
        li.style.backgroundColor = 'none'
      }
      if (input2) {
        checkTodo(i)
      }
    })
  }
}
render(arr)

function remove(index) {
  arr.splice(index, 1)
  render(arr)
}

function addToDo(text) {
  arr.push({ text: text, done: true })
  render(arr)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value == false || input.value.length < 2) {
    return
  } else {
    addToDo(input.value)
  }
  input.value = ''
})

function checkTodo(index) {
  arr[index].done = !arr[index].done
  console.log(arr)
}
