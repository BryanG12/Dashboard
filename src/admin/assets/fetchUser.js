export default async function fetchUsers(page) {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const json = await response.json();
  console.log("peticion a API");
  return json;
}
