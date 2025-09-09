type HerbCardProps = {
  name: string;
  origin: string;
  harvestDate: string;
  imageUrl: string;
};

export default function HerbCard({ name, origin, harvestDate, imageUrl }: HerbCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col items-center">
      <img src={imageUrl} alt={name} className="w-32 h-32 object-cover rounded-md mb-3" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">Origin: {origin}</p>
      <p className="text-gray-600">Harvested: {harvestDate}</p>
    </div>
  );
}
