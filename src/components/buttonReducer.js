export const buttonReducer = (skillChoice, action) => {
  // fonction useReducer sur bouton predefinis

  if (action === "mobility") {
    return (skillChoice = "mobility");
  }
  if (action === "cooking") {
    return (skillChoice = "cooking");
  }
  if (action === "houseCleaning") {
    return (skillChoice = "houseCleaning");
  }
  if (action === "dressing") {
    return (skillChoice = "dressing");
  }
  if (action === "reeducation") {
    return (skillChoice = "reeducation");
  }
  if (action === "hygiene") {
    return (skillChoice = "hygiene");
  }
  if (action === "nursing") {
    return (skillChoice = "nursing");
  }
  if (action === "treatment") {
    return (skillChoice = "treatment");
  }
  if (action === "entertainment") {
    return (skillChoice = "entertainment");
  }
  if (action === "driving") {
    return (skillChoice = "driving");
  }
};
