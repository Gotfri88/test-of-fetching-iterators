const ui = new UI
const user = new User


function getUser(){
user.getUser()
        .then(results =>{
            ui.paint(results)
        })
        .catch(err =>{console.log(err)})
}
getUser()

   




