import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Footer() {
    return (
        <footer className="py-12 bg-muted/30">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <Image
                                src="/logo-ndx.svg"
                                alt="Neurodex Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-lg">Neurodex</span>
                    </div>

                    {/* <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Início
                        </Link>
                        <Link href="#about" className="hover:text-foreground transition-colors">
                            Sobre
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Iniciativas
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Contato
                        </Link>
                    </nav> */}

                    <div className="flex items-center gap-4">
                        <Link
                            href="https://instagram.com/_neurodex"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-background hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        >
                            <Instagram className="w-5 h-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>

                <Separator className="mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground text-center md:text-left">
                    <p>
                        &copy; {new Date().getFullYear()} Neurodex. Todos os direitos reservados.
                    </p>
                    <p>
                        Feito com <span className="text-red-500">♥</span> para a comunidade.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Site desenvolvido por</span>
                        <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src="/image-avatar-dudu.png" alt="Eduardo Hessel" />
                                <AvatarFallback>EH</AvatarFallback>
                            </Avatar>
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Link
                                        href="https://eduardohessel.com.br/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-foreground transition-colors underline underline-offset-2 font-medium"
                                    >
                                        Eduardo Hessel
                                    </Link>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-80">
                                    <div className="flex justify-between space-x-4">
                                        <Avatar>
                                            <AvatarImage src="/image-avatar-dudu.png" />
                                            <AvatarFallback>EH</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-semibold">Eduardo Hessel</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Software Engineer e Product Designer apaixonado por criar experiências digitais incríveis.
                                            </p>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
