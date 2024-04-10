"use client"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select, SelectGroup } from "@/components/ui/select"
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Switcher() {
    const pathname = usePathname()
    const router = useRouter()
    const isDevelopment = pathname === "/"

    useEffect(() => {
        router.prefetch(pathname === 'development' ? '/' : '/build')
    }, [pathname])

    return <Select
        onValueChange={(value) => {
            router.push(value === 'development' ? '/' : '/build')
        }}
        defaultValue={isDevelopment ? 'development' : 'production'}>
        <SelectTrigger className="flex items-center justify-between w-full max-w-xs px-4 py-2 border rounded-lg">
            <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="production">Production</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
}

function ChevronDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}