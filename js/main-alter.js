//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('JS Loaded - Everything OK!');
});


//-------------------- Variable body usada multiples veces en la ejecución de modales
var body = document.getElementsByTagName('body')[0];


//-------------------- Overlay Estudio de crédito
document.getElementById('triggerModalStudy').onclick=function(){
    document.getElementById('StudyProcess').classList.add('contStudyProcess--isShowed');
    body.classList.add('is--scrollLocked');
}


//-------------------- Overlay Modal
document.getElementById('triggerModal').onclick=function(){
    document.getElementById('modalDefault').classList.add('contModal--isShowed');
    body.classList.add('is--scrollLocked');
}

document.getElementById('triggerModalClose').onclick=function(){
    document.getElementById('modalDefault').classList.remove('contModal--isShowed');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Overlay Canguro
document.getElementById('triggerCanguro').onclick=function(){
    document.getElementById('contCanguro').classList.add('contCanguroMain--iscanguroShowed');
    body.classList.add('is--scrollLocked');
}

document.getElementById('triggerCanguroClose').onclick=function(){
    document.getElementById('contCanguro').classList.remove('contCanguroMain--iscanguroShowed');
    body.classList.remove('is--scrollLocked');
}

document.getElementById('closeCanguro').onclick=function(){
    document.getElementById('contCanguro').classList.remove('contCanguroMain--iscanguroShowed');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Mostrar Direccion
document.getElementById('triggerChangeAddress').onclick=function(){
    document.getElementById('triggerChangeAddress').style.display = 'none';
    document.getElementById('adressDefault').style.display = 'none';
    document.getElementById('adressAltern').style.display = ''; //vacio para que tome el flex que trae por defecto
}


//-------------------- Mostrar datos ocultos confirmación y resultados
document.getElementById('result__ConfirToggleOpen').onclick=function(){
    this.style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'block';
    document.getElementById('result__ConfirToggleClose').style.display = '';
}

document.getElementById('result__ConfirToggleClose').onclick=function(){
    this.style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen').style.display = '';
}

//-------------------- Mostrar datos tarjetas tipo Toggle
document.getElementById('seemore--secondCard').onclick=function(){
    this.style.display = 'none';
}