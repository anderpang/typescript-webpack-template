
let app:HTMLDivElement|null=document.querySelector("#app");

let str:string="<img width=\"64\" src=\"static/wuweierwei.png\" alt=\"\" /><br />Hello World";

app!.style.cssText="text-align:center;"
app!.innerHTML=str;