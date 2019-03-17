/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let indexes = [];
  let count = 0;
  for(let i = 0; i < preferences.length; i++){
    indexes[i] = 0;
  }

  for(let i = 0; i < preferences.length; i++){
    if(indexes[i] === 0){
      indexes[i] = 1;
      if(preferences[preferences[preferences[i] -1 ] - 1] === i + 1 && preferences[i] -1 !== i ){
          count++;
          indexes[preferences[preferences[i] -1] -1] = 1;
          indexes[preferences[i] -1 ] = 1;
      }
    }
  }
   return count;
  };
