import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link href="/cookie" className="block">
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>Clinitime Cookie Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p></p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Read Cookie Policy
                </p>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/policy" className="block">
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>Clinitime Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Read Privacy Policy
                </p>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/terms" className="block">
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>Clinitime Terms and Conditions</CardTitle>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Read Terms and Conditions
                </p>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
