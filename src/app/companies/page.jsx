const apiUrl = process.env.API_HOST;
const endpoint = `${apiUrl}/api/companies`;

const fetchCompanies = () => {
  return fetch('https://localhost:7252/api/companies')
    .then(res => res.json())
    .catch(error => console.error('Error fetching companies:', error));
}


export default async function CompanyPage() {

  const companies = await fetchCompanies()

  console.log(companies);
  console.log("whatafak")
  return (
    <div>
      {/* Renderiza los datos obtenidos de la API */}
      {companies && companies.map(item => (
        <div key={item.id}>{item}</div>
      ))}
    </div>
  );
}
