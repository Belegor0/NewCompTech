function show1(){
    var doc=document.querySelector('link[rel="import"]').import;
    var text=doc.querySelector('.cont1');
    var clone=document.importNode(text.content, true);
    document.querySelector("#container1").appendChild(clone);
}