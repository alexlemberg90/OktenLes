let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

sessionsList.map(session => {
    document.body.innerHTML += `<p>${session}</p>`
})