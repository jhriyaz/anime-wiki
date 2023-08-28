let searchButton=document.getElementById('searchBtn')
let searchInput=document.getElementById('searchInput')
searchButton.addEventListener('click', function(){
    searchInput.classList.remove('hidden')
    searchInput.parentElement.classList.add('border-2')
})
