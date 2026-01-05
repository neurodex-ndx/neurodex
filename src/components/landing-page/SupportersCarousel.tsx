import Image from "next/image";

export function SupportersCarousel() {
    const supporters = [
        "/apoiador-01.png",
        "/apoiador-02.png",
        "/apoiador-03.png",
        "/apoiador-04.png",
        "/apoiador-05.png",
        "/apoiador-06.png",
    ];

    return (
        <section className="w-full py-12 bg-background overflow-hidden">
            <div className="container px-4 mx-auto mb-8 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                    Quem apoia a causa
                </p>
            </div>

            <div className="relative flex w-full overflow-hidden mask-linear-fade">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

                <div className="flex animate-infinite-scroll gap-12 min-w-full shrink-0 items-center justify-around px-4">
                    {supporters.map((src, index) => (
                        <div key={`original-${index}`} className="relative w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <Image
                                src={src}
                                alt={`Apoiador ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex animate-infinite-scroll gap-12 min-w-full shrink-0 items-center justify-around px-4" aria-hidden="true">
                    {supporters.map((src, index) => (
                        <div key={`clone-${index}`} className="relative w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <Image
                                src={src}
                                alt={`Apoiador ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
