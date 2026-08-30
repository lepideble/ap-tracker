import { css } from '@linaria/core';

const wrapper = css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default function Loader() {
    return (
        <div className={wrapper}>
            <div>
                Loading
            </div>
        </div>
    )
}
