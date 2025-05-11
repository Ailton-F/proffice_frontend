export function LandingCard({title, description, count}: {title?: string; description?: string, count?: string})
{
    return (
        <div className="flex flex-col w-full h-full p-12 bg-white rounded-lg ring-2 ring-gray-200 shadow-md">
            <figure className={`mb-16 after:content-['${count}']`}>
                <img className="rounded-md" src={"https://placehold.co/600x400"}/>
            </figure>

            <h2 className="text-md font-[600] text-gray-800">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
}