// Import your Client Component
import BucketSettingsPage from "./page-component";

export default async function Page({ params }: { params: { id: string } }) {
  return <BucketSettingsPage id={params.id} />;
}
