import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, QrCode, Search } from "lucide-react";

export default function LookupPage() {
  return (
    <div className="container max-w-5xl px-4 py-10 space-y-8 text-center">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Trace a Product</h1>
        <p className="text-muted-foreground">Track your product&apos;s journey from farm to shelf</p>
      </div>

      {/* Search Card */}
      <Card className="bg-card border-border">
        <CardContent className="pt-6 space-y-4">
          <div className="flex gap-2">
            <Input 
              placeholder="Enter product code" 
              className="bg-secondary border-input"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>or scan QR</span>
            <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
              <QrCode className="w-4 h-4" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Traceability Timeline */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Product Journey</CardTitle>
          <CardDescription>Follow your product&apos;s complete traceability timeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />
            <div className="space-y-8">
              {[
                { step: "Plant Collection", location: "Organic Farm, Kenya", image: true },
                { step: "Processing", location: "Nairobi Facility", image: true },
                { step: "Certification", location: "Fair Trade Center", image: true },
                { step: "Labeling", location: "Distribution Hub", image: true }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="md:text-right space-y-1">
                      <p className="font-semibold">{item.step}</p>
                      <Badge variant="secondary" className="gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </Badge>
                    </div>
                    {item.image && (
                      <div className="md:order-first md:col-span-2">
                        <div className="bg-secondary rounded-lg h-24 flex items-center justify-center text-muted-foreground">
                          Image Placeholder
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Geo-map Placeholder */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Geographic Origin</CardTitle>
          <CardDescription>Interactive map showing product locations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-secondary rounded-lg h-80 flex items-center justify-center text-muted-foreground">
            Map Visualization
          </div>
        </CardContent>
      </Card>

      {/* Meet the Farmer */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Meet the Farmer</CardTitle>
          <CardDescription>Get to know the people behind your product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Alice Wanjiku", bio: "Third-generation coffee farmer dedicated to sustainable practices and community development." },
              { name: "James Karanja", bio: "Organic farming advocate with 15 years experience in fair trade agriculture." }
            ].map((farmer, index) => (
              <Card key={index} className="bg-secondary border-border">
                <CardContent className="pt-6 flex gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {farmer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left space-y-1">
                    <p className="font-semibold">{farmer.name}</p>
                    <p className="text-sm text-muted-foreground">{farmer.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
          <CardDescription>Verified quality and sustainability standards</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            { name: "Organic Certification Report", id: "ORG-2024-001" },
            { name: "Fair Trade Compliance", id: "FT-2024-042" }
          ].map((cert, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
              <div className="text-left">
                <p className="font-medium">{cert.name}</p>
                <p className="text-sm text-muted-foreground">{cert.id}</p>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}