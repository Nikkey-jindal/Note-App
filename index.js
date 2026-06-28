const btn1=document.getElementById("firstdiv");
const body=document.getElementById("body");

let data=JSON.parse(localStorage.getItem('notes')) || []
function getitem()
{
    data.map((main)=>{
        if(main)
        {
          display(main);
        }
        

    })
}


btn1.addEventListener('click',()=>{
   display();
});
function display(note=''){
    let div= document.createElement('div');
   div.setAttribute('class','main');
   let date=new Date().toLocaleString();
   div.innerHTML=` 
        <div class="part1">
                <button class="btn1">edit</button>
                <button class="btn2">remove</button>
            </div>
            <div class="part2"> </div>
            <textarea name="" id="hidden" class="hiddenn"></textarea>
            <div class="part3">${date}</div>`
             body.appendChild(div);  
            const btn2=div.querySelector(".btn1");
            const btn3=div.querySelector(".btn2")
            const part2 = div.querySelector(".part2");
            const text = div.querySelector("textarea");
   text.value = note;
part2.innerText = note;   
         

btn2.addEventListener('click',()=>{
    part2.innerText=text.value;
    text.classList.toggle("hiddenn");
    part2.classList.toggle("hiddenn");

})
btn3.addEventListener('click',()=>{
        div.remove();
        update();   
})

text.addEventListener('input',()=>{
    update();
})
}
function update()
{
    let textarea=document.querySelectorAll("textarea");
    data=[]
    textarea.forEach((e)=>{
        if(e)
        {
        data.push(e.value);
        }
    })
    localStorage.setItem('notes',JSON.stringify(data))
}
getitem();
update();
