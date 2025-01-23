import { Button } from "@repo/ui/button";
import Toolbar from "@repo/ui/toolbar";
import Topbar from "@repo/ui/topbar";

export default function Home() {
  return (
      <div>
        <Button>
          Click me
        </Button>
          <Topbar />
         <Toolbar />
      </div>
  );
}
