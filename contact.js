        function changes(){
        
                 
        let name=document.getElementById('name').value.trim();
        let email=document.getElementById('email').value.trim();
        let subject=document.getElementById('subject').value.trim();
        let message=document.getElementById('message').value.trim();
        let display=document.getElementsByClassName('display')[0];

        if(name==="" || email===""||subject===""||message==="")
        {
            alert(`Fill all the fields!!!`);
            return;
        }
        else{
        display.textContent="Thank you for contacting spiro Technologies!";

        }


        }

