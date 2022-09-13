
// let myLeads = `["www.youtube.com"]`
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.hello.com");
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads);
// console.log(myLeads);
let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn =document.getElementById("delete-btn")

const leadsFromLocal=JSON.parse(localStorage.getItem("myLeads")) // from string to array



if(leadsFromLocal){
  myLeads = leadsFromLocal;
  render(myLeads)
}

function render(leads) {
  let listItems = ""
  for (let i = 0; i < leads.length; i++) {
      listItems += `
          <li>
              <a target='_blank' href='${leads[i]}'>
                  ${leads[i]}
              </a>
          </li>
      `
  }
  ulEl.innerHTML = listItems  
   /*-----another method-------*/
  // const li =document.createElement("li");
  // li.textContent=myLeads[i];
  // ulEl.append(li);
}

inputBtn.addEventListener("click", ()=> {
  myLeads.push(inputEl.value)
  inputEl.value = ""

  localStorage.setItem("myLeads",JSON.stringify(myLeads)) // it is converting array to string,so it can be stored in localstorage.
  render(myLeads)

  console.log(localStorage.getItem("myLeads"));
})

deleteBtn.addEventListener("dblclick",()=>{
   console.log("clicked");
   localStorage.clear();
   myLeads = []
   render(myLeads)
})
// console.log(leadsFromLocal);
// window.localStorage.setItem("myname","akshay ashok");
// let name =localStorage.getItem("myname");
//  console.log(name);
// localStorage.clear();





