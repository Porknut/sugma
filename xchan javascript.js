








var body = document.children[0].querySelector('.synchtube');

container = body.querySelector('#wrap').querySelector('#mainpage').querySelector('.container')

chatwrap = body.querySelector('#wrap').querySelector('#mainpage').querySelector('.container').querySelector('#main').querySelector('#chatwrap');

layoutMenu = body.querySelector('#wrap').querySelector('.navbar').querySelector('#nav-collapsible').querySelector('.nav').children[4].querySelector('.dropdown-menu')










layoutMenu.appendChild(document.createElement("LI"))

layoutMenu.children[2].appendChild(document.createElement("A"))

layoutMenu.children[2].children[0].href="#"





layoutMenu.children[2].children[0].onclick = function(){

    container.querySelector('#motdrow').remove();
    container.querySelector('#announcements').remove();
    container.querySelector('#drinkbarwrap').remove();

    body.querySelector('#wrap').querySelector('#mainpage').querySelector('.container').querySelector('#main').querySelector('#videowrap').remove();
    //style="height: 329px; float: right;"     //userbox original style

    //todo make the userlist go left
    chatwrap.children[2].style.height = '700px'
    chatwrap.children[1].style.height = chatwrap.children[2].style.height;



 










    controlsrow = container.querySelector('#controlsrow')
playlistrow = container.querySelector('#playlistrow')
chatwrap = container.querySelector('#main').querySelector('#chatwrap')


var leftCol = container.appendChild(document.createElement("DIV"));

leftCol.className = 'col-lg-5 col-md-5'
leftCol.id = 'leftcol'

var rightCol = container.appendChild(chatwrap);

//rightCol.className = 'col-lg-15 col-md-15'
//rightCol.id = 'rightcol'


buttonsVar = leftCol.appendChild(controlsrow);
playlistVar = leftCol.appendChild(playlistrow);
chatVar = rightCol//.appendChild(chatwrap);

container.querySelector('#main').remove()

container.style.paddingLeft = '0px'
container.style.paddingRight = '0px'
container.style.marginRight = '300px'
container.style.marginLeft = '0px'
chatwrap.className = 'col-lg-6 col-md-6'
chatwrap.style.position = 'fixed'
chatwrap.style.right = '0px'
//chatwrap.style.bottom = '0px'
chatwrap.style.top = '0px'
//chatwrap.style.top = '16px'
chatwrap.style.zIndex = 1031
document.children[0].style.boxSizing = 'border-box'
chatwrap.children[2].style.height = '94vh';
chatwrap.children[1].style.height = '94vh';
//chatwrap.style.height = 'window.innerHeight'


//chatwrap.children[2].style.height = 'calc(90%-100px)';
//chatwrap.children[1].style.height = 'calc(200vh-6px)';
//chatwrap.children[2].style.height = '100%'
//
//leftCol.style.width = '700px'


newRow = leftCol.appendChild(document.createElement("DIV"))
newRow.className = 'row';newRow.id = 'newrow'
//leftCol.querySelector('#controlsrow').querySelector('#leftcontrols').className = 'row'
leftCol.querySelector('#controlsrow').querySelector('#leftcontrols').className = 'btn-group'
newRow.appendChild(leftCol.querySelector('#controlsrow').querySelector('#leftcontrols'))
leftCol.querySelector('#controlsrow').querySelector('#rightcontrols').querySelector('#videocontrols').className = 'btn-group'


leftCol.querySelector('#leftcontrols').className = 'btn-group'
leftCol.querySelector('#leftcontrols').appendChild(leftCol.querySelector('#controlsrow').querySelector('#rightcontrols').querySelector('#videocontrols'))
leftCol.appendChild(leftCol.querySelector('#playlistrow'))
leftCol.querySelector('#controlsrow').querySelector('#rightcontrols').className = 'btn-group'
leftCol.querySelector('#playlistrow').querySelector('#rightpane').className = 'col-lg-20 col-md-20'
textBox = leftCol.querySelector('#leftpane').appendChild(document.createElement('TEXTAREA'))
leftCol.querySelector('#leftpane').style.padding ='7px'
leftCol.querySelector('#leftpane').style.paddingLeft ='0px'

textBox.style.backgroundColor = 'black';textBox.style.color = 'gray'









}

    layoutMenu.children[2].children[0].textContent = 'Porknut Layout'






   


































