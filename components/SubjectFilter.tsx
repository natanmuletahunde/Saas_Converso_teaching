"use client";
import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get("subject") || "";

    const [subject, setSubject] = useState(query);

    useEffect(() => {
        let newUrl = "";
        if (subject === "all") {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });
        }
        router.push(newUrl, { scroll: false });
    }, [subject]);

    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="w-[200px] px-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-700 capitalize focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                <SelectValue placeholder="Choose subject" />
            </SelectTrigger>
            <SelectContent className="rounded-xl shadow-lg border border-gray-200 bg-white">
                <SelectItem value="all" className="capitalize hover:bg-gray-100 px-3 py-2 rounded-lg">
                    All subjects
                </SelectItem>
                {subjects.map((subject) => (
                    <SelectItem
                        key={subject}
                        value={subject}
                        className="capitalize hover:bg-gray-100 px-3 py-2 rounded-lg"
                    >
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;
