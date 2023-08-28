let seriesContainer = document.getElementById('seriesContainer')
let searchButton2=document.getElementById('searchBtn')
 let searchInput2=document.getElementById('searchInput')

searchInput2.addEventListener('keyup', ()=>{
    
    fetData(searchInput2.value)
    
})
async function fetData(tt){
    seriesContainer.innerHTML = ''
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${tt}`)
    const data= await res.json()
    post(data)
}
fetData('')
let num=1
function post(data){
    
        let serieses = data.data
        
        for (let series of serieses) {
           
            num++
            if(num===20){
                num=1
                break
            }
            let seriesName = series.title
            let seriesImage = series.images.webp.image_url
            let seriesAiredFrom = series.aired.from.split('T', 1);
            let seriesAiredTo=series.aired.to
            let animeId=series.mal_id
            let seriesTittlesxx = series.titles;
            let seriesTittles = []
            for (let seriesTittle of seriesTittlesxx) {
                seriesTittles.push(seriesTittle.title)
            }
           
            let seriesGenreArray=[]
            let seriesGenres = series.genres
            for (let seriesGenre of seriesGenres) {
                seriesGenreArray.push(seriesGenre.name)
                
            }
            
            let seriesDuration = series.duration
            let SeriesEpisode = series.episodes

            const div = document.createElement('div')
            let seriesDiv = `<div class="card card-side bg-base-100 shadow-xl p-3 grid grid-cols-3 items-center h-[500px] overflow-scroll">
            <img src=${seriesImage} class="col-span-1"/>
            <div class="card-body  col-span-2">
            <h2 class="card-title">${seriesName}</h2>
            <p>
            
            <span class="text-[red]">Aired :</span></br> <b>From :</b>${seriesAiredFrom} </br>
            <b>To :</b>${seriesAiredTo} </br>
            Tittles:${seriesTittles} </br>
            Duration :${seriesDuration}</br>
            Genre :${seriesGenreArray}</br>
            Episode : ${SeriesEpisode}</br>
            </p>
            <div class="card-actions justify-center pt-2">
            <a href=https://myanimelist.net/anime/${animeId} target="_blank"><button class="btn btn-primary">Details</button></a>
            </div>
            </div>
            </div>`
            div.innerHTML = seriesDiv

            seriesContainer.appendChild(div)

        }
    } 

