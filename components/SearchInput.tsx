'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("topic") || "";

    const [searchQuery, setSearchQuery] = useState(query);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });

                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === "/companions") {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, router, searchParams, pathname]);

    return (
        <div
            className="relative flex items-center gap-2 w-full sm:w-[320px]
                       border border-gray-300 rounded-full px-4 py-2
                       bg-white shadow-sm transition-all duration-200
                       focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
        >
            <Image
                src="/icons/search.svg"
                alt="search"
                width={18}
                height={18}
                className="opacity-60"
            />
            <input
                placeholder="Search companions..."
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;
