
const a = document.querySelectorAll(".item")
const b=document.getElementById("hey")
const c=document.getElementById("mey")
const filter1=document.getElementById("filter1")
const filter2=document.getElementById("filter2")
const filter3=document.getElementById("filter3")
const filter4=document.getElementById("filter4")
const filter=document.getElementById("filter")

const line=document.getElementById("line")
const parline=document.getElementById("parline")

 

filter1.addEventListener('click',man)
window.addEventListener('load',man)



function man() {


    line.style.position="absolute";
    line.style.left="15%"
    line.style.transition="ease 0.5s"
   
   

    a.forEach(item=>item.innerHTML="")
    let i=0
    let yeni=[]
    const s = fetch('https://pixabay.com/api/?key=22816734-05c748ac513837d7f3fe169ff&q=apple+laptop&image_type=photo' )
    Promise.all([s]).then(values => {
        return Promise.all(values.map(r => r.json()))//return Promise.all


    }).then(values => {

        
        console.log(values)
        
        for (i; i < 8; i++) {
            a[i].innerHTML+=`<img src="${values[0].hits[i].previewURL}"/>`
            
            
        }
      
        
        
            console.log(i)
          
       

  
        
    })

}
filter2.addEventListener("click", () => {
    line.style.position="absolute";
    line.style.left="35%"
    line.style.transition="ease 0.5s"
    a.forEach(item=>item.innerHTML="")
    let i=0
    let yeni=[]
    const s = fetch('https://pixabay.com/api/?key=22816734-05c748ac513837d7f3fe169ff&q=new+fruit&image_type=photo')

    Promise.all([s]).then(values => {
        return Promise.all(values.map(r => r.json()))


    }).then(values => {

        
        console.log(values)
        
        for (i; i < 8; i++) {
            a[i].innerHTML+=`<img src="${values[0].hits[i].previewURL}"/>`
            
            
        }
      
        
        
            console.log(i)
          
       

  
        
    })

})
filter3.addEventListener("click", () => {
    line.style.position="absolute";
    line.style.left="56%"
    line.style.transition="ease 0.5s"
    a.forEach(item=>item.innerHTML="")
    let i=0
    let yeni=[]
    const s = fetch('https://pixabay.com/api/?key=22816734-05c748ac513837d7f3fe169ff&q=yellow+plate&image_type=photo' )
    Promise.all([s]).then(values => {
        return Promise.all(values.map(r => r.json()))//return Promise.all


    }).then(values => {

        
        console.log(values)
        
        for (i; i < 8; i++) {
            a[i].innerHTML+=`<img src="${values[0].hits[i].previewURL}"/>`
            
            
        }
      
        
        
            console.log(i)
          
       

  
        
    })

})
filter4.addEventListener("click", () => {
    line.style.position="absolute";
    line.style.left="76%"
    line.style.transition="ease 0.5s"
    a.forEach(item=>item.innerHTML="")
    let i=0
    let yeni=[]
    const s = fetch('https://pixabay.com/api/?key=22816734-05c748ac513837d7f3fe169ff&q=modern+house&image_type=photo' )
    Promise.all([s]).then(values => {
        return Promise.all(values.map(r => r.json()))//return Promise.all


    }).then(values => {

        
        console.log(values)
        
        for (i; i < 8; i++) {
            a[i].innerHTML+=`<img src="${values[0].hits[i].previewURL}"/>`
            
            
            
        }
      
        
        
            console.log(i)
          
       

  
        
    })

})






