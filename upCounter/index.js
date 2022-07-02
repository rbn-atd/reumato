//document.getElementById("count-el").innerText = 5



//intialise count as 0
let count = 0
let saveLine = "Previous logs: "

//listen for increment button clicks
//increment stored value as button is clicked
//update displayed value

function increment() {
    count+=1
    document.getElementById("count-el").innerText = count
}

function saveData() {
    let time = new Date()
    saveLine += "\n " + count +" @ "+time
    document.getElementById("save-data").innerText = saveLine
}

function reset() {
    count = 0 
    saveLine = "Previous logs: "
    document.getElementById("count-el").innerText = count
    document.getElementById("save-data").innerText = "Previous logs:"
}