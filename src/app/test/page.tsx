import { prisma } from "@/lib/db"

export default async function TestPage() {
    const voices = await prisma.voice.findMany()
    return (
        <>
            <div>world</div>
            {
                voices.map(voice => (
                    <h1 key={voice.id}>{voice.name}-{voice.variant}</h1>
                ) )
            }
        </>
    )
}