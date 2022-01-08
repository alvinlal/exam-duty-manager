

export function getAllProducts(){
    return fetch('/api/products')
    .then(res => res.json())
    .then(data => data.products)
}


