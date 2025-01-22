export function WorkItem(props: {
  title: string;
  position: string;
  year: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 border rounded-full">
        <img
          src="https://emoji.aranja.com/static/emoji-data/img-apple-160/1f914.png"
          alt="thinking emoji"
          className="w-8 h-8 object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-sm">{props.title}</h1>
        <div className="flex justify-between w-full">
          <p className="text-sm text-gray-500">{props.position}</p>
          <p className="text-sm text-gray-500">{props.year}</p>
        </div>
      </div>
    </div>
  );
}
