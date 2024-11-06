function showLoading() {

   const div = document.createElement("div");
   div.classList.add("loading", "centralize");
 
   const gifImg = document.createElement("img");
   gifImg.src = 'https://www.icegif.com/wp-content/uploads/2023/07/icegif-1265.gif'; 
   gifImg.alt = 'Carregando...';

    
  gifImg.width = 100; 
  gifImg.height = 100; 
 
   
   div.appendChild(gifImg);
 
   
   document.body.appendChild(div);
 }

function hideLoading(){
   const loading= document.getElementsByClassName("loading");
   if(loading.length) {
      loading[0].remove();
   }
    
}