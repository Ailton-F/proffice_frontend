export function AppFeatureDescription({ title, description }: { title: string; description: string; }) {
    return (
        <div className="flex  md:items-center justify-items-center w-full p-12 bg-white rounded-lg flex md:flex-row flex-col">
            <img className="rounded-md" src={'https://placehold.co/600x300'} alt={title} />
            <div className="md:ms-16 mt-2">
                <h2 className="text-md font-[600] text-gray-800">{title}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
}