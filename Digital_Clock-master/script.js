function updateTime(){
    let dateTime = new Date();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        let seconds = dateTime.getSeconds();
        let am = document.getElementById("am");
        if(hours >= 12){
            am.innerHTML = "PM";
        }else{
            am.innerHTML = "AM";
        }
        if(hours> 12){
            hours = hours -12;
        }
        document.getElementById("hr").innerHTML = hours;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("secs").innerHTML = seconds;
    }
    setInterval(updateTime,1000);
    let button=document.getElementById("button");
    button.addEventListener("mouseover",function(){
    this.innerText="partytime";
    })
    button.addEventListener("mouseout",function(){
    this.innerText="set alarm";
    })
    button.addEventListener("click", function(){
        let date = new Date();
        let hours = date.getHours();
        let wakeup = document.getElementById("wakeup");
        let lunch = document.getElementById("lunch");
        let evening = document.getElementById("evening");
        let night = document.getElementById("night");
        if(parseInt(wakeup.value)===hours){
            document.getElementById("message").innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
            document.getElementById("img2").src="./Morning.jpeg";
        }
        else if(parseInt(lunch.value)===hours){
            document.getElementById("message").innerText =
            "LET'S HAVE SOME LUNCH !!";
            document.getElementById("img2").src="./Lunch-Time.jpeg";
        }
        else if(parseInt(evening.value)===hours){
            document.getElementById("message").innerText =
            "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
            document.getElementById("img2").src="./";
        }
        else if(parseInt(night.value)===hours){
            document.getElementById("message").innerText =
            "CLOSE YOUR EYES AND GO TO SLEEP";
            document.getElementById("img2").src="./Night.jpeg";
        }
        let timing=document.getElementsByClassName("timing");
        timing[0].innerText=wakeup.options[wakeup.selectedIndex].text
        timing[1].innerText=lunch.options[lunch.selectedIndex].text
        timing[2].innerText=evening.options[evening.selectedIndex].text
        timing[3].innerText=night.options[night.selectedIndex].text
    })