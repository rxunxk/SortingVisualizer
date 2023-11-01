import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { findLargest } from "@/util/functions";
import constants from "../util/contants.json";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generateArray } from "@/util/functions";

const Algorithm = () => {
  const [speed, setSpeed] = useState(1);
  const [sortArr, setSortArr] = useState(generateArray(30));
  const [algo, setAlgo] = useState("Bubble Sort");
  const [lComp, setLComp] = useState(0);
  const [rComp, setRComp] = useState(0);
  const [sortBtnDis, setSortBtnDis] = useState(false);

  const largeNum = findLargest(sortArr);

  const DELAY = 1000 - (speed - 1) * ((1000 - 50) / 9);

  const bubbleSort = async (z: number[]) => {
    for (let a = 0; a < z.length - 1; a++) {
      for (let b = 0; b < z.length - a - 1; b++) {
        await new Promise((resolve) => setTimeout(resolve, DELAY));
        setLComp(z[b]);
        setRComp(z[b + 1]);
        if (z[b] > z[b + 1]) {
          const temp = z[b];
          z[b] = z[b + 1];
          z[b + 1] = temp;
          // highlight = z[b + 1];
          // await new Promise((resolve) => setTimeout(resolve, 1000));
          // setArr([...z]);
        }
      }
    }
    //Sorting Completed
    setSortBtnDis(false);
    setLComp(0);
    setRComp(0);
  };

  return (
    <div className="w-full flex flex-col items-center mt-2">
      <div className="max-w-[960px] w-full flex flex-col items-center px-2 gap-2">
        <div className="w-full border rounded-[8px] border-b h-[70px] flex items-center px-2 justify-between">
          <Button
            variant="outline"
            onClick={() => {
              setSortArr(generateArray(30));
            }}
            disabled={sortBtnDis}
          >
            Generate Array
          </Button>
          <div className="flex gap-2 w-full mx-2">
            <div className="flex gap-1">
              <div>{speed}</div>
              <div className="flex items-center">x</div>
            </div>
            <Slider
              min={constants.SLIDER_MIN}
              max={constants.SLIDER_MAX}
              onValueChange={(e) => {
                setSpeed(e[0]);
              }}
              disabled={sortBtnDis}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" size="icon" disabled={sortBtnDis}>
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Algorithm</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={algo}
                onValueChange={(e) => setAlgo(e)}
              >
                <DropdownMenuRadioItem value="Bubble Sort">
                  Bubble Sort
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Selection Sort">
                  Selection Sort
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Insertion Sort">
                  Insertion Sort
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Merge Sort">
                  Merge Sort
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Quick Sort">
                  Quick Sort
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{algo}</CardTitle>
            <CardDescription>Click on the sort button to sort!</CardDescription>
          </CardHeader>
          <CardContent className="h-[380px] w-full overflow-x-scroll">
            <div className="flex gap-2 w-full h-full justify-start items-end ">
              {sortArr.map((n, i) => {
                return (
                  <div
                    key={i}
                    className={` w-[22px] rounded shrink-0 ${
                      lComp === n || rComp === n ? "bg-red-400" : "bg-[#CCCCFF]"
                    }`}
                    style={{ height: `${(n / largeNum) * 100}%` }}
                  ></div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        <Button
          className="w-full min-w-[300px]"
          variant="outline"
          onClick={() => {
            setSortBtnDis(true);
            bubbleSort(sortArr);
          }}
          disabled={sortBtnDis}
        >
          Sort!
        </Button>
      </div>
    </div>
  );
};

export default Algorithm;
