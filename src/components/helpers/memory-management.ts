export const saveGameObject = (key: string, obj: any) => {
  (window as any).localStorage.setItem(key, JSON.stringify(obj));
};

export const loadGameObject = (key: any) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export const itemInStorage = (key: string) => {
  return localStorage.getItem(key) ? true : false;
};

export const eraseGameObject = (key: string) => {
  localStorage.removeItem(key);
};
