function show(){
    let link = document.querySelector('link[rel="import"]');
    let div = link.import.querySelector('div');
    let clone = document.importNode(div.content, true);
    document.querySelector('#container1').appendChild(clone);
}