import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        O que é a Neurodex?
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />
                </div>

                <Card className="border-none shadow-lg bg-muted/30">
                    <CardContent className="p-8 md:p-12 text-lg leading-relaxed text-muted-foreground text-center">
                        <p className="mb-6">
                            A <span className="font-semibold text-foreground">Neurodex</span> é a primeira organização brasileira de Pokémon focada em <span className="font-semibold text-foreground">neuroinclusão</span>.
                        </p>
                        <p className="mb-6">
                            Nascemos com o propósito de criar um espaço seguro e acolhedor para pessoas neurodivergentes dentro da comunidade Pokémon. Acreditamos que o universo Pokémon, com sua diversidade de criaturas e treinadores, é o cenário perfeito para promover a aceitação e o respeito às diferenças.
                        </p>
                        <p>
                            Atuamos como uma central de informações e engajamento, conectando pessoas, promovendo eventos acessíveis e disseminando conhecimento sobre neurodiversidade de forma lúdica e empática.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
