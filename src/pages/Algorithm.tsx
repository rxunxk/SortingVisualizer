import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { findLargest } from "@/util/algorithms";

const Algorithm = () => {
  const arr = [
    272, 813, 312, 429, 860, 783, 581, 123, 895, 330, 7, 632, 287, 289, 460,
    494, 449, 535, 600, 248, 625, 433, 461, 23,
  ];
  const largeNum = findLargest(arr);

  return (
    <div>
      <Card className="max-w-[600px] min-w-[300px]">
        <CardHeader>
          <CardTitle>Bubble Sort</CardTitle>
          <CardDescription>Click on the sort button to sort!</CardDescription>
        </CardHeader>
        <CardContent className="h-[380px] w-full">
          <div className="flex gap-2 w-full h-full justify-center items-end">
            {arr.map((n, i) => {
              return (
                <div
                  key={i}
                  className={`bg-foreground w-[50px] rounded`}
                  style={{ height: `${(n / largeNum) * 100}%` }}
                ></div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Algorithm;
