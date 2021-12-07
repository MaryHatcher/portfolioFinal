window.addEventListener("load", function() {

    


    document.getElementById("web").
    addEventListener("mouseover", changeColor);
    
    function changeColor(){
    document.getElementById("web").style.color = "black";
    document.getElementById("webHoverBG").style.visibility = "visible";
    document.getElementById("name").style.visibility = "hidden";
    document.getElementById("description").style.visibility = "hidden";
    document.getElementById("contact").style.visibility = "hidden";
    document.getElementById("about").style.visibility = "hidden";
    
    }


    document.getElementById("web").
    addEventListener("mouseout", changeBack);
    
    function changeBack(){
    document.getElementById("web").style.color = "white";
    document.getElementById("webHoverBG").style.visibility = "hidden";
    document.getElementById("name").style.visibility = "visible";
    document.getElementById("description").style.visibility = "visible";
    document.getElementById("contact").style.visibility = "visible";
    document.getElementById("about").style.visibility = "visible";
    }


    

    document.getElementById("graphic").
    addEventListener("mouseover", changeColorB);
    
    function changeColorB(){
    document.getElementById("graphic").style.color = "black";
    document.getElementById("graphicHoverBG").style.visibility = "visible";
    document.getElementById("name").style.visibility = "hidden";
    document.getElementById("description").style.visibility = "hidden";
    document.getElementById("contact").style.visibility = "hidden";
    document.getElementById("about").style.visibility = "hidden";
    }


    document.getElementById("graphic").
    addEventListener("mouseout", changeBackB);

    function changeBackB(){
        document.getElementById("graphic").style.color = "white";
        document.getElementById("graphicHoverBG").style.visibility = "hidden";
        document.getElementById("name").style.visibility = "visible";
        document.getElementById("description").style.visibility = "visible";
        document.getElementById("contact").style.visibility = "visible";
        document.getElementById("about").style.visibility = "visible";
    }
    



    document.getElementById("fineArt").
    addEventListener("mouseover", changeColorC);
    
    function changeColorC(){
    document.getElementById("fineArt").style.color = "black";
    document.getElementById("fineArtHoverBG").style.visibility = "visible";
    document.getElementById("name").style.visibility = "hidden";
    document.getElementById("description").style.visibility = "hidden";
    document.getElementById("contact").style.visibility = "hidden";
    document.getElementById("about").style.visibility = "hidden";
    }


    document.getElementById("fineArt").
    addEventListener("mouseout", changeBackC);

    function changeBackC(){
        document.getElementById("fineArt").style.color = "white";
        document.getElementById("fineArtHoverBG").style.visibility = "hidden";
        document.getElementById("name").style.visibility = "visible";
        document.getElementById("description").style.visibility = "visible";
        document.getElementById("contact").style.visibility = "visible";
        document.getElementById("about").style.visibility = "visible";
    }


    document.getElementById("contact").
    addEventListener("mouseover", changeColorD);
    
    function changeColorD(){
    document.getElementById("contact").style.color = "blue";
    }


    document.getElementById("contact").
    addEventListener("mouseout", changeBackD);

    function changeBackD(){
        document.getElementById("contact").style.color = "black";
    }


    document.getElementById("about").
    addEventListener("mouseover", changeColorE);
    
    function changeColorE(){
    document.getElementById("about").style.color = "blue";
    }


    document.getElementById("about").
    addEventListener("mouseout", changeBackE);

    function changeBackE(){
        document.getElementById("about").style.color = "black";
    }
    
    
    
    
    });

    window.addEventListener("load", function() {


    document.getElementById("manifestoTXT").
    addEventListener("mouseover", changeColorF);
    
    function changeColorF(){
    document.getElementById("manifestoTXT").style.color = "blue";
    }


    document.getElementById("manifestoTXT").
    addEventListener("mouseout", changeBackF);

    function changeBackF(){
        document.getElementById("manifestoTXT").style.color = "white";
    }


    
    document.getElementById("htmlTXT").
    addEventListener("mouseover", changeColorG);
    
    function changeColorG(){
    document.getElementById("htmlTXT").style.color = "blue";
    }


    document.getElementById("htmlTXT").
    addEventListener("mouseout", changeBackG);

    function changeBackG(){
        document.getElementById("htmlTXT").style.color = "white";
    }
    


    document.getElementById("plateTXT").
    addEventListener("mouseover", changeColorH);
    
    function changeColorH(){
    document.getElementById("plateTXT").style.color = "blue";
    }


    document.getElementById("plateTXT").
    addEventListener("mouseout", changeBackH);

    function changeBackH(){
        document.getElementById("plateTXT").style.color = "white";
    }
    

    });

    