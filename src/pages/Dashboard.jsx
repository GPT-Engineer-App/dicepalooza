import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Bitcoin, Dice, MessageSquare, User } from 'lucide-react';

const Dashboard = () => {
  const [betAmount, setBetAmount] = useState('');
  const [winChance, setWinChance] = useState('');
  const [chatMessage, setChatMessage] = useState('');

  const handlePlaceBet = (e) => {
    e.preventDefault();
    // TODO: Implement bet placement logic
    console.log('Bet placed:', betAmount, winChance);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    // TODO: Implement chat message sending logic
    console.log('Message sent:', chatMessage);
    setChatMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, User#1234</h1>
        <p className="text-xl mt-2">Balance: 0.05 BTC</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Dice className="mr-2" /> Dice Game
            </CardTitle>
            <CardDescription>Place your bets and test your luck!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePlaceBet}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="betAmount">Bet Amount (BTC)</Label>
                  <Input
                    id="betAmount"
                    placeholder="0.001"
                    value={betAmount}
                    onChange={(e) => setBetAmount(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="winChance">Win Chance (%)</Label>
                  <Input
                    id="winChance"
                    placeholder="50"
                    value={winChance}
                    onChange={(e) => setWinChance(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Place Bet</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bitcoin className="mr-2" /> Deposit
            </CardTitle>
            <CardDescription>Add funds to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Bitcoin Address: 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Copy Address</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2" /> Account
            </CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <p>Update your profile information here.</p>
              </TabsContent>
              <TabsContent value="security">
                <p>Manage your security settings, including 2FA.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2" /> Chatroom
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 overflow-y-auto mb-4 bg-gray-700 p-2 rounded">
              {/* Chat messages would be displayed here */}
              <p><strong>User#5678:</strong> Good luck everyone!</p>
              <p><strong>User#9101:</strong> Just won 0.1 BTC!</p>
            </div>
            <form onSubmit={handleSendMessage}>
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                />
                <Button type="submit">Send</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
