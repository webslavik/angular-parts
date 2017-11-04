export class DataService {
  getData() {
    let promiseData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 2000);
    });
    return promiseData;
  }
}