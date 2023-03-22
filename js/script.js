// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm')
let empTab = document.querySelector('#employees')
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.querySelector('#id')
    let empName = document.querySelector('#name')
    let empExt = document.querySelector('#extension')
    let empEmail = document.querySelector('#email')
    let empDept = document.querySelector('#department')
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTab.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell()
    let cellName = row.insertCell()
    let cellExt = row.insertCell()
    let cellEmail = row.insertCell()
    let cellDept = row.insertCell()
    

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(empId)
    cellName.appendChild(empName)
    cellExt.appendChild(empExt)
    cellEmail.appendChild(empEmail)
    cellDept.appendChild(empDept)
    

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    let textDel = document.createTextNode('X')
    deleteBtn.appendChild(textDel)
    let cellDel = row.insertCell()
    cellDel.appendChild(deleteBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    cellId.focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    let empCount = document.querySelector('#empCount')
    
})

// DELETE EMPLOYEE
empTab.addEventListener('click', (e) => {
    empTab.deleteRow(0)
})