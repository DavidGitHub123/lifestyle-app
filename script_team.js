const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener("input", (e) => filterData(e.target.value))


async function getData() {
    const res = await fetch("https://randomuser.me/api?results=50")
    const { results } = await res.json()

    //  Clear Results
    result.innerHTML = ""

    results.forEach(user => {
        const li = document.createElement("li")

        listItems.push(li)

        li.innerHTML = `
        <div class="team-format flex">
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
                <p>${user.email}</p>
                <p>${user.phone}</p>
            </div>
        </div>
        `
        result.appendChild(li)
    })
}


function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}


