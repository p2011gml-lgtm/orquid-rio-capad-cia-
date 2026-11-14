(()=>{
  const modal=document.getElementById('reportModal');
  const video=document.getElementById('reportVideo');
  const openButtons=[document.getElementById('openReport'),document.getElementById('openReportPreview')];
  const closeButton=document.getElementById('closeReport');
  const error=document.getElementById('videoError');
  const menuToggle=document.getElementById('menuToggle');
  const nav=document.getElementById('mainNav');
  document.getElementById('year').textContent=new Date().getFullYear();
  function openModal(){modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');error.hidden=true;video.currentTime=0;const p=video.play();if(p&&typeof p.catch==='function')p.catch(()=>{error.hidden=false;});}
  function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');video.pause();video.currentTime=0;}
  openButtons.filter(Boolean).forEach(b=>b.addEventListener('click',openModal));
  closeButton.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
  video.addEventListener('error',()=>{error.hidden=false;});
  video.addEventListener('loadedmetadata',()=>{error.hidden=true;});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('show'))closeModal();});
  menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
})();
