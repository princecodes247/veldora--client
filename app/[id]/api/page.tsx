// Import your Client Component
import BucketAPIPage from "./bucket-api-page";

export default async function Page({ params }: { params: { id: string } }) {
  return <BucketAPIPage id={params.id} />;
}
