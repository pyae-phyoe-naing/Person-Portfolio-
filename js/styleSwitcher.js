
const links = document.querySelectorAll('.alternate-style'),
     totalLink = links.length;

function setActiveStyle(color){
    for(let i=0; i< totalLink; i++){
        // console.log(links[i].getAttribute('title'));
        if(color == links[i].getAttribute('title')){
          links[i].removeAttribute("disabled");
        }else{
          links[i].setAttribute("disabled",true);
        }
    }
}
// Body skin Light,Dark mod
let bodySkin = document.querySelectorAll('.body-skin'),
    totalBodySkin = bodySkin.length;
    for(let i=0; i<totalBodySkin; i++){
        bodySkin[i].addEventListener('change',function(){
            console.log(this.value);
            if(this.value === "dark"){
                // document.body.classList.add('dark');
                document.body.className = "dark";
            }else{
               // document.body.classList.remove('dark');
                document.body.className = "";

                
            }
        })
    }

document.querySelector('.toggle-style-switcher').addEventListener('click',function(){
    document.querySelector('.style-switcher').classList.toggle('open');
})