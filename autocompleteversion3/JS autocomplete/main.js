var index = 0;
var count;
var nameOnEnter;
function suggestion(name,eventact){
    
            
     var d =0;
        if(eventact.keyCode==13)
            {
                display(document.getElementsByClassName("selected")[0].innerHTML, eventact);
                return;
            }
    var flag = 0;
    var tempnames;
    document.getElementById("clear").innerHTML="X";
       var names = [
       "Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
                names.sort();
            
           if(name.length==0) {
               var myNode = document.getElementById("list");
               myNode.innerHTML = '';
           }
         else {
           var myNode = document.getElementById("list");
                   myNode.innerHTML = '';

               var ul = document.getElementById("list");
             
           for (var i = 0; i < names.length; i++) {
                  var lowercasename = names[i].toLowerCase();
                  var lowname = name.toLowerCase();
               if(lowercasename.includes(lowname)) {
               var li = document.createElement("li");
              
               li.setAttribute("onclick", "display('"+names[i]+"')");
               if(d==0)
                  {
                    li.setAttribute("class","selected")
                  }
                else{
                    li.setAttribute("class","unselected");
                    }
               li.setAttribute("id",d);
                   d++;
               ul.appendChild(li);
               li.innerHTML = names[i];
                   flag=1;
               }
           }
             count = d-1;
           if(flag==0) {
                var li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = "Nothing Found";
                }
            }
            if(document.getElementById("type-here").value=="")
            {
                document.getElementById("clear").innerHTML="";
            }
             var charcode = eventact.keyCode;
    
             if(charcode==38)
                 {  document.getElementById("0").className="unselected";
                     index--;
                    console.log(d);
                     if(index<=0)
                     {   index=0;}
                        console.log(d+"work");
                     console.log(names.length+" "+index);
                     document.getElementById(index+1).className="unselected";
                     document.getElementById(index).className="selected";
                     console.log(document.getElementById(index));
                     nameOnEnter = document.getElementById(index).value;
                     document.getElementById(index).scrollIntoView(false);
                 }
             else if(charcode==40)
                 {   document.getElementById("0").className="unselected";
                     index++;
                    console.log(d);
                     if(index>=count)
                     { index=count;}
                        console.log(d+"work");
                     console.log(names.length+" "+index);
                     
                     document.getElementById(index-1).className="unselected";
                     
                     document.getElementById(index).className="selected";
                     nameOnEnter = document.getElementById(index).innerHTML;
                     console.log(document.getElementById(index));
                     document.getElementById(index).scrollIntoView(false);
                     
                     //console.log("working2"); 
                 }
           
        }
       function display(name) {
           document.getElementById("type-here").value = name;
           document.getElementById("list").innerHTML="";
       }
        function display(name, eventact) {
            if(eventact.keyCode==13)
            {document.getElementById("type-here").value = name;
             document.getElementById("list").innerHTML="";}
       }
       function onClickBlur() {
             if (document.activeElement.id != "type-here") {
                 document.getElementById("list").style.display = "none";
             }
           else {
               document.getElementById("list").style.display = "block";
           }
       }
       function clearup(){
  
            document.getElementById("type-here").value="";
            document.getElementById("clear").innerHTML = "";
        }


       

        
