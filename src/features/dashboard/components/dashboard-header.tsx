"use client";

import { useUser } from "@clerk/nextjs";
import { Headphones, ThumbsUp } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function DashboardHeader() {
    const { isLoaded, user } = useUser();

    return (
        <div className="flex items-start justify-between">
            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                    很高兴见到你
                </p>
                <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
                    {isLoaded ? (user?.fullName ?? user?.firstName ?? "there") : "..."}
                </h1>
            </div>
            <div className="lg:flex items-center gap-3 hidden">
                <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:world1043914966@gmail.com">
                        <ThumbsUp />
                        <span className="hidden lg:block">反馈</span>
                    </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                    <Link href="mailto:world1043914966@gmail.com">
                        <Headphones />
                        <span className="hidden lg:block">需要帮助吗？</span>
                    </Link>
                </Button>
            </div>
        </div>
    );
};