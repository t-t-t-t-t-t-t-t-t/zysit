import './scss/CaseContent.scss'
import { Button } from '../Button/Button'
import { useCasesHooks } from '../../hooks/CasesHooks'
import { useEffect, useState } from "react";
export function CaseContent({ _id }) {
    const [caseContent, setCaseContent] = useState();
    useEffect(() => {
        if (_id) {
            useCasesHooks().getCasesList(_id).then(res => {
                setCaseContent(res[0])
                console.log(res[0])
            })
        }
    }, [])
    return (
        <div className="CaseContent">
            {caseContent && <div className="title">{caseContent.title}</div>}
            {caseContent && < div className="CaseContentWrap" dangerouslySetInnerHTML={{ __html: caseContent.content }} />}
            <div className="buttonWrap" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '60px' }}>
                <Button url='/cases' content='返回列表'></Button>
            </div>
        </div >

    )
}