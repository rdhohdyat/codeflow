import { Navbar } from "../components/Navbar";
import { Button } from "../components/ui/button";
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
} from "@xyflow/react";
import CodeEditor from "../components/CodeEditor";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../components/ui/drawer";
import "@xyflow/react/dist/style.css";
import { initialEdges, initialNodes, nodeTypes } from "../data/node";

function WorkFlowPage() {
  return (
    <>
      <Navbar />
      <div className="xl:mt-24 mt-20 flex flex-col xl:flex-row gap-5 justify-between h-[85vh] xl:h-[80vh] p-5 relative">
        <div className="w-full hidden xl:w-[550px] xl:h-full  bg-white absolute xl:relative bottom-0 left-0 right-0 xl:flex flex-col justify-between z-50">
          <CodeEditor />
        </div>

        <div className="flex h-full justify-center items-center bg-main/10 w-full rounded-lg bg-white border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] p-6 text-center">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
          >
            <Background variant={BackgroundVariant.Lines} />
            <Controls />
          </ReactFlow>
        </div>

        <div className="w-full xl:w-[600px] xl:flex flex-col justify-between hidden">
          <div>
            <h1 className="text-lg font-bold">All Path of CFG</h1>
            <div className="flex flex-col gap-2 mt-5 text-lg h-[250px] overflow-y-scroll">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="font-semibold">
                  {"1 -> 2 -> 3 -> 4 -> 5 -> 6"}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-black">
            <div className="mt-2 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">
                  Input Test Case {"(a, b)"}
                </h1>
                <input
                  className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-main"
                  type="text"
                  placeholder="Enter test case a"
                />
                <input
                  className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-main"
                  type="text"
                  placeholder="Enter test case b"
                />
              </div>
              <Button>Evaluate Test Case</Button>
              <Button variant="neutral">Clear Test Case</Button>
            </div>
            <div className="mt-5 border-t border-black pt-2">
              <h2 className="text-sm font-semibold">Evaluation Result:</h2>
              <p className="text-sm text-gray-600">
                No test case evaluated yet.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full   bg-white absolute xl:hidden bottom-0 left-0 right-0">
          <Tabs defaultValue="account">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="account">
                Enter Code
              </TabsTrigger>
              <TabsTrigger className="w-full" value="password">
                Analyze
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <CodeEditor />
            </TabsContent>
            <TabsContent value="password">
              <div className="p-5">
                <h1 className="text-lg font-bold text-center">
                  All Path of CFG
                </h1>
                <div className="flex flex-col gap-2 text-lg items-center">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="font-semibold">
                      {"1 -> 2 -> 3 -> 4 -> 5 -> 6"}
                    </div>
                  ))}
                </div>
              </div>

              <Drawer>
                <DrawerTrigger className="p-4 w-full">
                  <Button className="w-full">Input Test Case</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <div>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                          <h1 className="text-lg font-bold">
                            Input Test Case {"(a, b)"}
                          </h1>
                          <input
                            className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-main"
                            type="text"
                            placeholder="Enter test case a"
                          />
                          <input
                            className="w-full border border-black rounded p-2 focus:outline-none focus:ring-2 focus:ring-main"
                            type="text"
                            placeholder="Enter test case b"
                          />
                        </div>
                      </div>
                      <div className="mt-5 border-t border-black pt-2">
                        <h2 className="text-sm font-semibold">
                          Evaluation Result:
                        </h2>
                        <p className="text-sm text-gray-600">
                          No test case evaluated yet.
                        </p>
                      </div>
                    </div>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Evaluate Test Case</Button>
                    <DrawerClose>
                      <Button variant="neutral" className="w-full">
                        Clear Test Case
                      </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default WorkFlowPage;
