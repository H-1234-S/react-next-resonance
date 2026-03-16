import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 建立公共路由
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
// 建立组织路由
const isOrgSelectionRoute = createRouteMatcher(["/org-selection(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    const { userId, orgId } = await auth();

    // 允许访问公共路由
    if (isPublicRoute(req)) {
        return NextResponse.next()
    }

    // 保护非公共路由
    if (!userId) {
        await auth.protect();
    }

    // 允许访问组织路由
    if (isOrgSelectionRoute(req)) {
        return NextResponse.next();
    }

    // 如果用户没有选择组织，重定向到组织路由
    if (userId && !orgId) {
        const orgSelection = new URL("/org-selection", req.url);
        return NextResponse.redirect(orgSelection);
    }

    return NextResponse.next();
})

// 一段奇奇怪怪的正则表达式，很难想象想出来这一串的是人类啊
export const config = {
    matcher: [
        // 跳过 Next.js 内部文件和所有静态文件，除非在搜索参数中找到它们。
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // 始终为 API 路由运行
        '/(api|trpc)(.*)',
    ],
};