// Import your Client Component
import BucketSubmissionsPage from "./page-component";

export default async function Page({ params }: { params: { id: string } }) {
  return <BucketSubmissionsPage id={params.id} />;
}
