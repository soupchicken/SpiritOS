import fetch from 'node-fetch'

const login = async ( username, password ) => {
  const url = `${process.env.GATEWAY_URL}/login`
  const res = await fetch( url, {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  const json = await res.json();
  return json;
}

export default login
