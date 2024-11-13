import './scss/CaseGuid.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import { useCasesCategoryHooks } from '../../hooks/CasesCategoryHooks'
export function CaseGuid({ }) {
    const [searchParams, setSearchParams] = useSearchParams()
    let idx = searchParams.get('idx') || 0;
    const [casesCategory, setCasesCategory] = useState()
    useEffect(() => {
        useCasesCategoryHooks().getCasesCategoryList().then(res => {
            setCasesCategory(preState => [...res])
        })
    }, [])
    return (<div className="CaseGuid">
        <div className="CaseGuidWrap">
            {
                casesCategory && casesCategory.map((item, index) => {
                    return (
                        <Link className={['link', index == idx ? 'active' : null].join(' ')} key={index} to={`/cases?idx=${index}`}>{item.title}</Link>
                    )
                })
            }
        </div>
    </div>)
}