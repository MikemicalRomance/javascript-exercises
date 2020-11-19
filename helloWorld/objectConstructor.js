function book(title,author,pages,read){
    this.title = title
    this.author = author
    this.read =  read 
    this.info = function() {console.log(title)}
}

const player = new book('The Hobbit' ,'by J.R.R. Tolkien', '295 pages', 'not read yet')
player.info()

