const button=document.querySelectorAll('[data-butt]')
const background=document.getElementById('bg')
const tooltip=document.getElementById('tooltip')

function tool(){
  tooltip.classList.add("shakes")
}
const timeoff= setTimeout(tool,3000);

button.forEach((butt,index)=>{
    butt.addEventListener("mouseover",()=>{
        for(var i=0;i<button.length;i++){
            background.classList.remove("_bg"+i) // Removes all the previous classes(colors)
        }
        background.classList.add("_bg"+index);
        clearTimeout(timeoff);
        tooltip.classList.remove("shakes")
    })
})


