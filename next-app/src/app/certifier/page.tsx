import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

export default function CertifierPage() {
  const submissions = [
    {
      id: 1,
      herb: "Echinacea purpurea",
      qty: "15 kg",
      collector: "Maria Silva",
      location: "Serra do Mar, SP",
      date: "2024-06-18",
    },
    {
      id: 2,
      herb: "Mikania glomerata",
      qty: "8 kg",
      collector: "João Oliveira",
      location: "Vale do Paraíba, RJ",
      date: "2024-06-17",
    },
    {
      id: 3,
      herb: "Passiflora incarnata",
      qty: "22 kg",
      collector: "Ana Costa",
      location: "Campos Gerais, PR",
      date: "2024-06-16",
    },
    {
      id: 4,
      herb: "Peumus boldus",
      qty: "12 kg",
      collector: "Carlos Mendes",
      location: "Mata Atlântica, MG",
      date: "2024-06-15",
    },
  ];

  const blockchainEvents = [
    {
      event: "SubmissionVerified",
      txHash: "0x2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d",
      timestamp: "2024-06-18 14:32",
    },
    {
      event: "StatusUpdated",
      txHash: "0x8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e",
      timestamp: "2024-06-18 12:15",
    },
    {
      event: "BatchCreated",
      txHash: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f",
      timestamp: "2024-06-18 09:45",
    },
  ];

  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Certifier Dashboard</h1>
        <p className="text-muted-foreground">
          Review and verify herbal submissions from local collectors
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Submissions Map</CardTitle>
            <CardDescription>Geographic distribution of submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 border border-border rounded-md flex items-center justify-center text-muted-foreground">
              Map placeholder (submissions)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Review Queue</CardTitle>
            <CardDescription>Pending verification items</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>

              <TabsContent value="pending" className="space-y-4 pt-4">
                {submissions.map((sub) => (
                  <div key={sub.id} className="border border-border rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Herb</div>
                        <div className="font-medium">{sub.herb}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Qty</div>
                        <div className="font-medium">{sub.qty}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Collector</div>
                        <div>{sub.collector}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Location</div>
                        <div>{sub.location}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Date</div>
                        <div>{sub.date}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          Reject
                        </Button>
                      </div>
                      <Textarea placeholder="Add note..." className="min-h-16" />
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="approved" className="pt-4 space-y-3">
                {submissions.slice(0, 3).map((sub) => (
                  <div key={sub.id} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">{sub.herb}</div>
                      <div className="text-xs text-muted-foreground">
                        {sub.collector} • {sub.date}
                      </div>
                    </div>
                    <Badge>Verified</Badge>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="rejected" className="pt-4 space-y-3">
                {submissions.slice(0, 2).map((sub) => (
                  <div key={`rej-${sub.id}`} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">{sub.herb}</div>
                      <div className="text-xs text-muted-foreground">
                        {sub.collector} • {sub.date}
                      </div>
                    </div>
                    <Badge variant="destructive">Rejected</Badge>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Blockchain Log Viewer</CardTitle>
          <CardDescription>Recent on-chain events</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Transaction Hash</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blockchainEvents.map((evt, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{evt.event}</TableCell>
                  <TableCell className="font-mono text-xs">
                    {evt.txHash.slice(0, 10)}...{evt.txHash.slice(-8)}
                  </TableCell>
                  <TableCell>{evt.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
          <CardDescription>Key performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Verification Rate</span>
                <span>72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold">147</div>
                <div className="text-xs text-muted-foreground">Pending Reviews</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">23</div>
                <div className="text-xs text-muted-foreground">Top Area</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}