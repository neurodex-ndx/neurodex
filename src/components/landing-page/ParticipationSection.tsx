import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Instagram, Heart, Mail, Calendar } from "lucide-react";

export function ParticipationSection() {
    const actions = [
        {
            title: "Acompanhe no Instagram",
            icon: Instagram,
            description: "Fique por dentro de todas as novidades, eventos e conteúdos exclusivos.",
            action: "Seguir @_neurodex",
            href: "https://instagram.com/_neurodex",
            variant: "default" as const,
        },
        {
            title: "Participe dos Eventos",
            icon: Calendar,
            description: "Venha jogar, conversar e se divertir em nossos encontros presenciais e online.",
            action: "Ver Agenda",
            href: "https://instagram.com/_neurodex",
            variant: "outline" as const,
        },
        {
            title: "Apoie o Projeto",
            icon: Heart,
            description: "Ajude a Neurodex a continuar crescendo e impactando mais vidas.",
            action: "Quero Apoiar",
            href: "https://instagram.com/_neurodex",
            variant: "outline" as const,
        },
        {
            title: "Entre em Contato",
            icon: Mail,
            description: "Tem dúvidas, sugestões ou quer fazer uma parceria? Fale com a gente.",
            action: "Enviar Mensagem",
            href: "mailto:ndx.neurodex@gmail.com",
            variant: "outline" as const,
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Como Participar
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Existem várias formas de fazer parte da nossa comunidade e apoiar a neuroinclusão.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {actions.map((item, index) => (
                        <Card key={index} className="text-center hover:border-primary/50 transition-colors">
                            <CardHeader className="flex flex-col items-center pb-2">
                                <div className="p-4 rounded-full bg-primary/10 mb-4 text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4 h-full justify-between">
                                <p className="text-muted-foreground text-sm">
                                    {item.description}
                                </p>
                                <Button asChild variant={item.variant} className="w-full">
                                    <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}>
                                        {item.action}
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
