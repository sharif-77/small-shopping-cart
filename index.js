let total=0;
function getAndAdd(targetedElement) {
  // console.log(targetedElement.parentNode);
  // let getProductName=targetedElement.parentNode.childNodes[3].innerText;
  let getProductName = targetedElement.parentNode.children[1].innerText;
  let haveToSet=document.getElementById('will-add-new');
  let li=document.createElement('li')
  li.innerText=getProductName;
  // console.log(haveToSet.children);

 
  // item added code end
  // price added code start
  let getProductPrice=targetedElement.parentNode.children[3].innerText.split(' ')[1];
  // console.log(typeof parseFloat(getProductPrice));
  let addedPlace=haveToSet.parentNode.parentNode.children[1].children[1].children[0];
  // console.log(addedPlace.innerText);

  total+=parseFloat(getProductPrice)
  addedPlace.innerText=total
  // console.log(haveToSet.childElementCount)[0];

  if (haveToSet.childElementCount!==10) {
  haveToSet.appendChild(li)
  // total+=parseFloat(getProductPrice)

  }else{
    return
  }

  console.log(haveToSet.children);

    // remove duplicate item or won't add twice a item
  if (haveToSet.childElementCount>0) {
    for (const i of haveToSet.children) {
      // console.log(i.innerText);
      if (i.innerText==='T-shirt') {
        let tShirt=document.getElementById('t-shirt-button')
        tShirt.setAttribute('disabled',true)
        tShirt.classList.add('bg-red-500')

      }
      if (i.innerText==='Shirt') {
        let shirt=document.getElementById('shirt-button')
        shirt.setAttribute('disabled',true)
        shirt.classList.add('bg-red-500')

      }
      if (i.innerText==='Pant') {
        let pant=document.getElementById('pant-button')
        pant.setAttribute('disabled',true)
        pant.classList.add('bg-red-500')
      }
      
    }
    
  }



}