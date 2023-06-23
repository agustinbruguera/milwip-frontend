const apiUrl = process.env.API_HOST;
const endpoint = `${apiUrl}/api/Company/GetAllCompanies`;

const fetchCompanies = () => {
  return fetch('http://localhost:11056/api/Company/GetAllCompanies')
    .then(res => res.json())
    .catch(error => console.error('Error fetching companies:', error));
}


export default async function CompanyPage() {

  const companies = await fetchCompanies()

  console.log(companies);

  return (
    <div>
      {/* Renderiza los datos obtenidos de la API */}
      {companies && companies.map(item => (
        <div key={item.id}>{item}</div>
      ))}
    </div>
  );
}
