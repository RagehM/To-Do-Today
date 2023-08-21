                var listItems = document.querySelectorAll('#list li');
                const inputbox = document.getElementById("input")
                const listcontainer = document.getElementById("list");
                var task=document.getElementById('task');
                listcontainer.addEventListener("click",function(e){
                    if(e.target.tagName==="LI"){
                        e.target.classList.toggle("completed");
                        savedata();
                    }
                })
                
                var myList = document.getElementById('list');
                
                myList.addEventListener('dblclick', function(event) {
                if (event.target.tagName.toLowerCase() === 'li') {
                    event.target.remove();
                    task.play();
                    savedata();
                }
                });

                document.getElementById("music").addEventListener("click", turn_on_or_of);
                var element = document.getElementById("music");
                var audio=document.getElementById('relaxing');
                var running=false;
                function turn_on_or_of(){
                    if(running===false){
                        audio.play();
                        document.getElementById("relaxing").muted = false;
                        element.style.color = "white";
                        running=true;
                    }
                    else{
                        audio.pause();
                        element.style.color = "black";
                        running=false;
                    }
                }
                

                function addtask(){
                    if(inputbox.value===''){
                        alert("you must write something to be added");
                    }
                    else{
                        let li=document.createElement("li");
                        li.innerHTML=inputbox.value;
                        listcontainer.appendChild(li);
                        inputbox.value= "";
                    }
                    savedata();
                }
                
                function savedata(){
                    localStorage.setItem("data",listcontainer.innerHTML);
                }
                function showtask(){
                    listcontainer.innerHTML=localStorage.getItem("data");
                }
                showtask();