
const slideNavMenu=()=>{
	
	
	const icon=document.querySelector('.iconSelect');
	const navLinksDiv=document.querySelector('.navbar .navDiv')

	icon.addEventListener('click',()=>{
		icon.classList.toggle("closeOnly");
		navLinksDiv.classList.toggle("navLinks-onScreen");
		
	})

}

slideNavMenu();