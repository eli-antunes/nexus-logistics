import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";


export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <h1>Meu primeiro Card</h1>
        </CardHeader>
        <CardContent>
          <p>Este é o conteúdo do meu primeiro Card.</p>
        </CardContent>
        <CardFooter>
          <p>Este é o rodapé do meu primeiro Card.</p>
        </CardFooter> 
      </Card>
    </div>
  );
}
