import { Logo } from "../Logo";


export function NoData() {

  return (
    <div className="flex items-center justify-center">
    <div className="flex flex-col items-center">
      <div className="mb-6 text-gray-200 w-12 md:w-24">
        <Logo variant="plain" />
      </div>
      <p className="text-gray-600">No data yet...</p>
    </div>
  </div>
  );
}
