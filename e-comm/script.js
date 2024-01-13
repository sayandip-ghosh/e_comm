function search_() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('animals'); 
    console.log(x)
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 

function incCart()
{
    let no = document.querySelector('.cartNo');
    no.innerHTML = Number(no.innerHTML)+1;
    console.log(no);
}