import { Header_AUTHORIZATION } from ".";

export const makeApiCall = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  headers?: Record<string, string>,
  data?: any // Data payload to be sent in the request body
): Promise<T> => {
  const response = await fetch(url, {
    method,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: Header_AUTHORIZATION,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("API Call Failed due to unknown reason");
  }

  return response.json();
};
