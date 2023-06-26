export default async function CompanyPage(props) {

  const fetchCompany = () => {
    const apiUrl = process.env.API_HOST;
    const endpoint = `https://localhost:7252/api/companies/${props.params.id}`;
    console.log("invocando", endpoint)
    return fetch(endpoint)
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(x => {
        console.log("json", x);
        return x;
      })
      .catch(error => console.error('Error fetching companies:', error));
  }
 
  const company = await fetchCompany()
  console.log("company", company);
 
  return (
    <div>
      <h1>Company ID: {JSON.stringify(company, null, 2)}</h1>
    </div>
  );
}
