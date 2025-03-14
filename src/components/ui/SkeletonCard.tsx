import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export default function SkeletonCard() {
    return (
        <Card className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
                <Skeleton className="w-12 h-12 rounded-full"/>
                <Skeleton className="h-6 flex-grow"/>
            </CardHeader>
            <CardContent>
                {/* 2 full lines of text and 1 half line */}
                <Skeleton className="h-4 flex-grow mt-4"/>
                <Skeleton className="h-4 flex-grow mt-4"/>
                <Skeleton className="h-4 w-1/2 mt-4"/>
            </CardContent>
            <CardFooter>
                <Skeleton className="w-28 h-10"/>
            </CardFooter>
        </Card>
    );
}
