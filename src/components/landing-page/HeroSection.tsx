import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-linear-to-b from-background to-muted/50">
            <div className="container flex flex-col items-center gap-6 max-w-4xl">
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4 flex items-center justify-center">
                    <Image
                        src="/logo-neurodex.svg"
                        alt="Neurodex Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl bg-clip-text text-transparent bg-linear-to-r from-neuro-red via-neuro-blue to-neuro-green">
                    A primeira organização Pokémon do Brasil focada em neuroinclusão
                </h1>

                <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl">
                    Acolhimento, diversidade e pertencimento através do universo Pokémon.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button asChild size="lg" className="text-lg px-8">
                        <Link href="https://instagram.com/_neurodex">
                            Conhecer o projeto
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
