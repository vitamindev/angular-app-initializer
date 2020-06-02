export function initLongRunningFactory() {
  return () => {
    return new Promise((resolve) => {
      console.log('initLongRunningFactory - started');
      setTimeout(() => {
        console.log('initLongRunningFactory - completed');
        resolve();
      }, 5000);
    });
  };
}
