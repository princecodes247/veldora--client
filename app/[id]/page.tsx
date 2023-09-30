// Import your Client Component
import BucketPage from "./bucket-page";

export default async function Page({ params }: { params: { id: string } }) {
  return <BucketPage id={params.id} />;
}
