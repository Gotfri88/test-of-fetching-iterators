class UI {
    
    constructor(){
        this.name = document.getElementById('outputName')
        this.userName = document.getElementById('outputUserName')
        this.city = document.getElementById('outputCity')
        this.company = document.getElementById('outputCompany')
    }

    paint(data){
        const profile = profileIterator(data)
       
        document.getElementById('btn').addEventListener('click', nextProfile)
        
        function nextProfile(){
            const currentProfile = profile.next().value
            if(currentProfile !== undefined){
                document.getElementById('box').innerHTML = `
                    <p>Name:</p>
                    <p id="outputName">${currentProfile.name}</p>

                    <p>Username:</p>
                    <p id="outputUserName">${currentProfile.username}</p>

                    <p>City:</p>
                    <p id="outputCity">${currentProfile.address.city}</p>

                    <p>Company:</p>
                    <p id="outputCompany">${currentProfile.company.name}</p>  
                `
            }   else{
                // No more profiles
                window.location.reload()
            }
        }
        function profileIterator(profiles){
            let nextProfile = 0
            return{
               next: () =>{
                return nextProfile < profiles.length ?
                {value: profiles[nextProfile++], done:false}:
                {done: true}
               }
            }
        }
    } 
   
}


