  export const baseUrl: any = "http://localhost:5000"; 
export const apiKey = 'AIzaSyAR6sB-kXz28VKj_YkcsVCXwGJzbLowYlk';
 export const googleUrl = "https://identitytoolkit.googleapis.com/v1";
 export const  client_id= "112187882097786981513"


export const buildDynamicURL = (id: any, fromDate: any, endDate: any, limit: any, page: any, base: any ,ticketType:any,ticketId:any) => {
 
  let baseURL = `${base}`;
  const queryParams = [];

    // Add 'id' to the query parameters if it's not null or undefined
  if (id !== null && id !== undefined) {
    queryParams.push(`id=${id}`);
  }

  // Add 'ticketId' to the query parameters if it's not null or undefined
  if (ticketId !== null && ticketId !== undefined && !Array.isArray(ticketId)) {
    queryParams.push(`ticketId=${ticketId}`);
  }

  // Add 'fromDate' to the query parameters if it's not null or undefined
 if (ticketType !== null && ticketType !== undefined && !Array.isArray(ticketType)) {
  queryParams.push(`ticketType=${ticketType}`);
}
  // Add 'fromDate' to the query parameters if it's not null or undefined
 if (fromDate !== null && fromDate !== undefined && !Array.isArray(fromDate)) {
  queryParams.push(`fromDate=${fromDate}`);
}

  // Add 'endDate' to the query parameters if it's not null or undefined
  if (endDate !== null && endDate !== undefined && !Array.isArray(endDate)) {
    queryParams.push(`endDate=${endDate}`);
  }

  // Add 'limit' to the query parameters if it's not null or undefined
  if (limit !== null && limit !== undefined) {
    queryParams.push(`limit=${limit}`);
  }

  // Add 'page' to the query parameters if it's not null or undefined
  if (page !== null && page !== undefined) {
    queryParams.push(`page=${page}`);
  }

 // Combine the base URL and query parameters
  if (queryParams.length > 0) {
    baseURL += "?" + queryParams.join("&");
  }

    // Add 'id' to the URL if it's not null or undefined
  // if (id !== null && id !== undefined) {
  //   baseURL += `${id}`;
  // }

  return baseURL;
}

 
