import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AdminPage() {
  return (
    <div className="container max-w-7xl px-4 py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-heading font-bold">Admin Panel</h1>
        <p className="text-muted-foreground">Manage users, transactions, and system operations</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Manage Users Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Manage Users</CardTitle>
            <CardDescription>User role management and access control</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">john@example.com</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>
                        <Badge variant="outline">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="sm" variant="outline">Make Admin</Button>
                      <Button size="sm" variant="outline">Disable</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">sarah@example.com</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>
                        <Badge variant="outline">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="sm" variant="outline">Make Admin</Button>
                      <Button size="sm" variant="outline">Disable</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">mike@example.com</TableCell>
                    <TableCell>Admin</TableCell>
                    <TableCell>
                        <Badge variant="outline">Active</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="sm" variant="outline" disabled>Make Admin</Button>
                      <Button size="sm" variant="outline">Disable</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">lisa@example.com</TableCell>
                    <TableCell>User</TableCell>
                    <TableCell>
                        <Badge variant="outline" className="bg-muted">Disabled</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button size="sm" variant="outline">Make Admin</Button>
                      <Button size="sm" variant="outline" disabled>Disable</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Recent blockchain operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Entity</TableHead>
                    <TableHead>Amount/Data</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">0xfa9...3a8e</TableCell>
                    <TableCell>Label Creation</TableCell>
                    <TableCell>Mango Batch</TableCell>
                    <TableCell>0.05 ETH</TableCell>
                    <TableCell>2 mins ago</TableCell>
                    <TableCell>
                        <Badge variant="outline" className="bg-primary/20 text-primary">Confirmed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">0x9c3...1b7d</TableCell>
                    <TableCell>Token Transfer</TableCell>
                    <TableCell>Farm Token</TableCell>
                    <TableCell>100 TK</TableCell>
                    <TableCell>5 mins ago</TableCell>
                    <TableCell>
                        <Badge variant="outline" className="bg-primary/20 text-primary">Confirmed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">0x7e8...4f2c</TableCell>
                    <TableCell>Data Upload</TableCell>
                    <TableCell>Harvest Data</TableCell>
                    <TableCell>2.4 MB</TableCell>
                    <TableCell>12 mins ago</TableCell>
                    <TableCell>
                        <Badge variant="outline">Pending</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">0x5d1...7a9b</TableCell>
                    <TableCell>Label Creation</TableCell>
                    <TableCell>Coffee Beans</TableCell>
                    <TableCell>0.03 ETH</TableCell>
                    <TableCell>18 mins ago</TableCell>
                    <TableCell>
                        <Badge variant="outline" className="bg-destructive/20 text-destructive">Failed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">0x2b8...9e1d</TableCell>
                    <TableCell>Validation</TableCell>
                    <TableCell>Quality Check</TableCell>
                    <TableCell>Pass</TableCell>
                    <TableCell>25 mins ago</TableCell>
                    <TableCell>
                        <Badge variant="outline" className="bg-accent text-accent-foreground">Verified</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Approvals Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Approvals</CardTitle>
            <CardDescription>Pending label generation requests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-secondary/30">
                <div className="space-y-1">
                  <p className="font-medium">Mango Batch L-2024-001</p>
                  <p className="text-sm text-muted-foreground">User: farmer@organic.farm • 3 minutes ago</p>
                </div>
                <div className="space-x-2">
                  <Button size="sm">Approve</Button>
                  <Button size="sm" variant="outline">Reject</Button>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-secondary/30">
                <div className="space-y-1">
                  <p className="font-medium">Coffee Bean Batch CB-2024-045</p>
                  <p className="text-sm text-muted-foreground">User: grower@mountain.coffee • 8 minutes ago</p>
                </div>
                <div className="space-x-2">
                  <Button size="sm">Approve</Button>
                  <Button size="sm" variant="outline">Reject</Button>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-secondary/30">
                <div className="space-y-1">
                  <p className="font-medium">Avocado Batch AV-2024-123</p>
                  <p className="text-sm text-muted-foreground">User: harvest@avocado.co • 15 minutes ago</p>
                </div>
                <div className="space-x-2">
                  <Button size="sm">Approve</Button>
                  <Button size="sm" variant="outline">Reject</Button>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="link" className="text-muted-foreground">View all pending requests</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Health Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>Current system status and metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3 mb-6">
              <div className="text-center p-4 rounded-lg border border-border/50 bg-secondary/30">
                <p className="text-sm text-muted-foreground mb-2">Blockchain Sync</p>
                <Badge variant="outline" className="bg-primary/20 text-primary">Synchronized</Badge>
              </div>
              <div className="text-center p-4 rounded-lg border border-border/50 bg-secondary/30">
                <p className="text-sm text-muted-foreground mb-2">API Status</p>
                <Badge variant="outline" className="bg-primary/20 text-primary">Healthy</Badge>
              </div>
              <div className="text-center p-4 rounded-lg border border-border/50 bg-secondary/30">
                <p className="text-sm text-muted-foreground mb-2">Queue</p>
                <Badge variant="outline" className="bg-accent text-accent-foreground">12 Pending</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              All systems operational. Last updated: 5 seconds ago
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}