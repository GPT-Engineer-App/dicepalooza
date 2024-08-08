import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bitcoin, Dice } from 'lucide-react';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempted with:', username, password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // TODO: Implement registration logic
    console.log('Registration attempted with:', username, password);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold flex items-center justify-center">
          <Bitcoin className="mr-2" /> Bitcoin Casino
        </h1>
        <p className="text-xl mt-2">Secure and Provably Fair Gaming</p>
      </header>

      <Tabs defaultValue="login" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your credentials to access your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Forgot Password</Button>
              <Button type="submit">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>Create a new account to start playing.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="newUsername"
                      placeholder="Choose a username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder="Choose a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Featured Game</h2>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Dice className="mr-2" /> Dice Game
            </CardTitle>
            <CardDescription>Test your luck with our provably fair dice game!</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Customize your win chances and place your bets.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Play Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
