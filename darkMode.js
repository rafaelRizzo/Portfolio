function onDark(){   
    document.querySelector('.dark').style.color = '#fff'    
    document.querySelector('#moon').style.display = 'none'
    document.querySelector('#sun').style.display = 'block'

    document.body.style.backgroundColor = '#111111'
    document.querySelectorAll('.sec').forEach(el => el.style.backgroundColor = '#111111')
    document.querySelector('.sec h1').style.color = '#fff';
    document.querySelectorAll('.sec p').forEach(el => el.style.color = '#fff');
    document.querySelector('.sec a.btn-download').style.backgroundColor = '#cc5803';
    document.querySelector('.sec a.btn-download').style.color = '#fff';

    document.querySelector('.sec:nth-child(odd)').style.backgroundColor = '#111111';
    document.querySelectorAll('.sec#about ul li').forEach(el => el.style.color = '#fff')

    let beforeRoot = document.querySelectorAll(':root');
    beforeRoot.forEach(el => el.style.setProperty("--pseudo-backgroundcolor", '#fff'))
}

function offDark(){
    document.querySelector('.dark').style.color = '#000'    
    document.querySelector('#moon').style.display = 'block'
    document.querySelector('#sun').style.display = 'none'

    document.body.style.backgroundColor = '#eff4fd'
    document.querySelectorAll('.sec').forEach(el => el.style.backgroundColor = '#eff4fd')
    document.querySelector('.sec h1').style.color = '';
    document.querySelectorAll('.sec p').forEach(el => el.style.color = '');
    document.querySelector('.sec a.btn-download').style.backgroundColor = '';
    document.querySelector('.sec a.btn-download').style.color = '';

    document.querySelector('.sec:nth-child(odd)').style.backgroundColor = '#eff4fd';
    document.querySelectorAll('.sec#about ul li').forEach(el => el.style.color = '')
    document.querySelector('.sec#contact').style.backgroundColor = '#181818'

    let beforeRoot = document.querySelectorAll(':root');
    beforeRoot.forEach(el => el.style.setProperty("--pseudo-backgroundcolor", '#333'))
}