export const getCart  = ()=>{
    const cart = localStorage.getItem("cart");
    if(!cart) return [];
    return JSON.parse(cart)|| [];
  }

export const addItem = (item:any)=>{
   const cart = getCart();
   const newCart  = [...cart,item];
   localStorage.setItem("cart",JSON.stringify(newCart));
}

export const removeItem = (id:any)=>{
  const cart = getCart();
  const newCart = cart.filter((item:any)=>item.id!==id);
  localStorage.setItem("cart",JSON.stringify(newCart));
}