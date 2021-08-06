/* let username="enesayyildiz";
console.log(username);
let uzanti="hotmail"


let email=username+"@"+uzanti+".com"

console.log(email)


let info=`Hello ${username}! How are you today?

Welcome to web site.

Please check

Is your email adress correct? ${email}


`
console.log(info);
 */
//010 DOM işlemleri
/* document.getElementById("paragraph").innerHTML="Selamlar";
document.getElementById("littleButton").addEventListener("click",clicked);
function clicked()

{
    alert("Butona Tıklandı!")
}
document.body.style.backgroundColor="turquoise";
let demo=document.getElementsByTagName("div");
console.log(demo);
let demo2=document.getElementsByTagName('*')
const element=document.querySelectorAll(".kedi,.kusu")
console.log(element.length); */

/* function calculate()
{
var radius=document.getElementById("radius").value;
console.log(radius);
var volume=4*(3.14)*radius*radius;
document.getElementById("volume").value=volume;

}
function begin()
{
    var isim=prompt("Lütfen isminizi girin","Bu alanı doldurmak zorunludur");
    console.log(`hoşgeldin ${isim}`)
} */


/* var liste = document.querySelector("ul");

var urun = document.querySelector("#veri"); 
var ekle = document.querySelector("#ekle");
console.log(!!2);

function add()
{


  // createElement ile yeni bir listItem (li) oluşturuyoruz
  var li=document.createElement("li"); 
  
  // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
  li.textContent=veri.value; 
  
  // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
  liste.appendChild(li);
              
  // Veri inputu içerisindeki metni siliyoruz.
  veri.value = "";
};    */

/* function calculate()
{
    let happy=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
  </svg>`;
  let sad=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`;
let angry=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-angry" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zm6.991-8.38a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1zm-6.552 0a.5.5 0 0 0-.448.894l1.009.504A1.94 1.94 0 0 0 5 6.5C5 7.328 5.448 8 6 8s1-.672 1-1.5c0-.247-.04-.48-.11-.686a.502.502 0 0 0-.166-.761l-2-1z"/>
</svg>`;
let neutral=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-expressionless" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>`;
let emoticon=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-wink" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"/>
</svg>`;
    let midterm=document.getElementById("midterm").value;
    let final=document.getElementById("final").value;
    console.log(midterm);
    console.log(final);
    let ort=(parseInt(midterm)+parseInt(final))/2;
    let ortInput=document.getElementById("ort");
    ortInput.value=ort;
    let sonuc=document.getElementById("sonuc");
    
   sonuc.innerHTML="Sonuç:";
if(midterm<=100&&final<=100)
{



    if (ort>=90) {
        sonuc.innerHTML+=" AA "+emoticon;
    }
    else if(ort>=85)
    {
        sonuc.innerHTML+=" BA "+happy;
    }
    else if(ort>=80)
    {
        sonuc.innerHTML+=" BB"+happy;
    }
    else if(ort>=75)
    {
        sonuc.innerHTML+=" CB "+happy;
    }
    else if(ort>=70)
    {
        sonuc.innerHTML+=" CC "+neutral;
    }
    else if(ort>=65)
    {
        sonuc.innerHTML+=" DC "+neutral;
    }
    else if(ort>=60)
    {
        sonuc.innerHTML+=" DD "+neutral;
    }
    else if(ort>=50)
    {
        sonuc.innerHTML+=" FD "+neutral;
    }
    else if(ort<50)  
    {
        sonuc.innerHTML+=" Başarısız "+sad;
    }
    else{
        sonuc.innerHTML+=" Lütfen sayısal değer girin "+angry;
    }
    
}
else{
    sonuc.innerHTML+="Adam akıllı değer gir."+angry
    ortInput.value="Hesaplanmadı";
    
}
} */
let name=prompt();
let usernameTag=document.getElementById("username");
usernameTag.textContent=name;

    let date=new Date();
    let clockTag=document.getElementById("clock")
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    clockTag.textContent=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${gunler[date.getDay()]}`;
    console.log(date);


    



