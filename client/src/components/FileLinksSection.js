import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const FileLinksSection = (props) => {
    const [copied, setCopied] = useState(false)
    return (
        <div className='input-group'>
            <input className='form-control' value={props.dLink} />
            <CopyToClipboard text={props.dLink} onCopy={() => setCopied(true)}>
                <div className="btn btn-outline-primary">Copy Link
                    {copied?<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        copied
                    </span>:<></>}
                </div>
            </CopyToClipboard>
        </div>
    )
}
