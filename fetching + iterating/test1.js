const dataArr = [1,2,3,4,5]

function iterate(numbers){
    let index = 0
    return {
        next: function(){
            return index < numbers.length ?
            {value: numbers[index++], done: false} :
            {done: true} 
        }
    }
}

const data = iterate(dataArr)


document.getElementById('btn').addEventListener('click',click)

function click(){
   console.log(data.next())
}

