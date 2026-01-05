import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

export function MissionSection() {
    const items = [
        {
            title: "Missão",
            icon: Target,
            description: "Promover a inclusão e o pertencimento de pessoas neurodivergentes através do universo Pokémon, criando espaços seguros e acessíveis.",
        },
        {
            title: "Visão",
            icon: Eye,
            description: "Ser referência nacional em neuroinclusão na cultura pop, transformando a comunidade Pokémon em um exemplo de diversidade e acolhimento.",
        },
        {
            title: "Valores",
            icon: Heart,
            description: "Respeito, Empatia, Acessibilidade, Diversidade, Comunidade e Paixão por Pokémon.",
        },
    ];

    return (
        <section className="py-20 bg-muted/50">
            <div className="container px-4 mx-auto">
                <div className="grid gap-8 md:grid-cols-3">
                    {items.map((item, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="flex flex-col items-center pb-2">
                                <div className="p-3 rounded-full bg-primary/10 mb-4 text-primary">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                <p>{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
