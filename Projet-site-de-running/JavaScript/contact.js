
    function verifFormulaire() {
        
        var name = document.forms["Form"]["Nom"];   
        var firstname = document.forms["Form"]["Prenom"];             
        var email = document.forms["Form"]["Email"];       
        var address = document.forms["Form"]["Adresse"];
        var code_postal = document.forms["Form"]["Code postal"];
        var ville = document.forms["Form"]["Ville"];  
        var accepter = document.forms["Form"]["Accepter"];
        var civilite = document.forms["Form"]["civilite"];
        var newsletters = 0;

        if (firstname.value == "")                                  
        { 
            alert("Mettez votre Prénom."); 
            firstname.focus();
            newsletters = 0; 
            firstname.style.borderWidth ="3px"
            firstname.style.borderColor ="#ff0000"
            firstname.style.backgroundColor ="#FFBCBC"
            return false; 
        }  
        else
        {
            newsletters = 1;
            firstname.style.backgroundColor ="white"
            firstname.style.borderColor="black"
            firstname.style.borderWidth="1px"
        }  


        if(name.value == "")                                  
        { 
            alert("Mettez votre nom."); 
            name.focus();
            newsletters = 0; 
            name.style.borderWidth ="3px"
            name.style.borderdColor = "#ff0000"
            return false; 
        }  
        else
        {
            newsletters = 1;
            name.style.backgroundColor ="white"
            name.style.borderColor="black"
            name.style.borderWidth="1px"
        }  


        if (email.value == "")                                   
        { 
            alert("Mettez une adresse email valide."); 
            email.focus();
            newsletters = 0;
            email.style.borderWidth ="3px"
            email.style.borderdColor = "#ff0000"
            return false; 
        } 
        else
        {
            newsletters = 1;
            email.style.backgroundColor ="white"
            email.style.borderColor="black"
            email.style.borderWidth="1px"
        }   


        if (email.value == "@")                                   
        {  
            accepter.checked = true;
            newsletters = 0;
            email.style.borderWidth ="3px"
            email.style.borderdColor = "#ff0000"
            return false; 
        } 
        else
        {
            newsletters = 1;
            email.style.backgroundColor ="white"
            email.style.borderColor="black"
            email.style.borderWidth="1px"
        }  
        
        
        if (email.value.indexOf("@", 0) < 0)                 
        { 
            alert("Mettez une adresse email valide."); 
            email.focus(); 
            newsletters = 0;
            email.style.borderWidth ="3px"
            email.style.borderdColor = "#ff0000"
            return false; 
        } 
        else
        {
            newsletters = 1;
            email.style.backgroundColor ="white"
            email.style.borderColor="black"
            email.style.borderWidth="1px"
        }  


        if (email.value.indexOf(".", 0) < 0)                 
        { 
            alert("Mettez une adresse email valide."); 
            email.focus(); 
            newsletters = 0;
            email.style.borderWidth ="3px"
            email.style.borderdColor = "#ff0000"
            return false; 
        }  
        else
        {
            newsletters = 1;
            email.style.backgroundColor ="white"
            email.style.borderColor="black"
            email.style.borderWidth="1px"
        }  


        else if (address.value == "")                               
        { 
            alert("Mettez votre adresse."); 
            address.focus(); 
            newsletters = 0;
            email.style.borderWidth ="3px"
            email.style.borderdColor = "#ff0000"
            return false; 
        }  
        else if (code_postal.value == "")                               
        { 
            alert("veuillez rentrer un code postal valide."); 
            code_postal.focus(); 
            newsletters = 0;
            code_postal.style.borderWidth ="3px"
            code_postal.style.borderdColor = "#ff0000"
            return false; 
        }
        else if (ville.value == "")                               
        { 
            alert("veuillez rentrer une ville valide."); 
            ville.focus(); 
            newsletters = 0;
            ville.style.borderWidth ="3px"
            ville.style.borderdColor = "#ff0000"
            return false;        
        }
        else if (civilite.value == "0")                               
        { 
            alert("veuillez rentrer un genre."); 
            civilite.focus(); 
            newsletters = 0;
            civilite.style.backgroundColor = "#FFBCBC"
            return false;        
        }
        else if (accepter.value == false)                               
        { 
            alert("veuillez checker la case s'inscrire a la newsletters."); 
            accepter.focus(); 
            newsletters = 0;
            return false;        
        }
        else
        {
            newsletters = 1;
            form.style.backgroundColor ="white"
            form.style.borderColor="black"
            form.style.borderWidth="1px"
            civilite.style.backgroundColor ="white"
            ville.style.backgroundColor ="white"
            ville.style.borderColor="black"
            ville.style.borderWidth="1px"
            code_postal.style.backgroundColor ="white"
            code_postal.style.borderColor="black"
            code_postal.style.borderWidth="1px"
            email.style.backgroundColor ="white"
            email.style.borderColor="black"
            email.style.borderWidth="1px"
            email.style.backgroundColor ="white"
            email.style.borderColor="black"
            email.style.borderWidth="1px"
        }


        if (newsletter = 1) {
            alert("vous venez de vous inscrire a la newsletters.")
        }


        return true; 
    }
    