const BASE_URL = "https://api.escuelajs.co/api/v1";


export const getProducts = async ()=>{
    const url = `${BASE_URL}/products?offset=0&limit=6`;
    const res = await fetch(url);
    return await res.json();
}

export const getProductById = async (id:string|number)=>{
    const url = `${BASE_URL}/products/${id}`;
    const res = await fetch(url);
    return await res.json();
}