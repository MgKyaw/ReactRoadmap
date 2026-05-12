let firstRequest = true;
export async function updateQuantity(newName) {
  return new Promise((resolve, reject) => {
    if (firstRequest === true) {
      firstRequest = false;
      setTimeout(() => {
        firstRequest = true;
        resolve(newName);
        // Simulate every other request being slower
      }, 1000);
    } else {
      setTimeout(() => {
        resolve(newName);
      }, 50);
    }
  });
}
