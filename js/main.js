//Document Ready - Validación DOM
document.addEventListener("DOMContentLoaded", function() {
    console.log('JS Loaded - Everything OK!');
});


//-------------------- Variable body usada multiples veces en la ejecución de modales
var body = document.getElementsByTagName('body')[0];


//-------------------- Overlay Estudio de crédito
function showModalStudy(){
    document.getElementById('StudyProcess').classList.add('contStudyProcess--isShow');
    body.classList.add('is--scrollLocked');
}


//-------------------- Overlay Modal
function showModal(){
    document.getElementById('modalDefault').classList.add('contModal--isShow');
    body.classList.add('is--scrollLocked');
}

function hideModal(){
    document.getElementById('modalDefault').classList.remove('contModal--isShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Overlay Canguro
function showKangaroo(){
    document.getElementById('contCanguro').classList.add('contCanguroMain--iscanguroShow');
    body.classList.add('is--scrollLocked');
}

function hideKangaroo(){
    document.getElementById('contCanguro').classList.remove('contCanguroMain--iscanguroShow');
    body.classList.remove('is--scrollLocked');
}


//-------------------- Mostrar Direccion
function chengeAddress(){
    document.getElementById('triggerChangeAddress').style.display = 'none';
    document.getElementById('adressDefault').style.display = 'none';
    document.getElementById('adressAltern').style.display = ''; //vacio para que tome el flex que trae por defecto
}


//-------------------- Mostrar datos ocultos confirmación y resultados
function seeMoreDetails(){
    document.getElementById('result__ConfirToggleOpen').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'block';
    document.getElementById('result__ConfirToggleClose').style.display = '';
}

function seeLessDetails(){
    document.getElementById('result__ConfirToggleClose').style.display = 'none';
    document.getElementById('boxResultConfirmHidden').style.display = 'none';
    document.getElementById('result__ConfirToggleOpen').style.display = '';
}

//-------------------- Validar focus input
function isMobile() {
    return(/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );
    function focusIn(){
        console.log('Focus In');
        document.getElementById('support').style.position = 'relative';
    }
    
    function focusOut(){
        console.log('Focus Out');
        document.getElementById('support').style.position = '';
    }
}

isMobile();