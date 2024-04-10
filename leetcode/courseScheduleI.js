var canFinish = function (numCourses, prerequisites) {
  let preMap = {};

  for (let index = 0 ; index < numCourses; index++) {
    preMap[index] = []
  }
  for (let index = 0; index < prerequisites.length; index++) {
      preMap[prerequisites[index][0]].push(prerequisites[index][1]);
  }
console.log(JSON.stringify(preMap))
  let visitMap = {};
  function dfs(course) {
    if (visitMap[course]) {
        return false;
      }
    if (preMap[course].length === 0) {
      return true;
    }
   
    visitMap[course] = true;
    for (let preCourse of preMap[course]) {
      if (!dfs(preCourse)) {
        return false;
      }
    }
    visitMap[course] = false;
    preMap[course] = [];
    return true;
  }

  for (let index = 0 ; index < numCourses; index++) {
    if (!dfs(index)) {
      return false;
    }
  }
  return true;
};

let numCourses = 2,
  prerequisites = [[0,1]];
console.log(canFinish(numCourses, prerequisites));
