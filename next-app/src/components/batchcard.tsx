type BatchCardProps = {
  batchId: string;
  quantity: number;
  status: string;
  lastUpdated: string;
};

export default function BatchCard({ batchId, quantity, status, lastUpdated }: BatchCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h3 className="text-lg font-bold">Batch #{batchId}</h3>
      <p>Quantity: {quantity} kg</p>
      <p>Status: <span className="font-medium">{status}</span></p>
      <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
    </div>
  );
}
