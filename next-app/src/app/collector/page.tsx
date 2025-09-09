import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MapPin, Upload, LocateFixed } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function CollectorPage(): JSX.Element {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-6 md:py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-heading">Collector Dashboard</h1>
          <Badge variant="secondary" className="text-xs font-normal">
            Connected
          </Badge>
        </div>
        <p className="text-muted-foreground">Upload collection data and view your history</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Upload Form Card */}
        <Card className="border border-white/10 bg-white/[0.03] backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Collection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="herb-name">Herb Name</Label>
                <Select>
                  <SelectTrigger id="herb-name">
                    <SelectValue placeholder="Select herb" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tulsi">Tulsi</SelectItem>
                    <SelectItem value="ashwagandha">Ashwagandha</SelectItem>
                    <SelectItem value="neem">Neem</SelectItem>
                    <SelectItem value="amla">Amla</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input id="quantity" type="number" placeholder="e.g., 2.5 kg" />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  GPS Location
                </Label>
                <div className="flex gap-2">
                  <Input placeholder="Latitude" className="flex-1" />
                  <Input placeholder="Longitude" className="flex-1" />
                </div>
                <Button type="button" size="sm" variant="secondary" className="w-full">
                  <LocateFixed className="w-4 h-4 mr-2" />
                  Use current location
                </Button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="datetime">Date & Time</Label>
                <Input id="datetime" type="datetime-local" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="images">Images</Label>
                <Input id="images" type="file" accept="image/*" multiple />
              </div>

              <div className="space-y-2">
                <Label htmlFor="id-proof">ID Proof (optional)</Label>
                <Input id="id-proof" type="file" accept="image/*,application/pdf" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Additional notes..." />
              </div>

              <div className="space-y-2">
                <Button type="submit" className="w-full shadow-[0_0_0_1px_var(--ring)]">
                  Submit
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Data will be hashed on-chain
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <p className="text-xs font-mono text-muted-foreground">
                  txHash: —
                </p>
                <p className="text-xs font-mono text-muted-foreground">
                  timestamp: —
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* History + Map Card */}
        <Card className="border border-white/10 bg-white/[0.03] backdrop-blur">
          <CardHeader>
            <CardTitle>Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="history">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="map">Map</TabsTrigger>
              </TabsList>
              
              <TabsContent value="history">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Herb</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Tulsi</TableCell>
                      <TableCell>2.5 kg</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                          Pending
                        </Badge>
                      </TableCell>
                      <TableCell>Dec 15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Neem</TableCell>
                      <TableCell>3.2 kg</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                          Verified
                        </Badge>
                      </TableCell>
                      <TableCell>Dec 12</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ashwagandha</TableCell>
                      <TableCell>1.8 kg</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          In Use
                        </Badge>
                      </TableCell>
                      <TableCell>Dec 10</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              
              <TabsContent value="map">
                <div className="h-72 rounded-lg border border-white/10 bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Map placeholder (geo-tagged collections)</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}