import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, BookOpen, Smile } from "lucide-react";

export function InitiativesSection() {
    const initiatives = [
        {
            title: "Projetos Sociais",
            icon: Users,
            description: "Ações voltadas para o apoio e integração de pessoas neurodivergentes em vulnerabilidade social.",
            tags: ["Inclusão", "Apoio"],
        },
        {
            title: "Eventos Inclusivos",
            icon: Calendar,
            description: "Encontros presenciais e online com adaptações sensoriais e comunicativas para garantir a participação de todos.",
            tags: ["Presencial", "Online"],
        },
        {
            title: "Ações Educativas",
            icon: BookOpen,
            description: "Workshops, palestras e conteúdos informativos sobre neurodiversidade e combate ao capacitismo.",
            tags: ["Educação", "Conscientização"],
        },
        {
            title: "Encontros da Comunidade",
            icon: Smile,
            description: "Momentos de lazer e diversão focados em jogar Pokémon e criar laços de amizade.",
            tags: ["Lazer", "Amizade"],
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 tracking-tight sm:text-4xl">
                    Nossas Iniciativas
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {initiatives.map((item, index) => (
                        <Card key={index} className="flex flex-col h-full hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between">
                                <CardDescription className="text-base mb-4">
                                    {item.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {item.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="font-normal">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
