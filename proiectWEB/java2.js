    function dropdownMenu() {
    var x = document.getElementById("dropdownClick")
    if(x.className === "topnav") {
        x.className += " responsive";
    } 
    else 
    {
        x.className = "topnav";   
    }
}   

var t =0;
function Formular(){
    if(t<1){
        x();
    t++;
    }
}


function x3(){
    var z4=document.createElement("br");
    var f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action',"submit.php");
    
    var i = document.createElement("input");
    i.setAttribute('type',"text");
    i.setAttribute('name',"Nume");
    
    var s = document.createElement("label");
    s.innerHTML = "Nume de updatat:";
           s.id = "s";
    f.appendChild(z4);
    f.appendChild(s);
    f.appendChild(i);
    var z=document.createElement("br");
    var z1=document.createElement("br");
    var z2=document.createElement("br");
    var z3=document.createElement("br");
    var i1 = document.createElement("input");
    i1.setAttribute('type',"text");
    i1.setAttribute('Prenume',"Prenume");
    
    var s1 = document.createElement("label");
            s1.innerHTML = "Prenume de updatat:";
           s1.id = "s1";
    f.appendChild(z);
    f.appendChild(s1);  
    f.appendChild(i1);
    
    var i2 = document.createElement("input");
    i2.setAttribute('type',"text");
    i2.setAttribute('Comentariu',"Comentariu");
    
    var s2 = document.createElement("label");
            s2.innerHTML = "Comentariu de updatat:";
           s2.id = "s2";
    f.appendChild(z1);
    f.appendChild(s2);
    f.appendChild(i2);

    var i3= document.createElement("input");
    i3.setAttribute('type',"text");
    i3.setAttribute('Comentariu',"Comentariu");
    
    var s3 = document.createElement("label");
            s3.innerHTML = "Id de updatat:";
           s3.id = "s2";
    f.appendChild(z3);
    f.appendChild(s3);
    f.appendChild(i3);

    i.id="nm1";
    i1.id="pnm1";
    i2.id="cmn1";
    i3.id="ids1";
     document.getElementById("form").appendChild(f);
    }

    var tt=0;
function update(){
    if(tt<1){
        x3();
    tt++;
    }
}

function up(){

    let Nume= document.getElementById("nm1").value;
    let Prenume = document.getElementById("pnm1").value;
    let Comentariu=document.getElementById("cmn1").value;
    if(Nume!="" && Prenume!="" && Comentariu!=""){
      fetch('http://localhost:3000/Comentarii/'+document.getElementById("ids1").value, {
        method:'PUT',
       headers: {
         'Accept': 'application/json, text/plain, /',
          'Content-type':'application/json'
        },
        body:JSON.stringify({Nume:Nume,Prenume:Prenume,Comentariu:Comentariu})
      })
      .then((res) => res.json())
     .then((data) => console.log(data))
      alert("Adaugarea a fost terminata");
      xy();
      document.getElementById("nm").value="";
      document.getElementById("pnm").value="";
      document.getElementById("cmn").value="";
    }
    else
    {
        alert("Campurile sunt goale!")
    }
}








function x(){
    var z3=document.createElement("br");
    var f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action',"submit.php");
    
    var i = document.createElement("input");
    i.setAttribute('type',"text");
    i.setAttribute('name',"Nume");
    
    var s = document.createElement("label");
    s.innerHTML = "Nume:";
           s.id = "s";
    f.appendChild(z3);
    f.appendChild(s);
    f.appendChild(i);
    var z=document.createElement("br");
    var z1=document.createElement("br");
    var z2=document.createElement("br");
    var i1 = document.createElement("input");
    i1.setAttribute('type',"text");
    i1.setAttribute('Prenume',"Prenume");
    
    var s1 = document.createElement("label");
            s1.innerHTML = "Prenume:";
           s1.id = "s1";
    f.appendChild(z);
    f.appendChild(s1);  
    f.appendChild(i1);
    
    var i2 = document.createElement("input");
    i2.setAttribute('type',"text");
    i2.setAttribute('Comentariu',"Comentariu");
    
    var s2 = document.createElement("label");
            s2.innerHTML = "Comentariu:";
           s2.id = "s2";
    f.appendChild(z1);
    f.appendChild(s2);
    f.appendChild(i2);
    i.id="nm";
    i1.id="pnm";
    i2.id="cmn";
     document.getElementById("form").appendChild(f);
    }

function x1(){
    let Nume= document.getElementById("nm").value;
    let Prenume = document.getElementById("pnm").value;
    let Comentariu=document.getElementById("cmn").value;
    if(Nume!="" && Prenume!="" && Comentariu!=""){
    fetch('http://localhost:3000/Comentarii', {
       method:'POST',
       headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-type':'application/json'
        },
       body:JSON.stringify({Nume:Nume, Prenume:Prenume,Comentariu:Comentariu})
     })
    .then((res) => res.json())
      .then((data) => console.log(data))
      alert("Adaugarea a fost terminata");
      xy();
      document.getElementById("nm").value="";
      document.getElementById("pnm").value="";
      document.getElementById("cmn").value="";
    }
    else
    {
        alert("Campurile sunt goale!")
    }
}

    function x2(url){
        var item =document.getElementById("ste").value;
        return fetch(url + '/' + item, {
              method: 'delete'
            }).then(res =>
              response.json().then(json => {
            
                return json;
              })
            );
            }
          



    var xhttp = new XMLHttpRequest();
    function xy(){ 
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        var x=Object.keys(data).length;
        alert("Exista "+x+" comentarii!")
        var i;
        var c=" ";
        for(i=0;i<x;i++){
            c=c+"Nume: "+(JSON.stringify(data[i].Nume))+"<br>"+"Prenume: "+(JSON.stringify(data[i].Prenume))+"<br>"+"Comentariu: "+(JSON.stringify(data[i].Comentariu))+"<br>"+"Id: "+(JSON.stringify(data[i].id))+"<br>";
          document.getElementById("get").innerHTML=c;
        }
        }
    };
    xhttp.open("GET", "http://localhost:3000/Comentarii", true);
    xhttp.send();
   }

function cont(){
    alert("Numar telefon:0244486"+"\n"+"Email:sneaker@gmail.com"+"\n"+"Facebook: Sneakers-Hop");
}