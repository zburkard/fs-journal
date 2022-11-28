# MVC

Asynchronous Code
AXIOS used to make importing APIs easier. Wraps the fetch method.
Used when our code leaves our machine
awaits a response from the user/API


- network requests should start in try-catch method
use GET to retrieve data from API 
use POST to send data to the API
use DELETE to delete data from an API
use PUT to edit data in the API


Schema is like a model for information coming from a DB.

get List Template(){
  return this.make + this.model
}

when using axios you should console.log(res.data)
const res = await axios.get('url')
console.log(res.data)

dump data to the page first
no need to make it look pretty

name of input field should match the model of the data in the database you are pushing data to.

static lets you access template from the model
static usually gets passed info 
static ListTemplate(spell){

}

ctrl + . to declare method



