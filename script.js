const key="f566b422";
const container=document.querySelector(".container");
const search=document.querySelector(".container button");
const input=document.querySelector(".container input");

search.addEventListener("click",()=>{
    let movie=input.value;
        
    document.querySelector(".cast span").innerHTML=""
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${key}`).then((res)=>{
        return res.json();
    }).then((data)=>{
        if(data.Response=="False"){
            console.log("movie not found")
            container.style.height="205px";
            document.querySelector(".not-found").classList.add("fadeIn");
            document.querySelector(".movie-details").style.opacity="0";
            document.querySelector(".Name").style.opacity="0";
            document.querySelector(".Name").style.marginBottom ="20px";
            return;    
        }
        document.querySelector(".Name").style.opacity="1";
        document.querySelector(".movie-details").style.opacity="0";
        document.querySelector(".movie-details").style.scale="0";
        document.querySelector(".movie-details").classList.add("fadeIn");
        document.querySelector(".not-found").classList.remove("fadeIn");
        document.querySelector(".not-found").style.opacity="0";

        document.querySelector(".container").classList.add("fadeIn");
        document.querySelector(".container").style.height="925px";

        document.querySelector(".poster img").src=`${data.Poster}`;
        // document.querySelector(".poster img").src=`${data.Poster}`;
        document.querySelector(".rating").innerHTML=data.imdbRating;
        document.querySelector(".dates").innerHTML=document.querySelector(".dates").innerHTML + data.Released;
        document.querySelector(".plot").innerHTML=`<h2 class="plottext">Plot:</h2>` + data.Plot;
        let actors=data.Actors.split(",")
        for(let i=0;i<actors.length;i++){
            if(i==0){
                document.querySelector(".cast span").innerHTML=document.querySelector(".cast span").innerHTML + actors[i];
            }
            else{
            document.querySelector(".cast span").innerHTML=document.querySelector(".cast span").innerHTML + "," + actors[i];
            }
        }
        let genres=data.Genre.split(",")
        for(let i=0;i<3;i++){
            document.querySelector(`.genre-${i+1}`).innerHTML=genres[i];
        }
        document.querySelector(".Name").innerHTML=data.Title;
        console.log(data);
    })
})

document.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        let movie=input.value;
        
    document.querySelector(".cast span").innerHTML=""
    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${key}`).then((res)=>{
        return res.json();
    }).then((data)=>{
        if(data.Response=="False"){
            console.log("movie not found")
            container.style.height="205px";
            document.querySelector(".not-found").classList.add("fadeIn");
            document.querySelector(".movie-details").style.opacity="0";
            document.querySelector(".Name").style.opacity="0";
            document.querySelector(".Name").style.marginBottom ="20px";
            return;    
        }
        document.querySelector(".Name").style.opacity="1";
        document.querySelector(".movie-details").style.opacity="0";
        document.querySelector(".movie-details").style.scale="0";
        document.querySelector(".movie-details").classList.add("fadeIn");
        document.querySelector(".not-found").classList.remove("fadeIn");
        document.querySelector(".not-found").style.opacity="0";

        document.querySelector(".container").classList.add("fadeIn");
        document.querySelector(".container").style.height="925px";

        document.querySelector(".poster img").src=`${data.Poster}`;
        // document.querySelector(".poster img").src=`${data.Poster}`;
        document.querySelector(".rating").innerHTML=data.imdbRating;
        document.querySelector(".dates").innerHTML=document.querySelector(".dates").innerHTML + data.Released;
        document.querySelector(".plot").innerHTML=`<h2 class="plottext">Plot:</h2>` + data.Plot;
        let actors=data.Actors.split(",")
        for(let i=0;i<actors.length;i++){
            if(i==0){
                document.querySelector(".cast span").innerHTML=document.querySelector(".cast span").innerHTML + actors[i];
            }
            else{
            document.querySelector(".cast span").innerHTML=document.querySelector(".cast span").innerHTML + "," + actors[i];
            }
        }
        let genres=data.Genre.split(",")
        for(let i=0;i<3;i++){
            document.querySelector(`.genre-${i+1}`).innerHTML=genres[i];
        }
        document.querySelector(".Name").innerHTML=data.Title;
        console.log(data);
    })
    }
})
