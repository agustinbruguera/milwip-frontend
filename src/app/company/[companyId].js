export async function getServerSideProps(context) {
  const { companyId } = context.params;

  // Realiza las consultas o llamadas a API para obtener los datos correspondientes a la compañía con el ID proporcionado

  return {
    props: {
      companyId,
      // Otros datos obtenidos
    },
  };
}

export default function CompanyPage({ companyId }) {
  return (
    <div>
      <h1>Company ID: {companyId}</h1>
      {/* Resto del contenido de la página */}
    </div>
  );
}
