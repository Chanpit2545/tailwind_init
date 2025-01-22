export function ArticleItem(props: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div className="p-3">
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="w-0.5 h-5 bg-zinc-400"></div>
          <h1 className="text-zinc-400 font-medium text-sm">{props.date}</h1>
        </div>
        <div className="space-y-2">
          <h1 className="font-medium text-lg">{props.title}</h1>
          <p className="text-zinc-500">{props.description}</p>
          <h1 className="font-semibold text-sm text-orange-500">
            Read Article &gt;
          </h1>
        </div>
      </div>
    </div>
  );
}
