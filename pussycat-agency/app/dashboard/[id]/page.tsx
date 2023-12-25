export default function Dashboard({ params }: { params: { id: number } }) {
    return (
        <div>
            <h1
                className="text-5xl"
            >
                Dashboard
            </h1>
            <p>{params.id}</p>
        </div>
    )
}