import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CommunitySection() {
    const testimonials = [
        {
            name: "Treinador Ash",
            role: "Membro da Comunidade",
            content: "A Neurodex me ajudou a encontrar amigos que entendem como eu vejo o mundo. É incrível poder jogar Pokémon sem medo de ser julgado.",
            avatar: "A",
        },
        {
            name: "Misty Waterflower",
            role: "Apoiadora",
            content: "Ver o impacto positivo que a organização tem na vida dessas pessoas é inspirador. A inclusão é real e transformadora.",
            avatar: "M",
        },
        {
            name: "Brock Harrison",
            role: "Parceiro",
            content: "Os eventos são super organizados e pensados para todos. É um exemplo de como a comunidade Pokémon pode ser acolhedora.",
            avatar: "B",
        },
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4 tracking-tight sm:text-4xl">
                    Comunidade e Impacto
                </h2>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                    O que as pessoas dizem sobre a Neurodex e como estamos transformando vidas.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <Card key={index} className="border-none shadow-sm">
                            <CardContent className="p-8 flex flex-col gap-6">
                                <p className="text-muted-foreground italic relative">
                                    <span className="text-4xl text-primary/20 absolute -top-4 -left-2">"</span>
                                    {item.content}
                                </p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <Avatar>
                                        <AvatarImage src="" />
                                        <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                            {item.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-sm">{item.name}</p>
                                        <p className="text-xs text-muted-foreground">{item.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
