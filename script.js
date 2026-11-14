(()=>{
  const modal=document.getElementById("reportModal");
  const video=document.getElementById("reportVideo");
  const openButton=document.getElementById("openReport");
  const closeButton=document.getElementById("closeReport");
  const playButton=document.getElementById("playReport");
  const error=document.getElementById("videoError");
  const year=document.getElementById("year");

  async function playVideo(){
    error.hidden=true;
    try{
      await video.play();
      playButton.hidden=true;
    }catch(err){
      playButton.hidden=false;
      error.hidden=false;
    }
  }
  function openModal(){
    modal.classList.add("show");
    modal.setAttribute("aria-hidden","false");
    document.body.classList.add("modal-open");
    video.currentTime=0;
    playVideo();
  }
  function closeModal(){
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden","true");
    document.body.classList.remove("modal-open");
    video.pause();
    video.currentTime=0;
    playButton.hidden=false;
    error.hidden=true;
  }
  openButton.addEventListener("click",openModal);
  playButton.addEventListener("click",playVideo);
  closeButton.addEventListener("click",closeModal);
  modal.addEventListener("click",event=>{if(event.target===modal)closeModal()});
  video.addEventListener("play",()=>{playButton.hidden=true;error.hidden=true});
  video.addEventListener("pause",()=>{if(!video.ended)playButton.hidden=false});
  video.addEventListener("ended",()=>{playButton.hidden=false});
  video.addEventListener("error",()=>{error.hidden=false});
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&modal.classList.contains("show"))closeModal()});
  year.textContent=new Date().getFullYear();
})();
