import './scss/CaseList.scss'
import { CaseCard } from './CaseCard'
import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { useCasesCategoryHooks } from '../../hooks/CasesCategoryHooks'
import { useCasesHooks } from '../../hooks/CasesHooks'
export function CaseList() {
    const [searchParams, setSearchParams] = useSearchParams()
    let idx = searchParams.get('idx') || 0;
    const [caseContent, setCaseContent] = useState()
    useEffect(() => {
        useCasesCategoryHooks().getCasesCategoryList().then(res => {
            return useCasesHooks().getCasesListByCategory(res[idx].title)
        }).then(res => {
            setCaseContent(res)
        })
    }, [searchParams.get('idx')])
    return (
        <div className="CaseList">
            <div className="CaseListWrap">
                {
                    caseContent && caseContent.map((item, index) => {
                        return (<CaseCard key={index} _id={item._id} image={item.image} title={item.title} > </CaseCard>)
                    })
                }
            </div>
        </div>
    )
}
