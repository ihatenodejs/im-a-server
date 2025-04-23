import Services from "./components/services"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold">
            I'm <span className="text-muted-foreground">{process.env.NEXT_PUBLIC_SERVER_NAME || "a server"}</span>.
          </CardTitle>
        </CardHeader>
        <CardContent className="-mt-4">
          Welcome to my little slice of the internet.
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            I'm running...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Services />
        </CardContent>
      </Card>
    </div>
  )
}
