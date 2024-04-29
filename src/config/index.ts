export const CLIENT_SECRET = `$2y$12$ej${process.env.NEXT_API_CLIENT_SECRET}`;
export const CLIENT_ID = `${process.env.NEXT_API_CLIENT_ID}`;
export const Header_AUTHORIZATION = `Basic ${btoa(
  CLIENT_ID + ":" + CLIENT_SECRET
)}`;

// //
// Authorization: `Basic ${btoa(
//   process.env.CLIENT_SECRET! + ":" + process.env.CLIENT_ID!
// )}`;
//

// 'Authorization': `Basic ${btoa(Constants.CLIENT_ID + ':' + Constants.CLIENT_SECRET)}`
