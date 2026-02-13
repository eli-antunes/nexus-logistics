type CardProps = {
    children: React.ReactNode;
    className?: string;
    };

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={`rounded-lg border bg-card text-card-foreground shadow-sm  p-4 ${className}`}>
                
            {children}
        </div>
    );
}