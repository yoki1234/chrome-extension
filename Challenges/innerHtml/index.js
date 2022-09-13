const wrapper =document.getElementById("wrap");
wrapper.innerHTML=`<button onclick="thank()">i just fount new way to manupulate html</button>`

function thank(){
    wrapper.innerHTML += "<p>Thank you sharing!.</p>"
}