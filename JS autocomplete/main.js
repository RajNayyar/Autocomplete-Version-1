function suggestion(name){     
       var flag = 0;
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
               if(lowercasename.indexOf(name.toLocaleLowerCase()) != -1){
               var li = document.createElement("li");
               li.setAttribute("onclick", "display('"+names[i]+"')");
               ul.appendChild(li);
               li.innerHTML = names[i];
                   flag=1;
               }
           }
           if(flag==0) {
                var li = document.createElement("li");
                ul.appendChild(li);
                li.innerHTML = "Nothing Found";
                }
            }
        }
       function onClickBlur() {
          document.getElementById("list").innerHTML="";
       }
       function display(name) {
           document.getElementById("type-here").value = name;
           document.getElementById("list").innerHTML="";
       }
       

