//import { Button } from "antd"

let mylibrary = []




function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.read = read
    //this.info = this//function() {return this.title,this.author,this.read}
}

const player = new book('The Hobbit', 'by J.R.R. Tolkien', '295 pages', 'not read yet')



function addBookToLibrary(book) {
    mylibrary.push(book)
}

function render(mylibrary) {

    const clearTable = document.getElementById('book').innerHTML = ''
    mylibrary.forEach((book, i) => {
        const myKeys = Object.keys(mylibrary[i]).reverse()
        const tableRef = document.getElementById('book')
        //console.log(tableRef)
        const newBook = tableRef.insertRow(i)
        
        myKeys.forEach((key) => {
            const newCell = newBook.insertCell(key)
            const newText = document.createTextNode(book[key]);
            //const delButton = newCell.innerHTML = '<input type="button" value="Delete Row" onclick="console.log(8)">'
            newCell.appendChild(newText)
            //newCell.appendChild(delButton)
        })
        const newCell = newBook.insertCell(myKeys.length)
        console.table(mylibrary)
        const delButton = document.createElement('div')
        delButton.innerHTML = `<input id= delRow${i} type="button" value="Delete Row" onclick="delFunction(this.id)">`
        newCell.appendChild(delButton)
    })

}
    
    
    function delFunction(buttonId){
        //    let i = table Button.rowcount 
         //   set table.row(i) inner html = ''
         console.log(buttonId)
         let tableBody = document.getElementById(buttonId)
         tableBody.parentElement.parentElement.parentElement.innerHTML=''
         console.log(tableBody)
        }


let getForm = document.getElementById('newBook')
//console.log(getForm)
getForm.onsubmit = ((event) => {
    event.preventDefault()
    console.log(document.getElementById('authResponse').value);

    let author = document.getElementById('authResponse').value
    let title = document.getElementById('titleResponse').value
    const newBook = new book(title,author,'TBC','Not read yet')
    addBookToLibrary(newBook)
    render(mylibrary)
    console.table(mylibrary)
})
//addBookButton.onclick(new book())



addBookToLibrary(player)
//console.log(mylibrary)
//console.table(mylibrary)
render(mylibrary)
