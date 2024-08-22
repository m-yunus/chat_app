import { useState } from "react";
import Background from "@/assets/login2.png";
import Victory from "@/assets/victory.svg";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const handleLogin=async()=>{

  }
  const handleRegister=async()=>{

  }
  
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center  ">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="Victory-image" className="h-[100px]" />
            </div>
            <p className="font-medium text-center">
              {" "}
              Fill in the details to get starter with the best chat app
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs defaultValue={"login"} className="w-3/4">
              <TabsList className="bg-transparent rounded-none w-full">
                <TabsTrigger 
                  value="login"
                  className="data-[state=active]:bg-transparent text-black
                                text-opacity-90 border-b-2 rounded-none  data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all
                                duration-300 w-2/4"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-transparent text-black
                                text-opacity-90 border-b-2 rounded-none  data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all
                                duration-300  w-2/4"
                >
                  Signup
                </TabsTrigger>
                <TabsContent className="flex flex-col gap-3" value="login">
                  <Input
                    type="Email"
                    className="rounded-xl mt-4"
                    placeholder="Enter Email"
                  />
                  <Input
                    type="Password"
                    className="rounded-xl"
                    placeholder="Enter Password"
                  />
                  <Button className="bg-purple-500 rounded-lg" onClick={handleLogin}>Submit</Button>
                </TabsContent>
                <TabsContent className="flex flex-col gap-3" value="signup">
                  <Input
                    type="Email"
                    className="rounded-xl mt-4"
                    placeholder="Enter Email"
                  />
                  <Input
                    type="Password"
                    className="rounded-xl"
                    placeholder="Enter Password"
                  />
                  <Input
                    type="Password"
                    className="rounded-xl"
                    placeholder="Confirm password"
                  />
                  <Button className="bg-purple-500 rounded-lg" onClick={handleRegister}>Submit</Button>
                </TabsContent>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className=" hidden xl:flex justify-center items-center">
            <img src={Background} alt="Auth-Img"  className="h-[300px] "/>

        </div>
      </div>
    </div>
  );
};
export default Auth;
