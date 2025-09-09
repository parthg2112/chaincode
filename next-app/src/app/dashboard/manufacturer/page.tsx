import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function ManufacturerPage() {
  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Manufacturer Dashboard</h1>
        <p className="text-muted-foreground">Manage raw herbs, create batches, and track production</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Available Raw Herbs Card */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Available Raw Herbs</CardTitle>
            <CardDescription>Select herbs to add to your batch</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Filters Row */}
            <div className="flex flex-wrap gap-3 items-end">
              <div className="flex-1 min-w-[120px]">
                <Label htmlFor="herb-filter">Herb</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="herb-filter">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="tulsi">Tulsi</SelectItem>
                    <SelectItem value="ashwagandha">Ashwagandha</SelectItem>
                    <SelectItem value="neem">Neem</SelectItem>
                    <SelectItem value="amla">Amla</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 min-w-[120px]">
                <Label htmlFor="location-filter">Location</Label>
                <Input id="location-filter" placeholder="Enter location" />
              </div>

              <div className="flex-1 min-w-[120px]">
                <Label htmlFor="collector-filter">Collector</Label>
                <Input id="collector-filter" placeholder="Collector name" />
              </div>

              <Button variant="secondary">Filter</Button>
            </div>

            {/* Table */}
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead>Herb</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Collector</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Collected At</TableHead>
                    <TableHead>Select</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">Tulsi</TableCell>
                    <TableCell>25 kg</TableCell>
                    <TableCell>Arjun Kumar</TableCell>
                    <TableCell>Madhya Pradesh</TableCell>
                    <TableCell>Dec 15, 2023</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">Ashwagandha</TableCell>
                    <TableCell>18 kg</TableCell>
                    <TableCell>Priya Sharma</TableCell>
                    <TableCell>Rajasthan</TableCell>
                    <TableCell>Dec 12, 2023</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">Neem</TableCell>
                    <TableCell>32 kg</TableCell>
                    <TableCell>Ramesh Patel</TableCell>
                    <TableCell>Gujarat</TableCell>
                    <TableCell>Dec 10, 2023</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">Amla</TableCell>
                    <TableCell>20 kg</TableCell>
                    <TableCell>Sunita Rao</TableCell>
                    <TableCell>Uttar Pradesh</TableCell>
                    <TableCell>Dec 8, 2023</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">Tulsi</TableCell>
                    <TableCell>28 kg</TableCell>
                    <TableCell>Vikram Singh</TableCell>
                    <TableCell>Maharashtra</TableCell>
                    <TableCell>Dec 5, 2023</TableCell>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <Button variant="secondary" className="w-full">Add selected to batch</Button>
          </CardContent>
        </Card>

        {/* Create Batch Card */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Create Batch</CardTitle>
            <CardDescription>Enter batch details for production</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="batch-name">Batch Name</Label>
                <Input id="batch-name" placeholder="Enter batch name" />
              </div>

              <div>
                <Label htmlFor="processing-method">Processing Method</Label>
                <Select>
                  <SelectTrigger id="processing-method">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="drying">Drying</SelectItem>
                    <SelectItem value="powdering">Powdering</SelectItem>
                    <SelectItem value="extraction">Extraction</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="processing-date">Processing Date</Label>
                <Input id="processing-date" type="date" />
              </div>

              <div>
                <Label htmlFor="certifications">Certifications</Label>
                <Input id="certifications" placeholder="e.g., GMP, ISO" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="geo-lat">Geo-tag (Lat)</Label>
                  <Input id="geo-lat" placeholder="Latitude" />
                </div>
                <div>
                  <Label htmlFor="geo-lng">Geo-tag (Lng)</Label>
                  <Input id="geo-lng" placeholder="Longitude" />
                </div>
              </div>

              <div>
                <Label htmlFor="lab-report">Attach Lab Report</Label>
                <Input id="lab-report" type="file" accept=".pdf,image/*" className="file:mr-2 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground" />
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Additional notes..." className="min-h-[80px]" />
              </div>
            </div>

            <Button className="w-full">Create Batch</Button>

            <div className="border border-border rounded-lg p-4 space-y-3">
              <p className="text-sm text-muted-foreground">Generated Product ID: <span className="text-foreground font-mono">TL-XXXXXX</span></p>
              <div className="w-[120px] h-[120px] bg-muted border border-border rounded-lg flex items-center justify-center text-muted-foreground text-xs">
                QR Placeholder
              </div>
              <p className="text-xs text-muted-foreground">Blockchain link: —</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Batch Traceability Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Batch Traceability</CardTitle>
          <CardDescription>Track your batch through production stages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
            {/* Collection Step */}
            <div className="flex flex-col items-center relative">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <span className="mt-2 text-sm font-medium">Collection</span>
            </div>

            {/* Connector Line */}
            <div className="flex-1 h-0.5 bg-border mx-[-12px]"></div>

            {/* Processing Step */}
            <div className="flex flex-col items-center relative">
              <div className="w-4 h-4 rounded-full bg-border"></div>
              <span className="mt-2 text-sm font-medium text-muted-foreground">Processing</span>
            </div>

            {/* Connector Line */}
            <div className="flex-1 h-0.5 bg-border mx-[-12px]"></div>

            {/* Certification Step */}
            <div className="flex flex-col items-center relative">
              <div className="w-4 h-4 rounded-full bg-border"></div>
              <span className="mt-2 text-sm font-medium text-muted-foreground">Certification</span>
            </div>

            {/* Connector Line */}
            <div className="flex-1 h-0.5 bg-border mx-[-12px]"></div>

            {/* Labeling Step */}
            <div className="flex flex-col items-center relative">
              <div className="w-4 h-4 rounded-full bg-border"></div>
              <span className="mt-2 text-sm font-medium text-muted-foreground">Labeling</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
