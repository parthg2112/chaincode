type TransactionStep = {
  id: number;
  actor: string;
  action: string;
  timestamp: string;
};

export default function TransactionTimeline({ steps }: { steps: TransactionStep[] }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
      <ul className="space-y-3">
        {steps.map((step) => (
          <li key={step.id} className="border-l-4 border-green-600 pl-3">
            <p>
              <span className="font-bold">{step.actor}</span> – {step.action}
            </p>
            <p className="text-sm text-gray-500">{step.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
