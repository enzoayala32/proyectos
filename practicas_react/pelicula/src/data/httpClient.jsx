const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjNjZWJlMmRiNmY5Y2RmZGI1Yzg5MWNiMDhmMTY3NyIsInN1YiI6IjY2NjBhMTMxODk4NzM4MDI1N2U5OTViMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0nOYAJsnmUzEuKzIX2Pk1Qnj30S61GF5WfyJzc-Muu0",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}