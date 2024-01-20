'use client'
import HeroCard from "./hero"
import { useState, useEffect } from "react"

export default function Heroes({ data }: { data: { "data": {"name": string, "description": string}[] } }) {
    const [ value, setValue ] = useState("")
    useEffect(()=>{
        console.log(value)
    }, [value])

    return (
        <div className="flex flex-col justify-center flex-wrap items-center gap-10">
            <input
                value={value}
                type="text"
                className="p-1 flex flex-col justify-center items-start rounded-lg"
                onChange={
                    e => setValue(e.target.value)
                }
                placeholder="Bare de recherche"
            />
            <div
                className="flex flex-row flex-wrap justify-start items-center gap-9"
            >
                {
                    data.data.map((hero : {"name": string, "description": string}, index : number) => {
                        if (value == "") {
                            return <HeroCard hero={hero} key={index} index={index} />
                        } else {
                            if (hero.name.toLowerCase().includes(value)) {
                                return <HeroCard hero={hero} key={index} index={index} />
                            }
                        }
                    })
                }
            </div>
        </div>
    )
}