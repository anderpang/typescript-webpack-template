
let app:HTMLDivElement|null=document.querySelector("#app");

let str:string="Hello World";

app!.style.cssText="text-align:center;"
app!.innerHTML=str;