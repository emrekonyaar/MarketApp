import * as actionTypes from "./actionTypes";

export function getProductSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}
export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getProductSuccess(response)));
  };
}
export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}
export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}
export function saveProductApi(product) {
  let url = "http://localhost:3000/products/";
  return fetch(url + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "aplication/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError)
}
export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product).then((savedProduct) => {
      product.id
        ? dispatch(updateProductSuccess(savedProduct))
        : dispatch(createProductSuccess(savedProduct))
    }).catch(error=>{throw error})
  }
}
export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }
  const error = await response.text()
  throw new Error(error)
}
export function handleError(error){
  console.error("Bir hata Oluştu")
  throw error
}