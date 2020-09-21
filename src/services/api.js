

const api = (function () {
  let data = [{
    id: 1,
    title: "The Nutcache"
  },
  {
    id: 2,
    title: "The Squirrel"
  }, {
    id: 3,
    title: "The Nuts"
  }];
  return {
    get: (id) => {
      return new Promise((resolve, reject) => {
        if (id) {
          resolve(data.filter((value) => {
            return value.id === id;
          }));
        }
        resolve(data);
      })
    },
    post: (entity) => {
      console.log(data[data.length - 1]);
      return new Promise((resolve, reject) => {
        if (entity) {
          if(data.length > 0){
            entity.id = data[data.length - 1].id + 1;
          } else {
            entity.id = 1;
          }
          data.push(entity);
        } else {
          reject("Can't insert data");
        }
        resolve(data[data.length - 1]);
      })
    },
    delete: (id) => {
      return new Promise((resolve, reject) => {
        if (id) {
          data = data.filter((value) => value.id !== id);
        }else{
          reject("DELETE: Id not found");
        }
        resolve(data);
      })
    }
  }
})();

export default api;
