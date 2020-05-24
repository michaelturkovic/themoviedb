export const checkSession = (expiration: string): boolean => {
  let sessionExpireAt = new Date(expiration);
  let now = new Date(Date.now());
  if (sessionExpireAt > now) return true;
  else return false;
};