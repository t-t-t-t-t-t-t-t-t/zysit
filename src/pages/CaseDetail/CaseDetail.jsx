
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
import { CaseContent } from "../../compoents/CaseDetail/CaseContent"

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
export function CaseDetail() {
    let [searchParams, setSearchParams] = useSearchParams()
    const _id = searchParams.get('_id');
    return (
        <div className="CaseDetail">
            <CaseContent _id={_id}></CaseContent>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}