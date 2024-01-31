import React from 'react';
import SkeletonCard from "@/components/ui/SkeletonCard";

export default function Loading() {
    return (
        <main>
            <div className="grid grid-cols-3 gap-8">
                {/* making array of 9 items to iterate through */}
                {"123456789".split('').map(item => (
                    <SkeletonCard key={item}/>
                ))}
            </div>
        </main>
    );
};
