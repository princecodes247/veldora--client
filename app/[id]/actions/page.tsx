// Import your Client Component
import BucketActionsPage from "./page-component";

export default async function Page({ params }: { params: { id: string } }) {
  return <BucketActionsPage id={params.id} />;
}
