'use client'
import {useEffect, useState} from "react";

export default function Home() {
    const [query, setQuery] = useQueryState("test")

    const [inputValue, setInputValue] = useState(query as string)

    return (
        <div>
            <div>hello world</div>
            <span>
                {query}
            </span>
                <input type="text" value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                    setQuery(e.target.value)
                }}/>

        </div>
    );
}

const useQueryState = (key: string): [string | null, (value: string) => void] => {

    const [queryValue, setQueryValue] = useState<string>(getQueryParamsValue(key) ?? "")

    const handleSetQueryValue = (value: string) => {
        const queryParams = new URLSearchParams(window.location.search)
        queryParams.set(key, value)
        const encodedQuery = queryParams.toString().replace(/\+/g, '%20');

        window.history.pushState({}, '', `${window.location.pathname}?${encodedQuery}`);
        setQueryValue(value)
    }


    return [queryValue, handleSetQueryValue]

}

const getQueryParamsValue = (key: string) => {
    const queryParams = new URLSearchParams(window.location.search)
    return queryParams.get(key)
}
