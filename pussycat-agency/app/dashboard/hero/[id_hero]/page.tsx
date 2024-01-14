export default async function Hero({ 
    params,
 }: {
    params: { id_hero: number }
 }) {
    return (
        <div>
            {params.id_hero}
        </div>
    )
}