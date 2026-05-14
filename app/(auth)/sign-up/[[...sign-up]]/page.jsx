import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    // Container này giúp căn giữa form hoàn toàn trên màn hình
    <div className="flex min-h-screen w-full items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <div className="p-4">
        <SignUp 
          appearance={{
            elements: {
              // Thêm đổ bóng và bo góc để giao diện trông hiện đại hơn
              card: "shadow-xl border border-zinc-200 rounded-2xl"
            }
          }}
        />
      </div>
    </div>
  )
}