let x = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let boxContent ="";

buttons.forEach( function(button){
	button.addEventListener("click",function(){
		const value=button.textContent;

		if(value==="="){
			boxContent = Function("return " + boxContent)();
;
		}
		else if ( value==="C"){
			boxContent="";
		}
		else {
			boxContent +=value;
		}

        x.value=boxContent;
	})
})


