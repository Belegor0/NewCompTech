function show(){
    var doc=document.querySelector('link[rel="import"]').import;
    var text=doc.querySelector('.cont1');
    document.body.appendChild(text.cloneNode(true));
}