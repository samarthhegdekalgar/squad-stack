export const globalFetch = <TData>(
  url: string,
  options: RequestInit = {}
): Promise<TData> => {
  const response = new Promise<TData>((resolve, reject) => {
    window
      .fetch(url, options)
      .then(async (response) => {
        if (response.ok) {
          return resolve((await response.json()) as Promise<TData>);
        } else {
          reject(new Error(response.statusText));
        }
      })
      .catch(reject);
  });
  return response;
};
