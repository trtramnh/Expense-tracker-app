import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Thêm '/' vào danh sách các route công khai
const isPublicRoute = createRouteMatcher([
  '/',                // Trang chủ (Localhost:3000)
  '/sign-in(.*)',     // Trang đăng nhập
  '/sign-up(.*)',     // Trang đăng ký
]);

export default clerkMiddleware(async (auth, request) => {
  // Nếu người dùng truy cập vào route KHÔNG thuộc danh sách công khai
  if (!isPublicRoute(request)) {
    await auth.protect(); // Clerk sẽ tự động đẩy sang trang login
  }
});

export const config = {
  matcher: [
    // Bỏ qua các file hệ thống của Next.js và file tĩnh
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Luôn chạy cho các API routes
    '/(api|trpc)(.*)',
  ],
};