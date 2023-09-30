import BucketAPIPage from "../../api/bucket-api-page";

function Modal({ children }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 pt-8">
      <div className=" max-w-[50%] overflow-hidden rounded-lg border-2 border-red-700 bg-white p-1">
        {children}
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <BucketAPIPage id={params.id} />
    </Modal>
  );
}
