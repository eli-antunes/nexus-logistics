type CardComponentProps = {
    children: React.ReactNode;
    className?: string;
    };

export function Card({ children, className }: CardComponentProps) {
    return (
        <div
            className={`bg-card text-card-foreground rounded-lg border shadow-sm ${className}`}>

            {children}
        </div>
    );
}

export function CardHeader({ children, className }: CardComponentProps) {
    return (
        <div className={`flex items-center justify-between p-4 font-semibold text-sm ${className}`}>{children}</div>
    )
}

export function CardContent({ children, className }: CardComponentProps) {
    return (
        <div className={`p-4 pt-0 font-mono text-xl ${className}`}>{children}</div>
    )
}

export function CardFooter({ children, className }: CardComponentProps) {
    return (
        <div className={`flex items-center p-4 pt-0 gap-2 ${className}`}>{children}</div>
    )
}