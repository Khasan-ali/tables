let elSearch = document.querySelector('.search')
let table = document.getElementById('userData')
let elResultNumber = document.querySelector('.resultNumber')

function render(date) {

    
    date.forEach(dates => {
        let row = `
        <tr>
        <td>${dates.id}</td>
        <td>${dates.name}</td>
        <td>${dates.username}</td>
        <td>${dates.email}</td>
        <td>${dates.address.street}</td>
        <td>${dates.phone}</td>
        <td>${dates.website}</td>
        <td>${dates.company.name}</td>
        </tr>
        `
        
        table.innerHTML += row
    })
}

render(data)

elSearch.addEventListener('input', () => {
    let resultArr = []

    data.forEach(row => {
        if(row.name.toLowerCase().includes(elSearch.value.toLowerCase()) || 
        row.username.toLowerCase().includes(elSearch.value.toLowerCase()) || 
        row.email.toLowerCase().includes(elSearch.value.toLowerCase())){
            resultArr.push(row)
        }
    })

    table.innerHTML = null
    elResultNumber.textContent = resultArr.length
    render(resultArr)
})