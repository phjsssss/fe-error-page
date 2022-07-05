import styled from "@emotion/styled";

export const ErrorTips = ({ errList }: {errList: number[]}) => {
    if(!errList.length) {
        return null
    }
    return (
        <TipsContainer>
            共有<em>{errList.length}</em>处错误，位于第
            <em>{errList.map((err, index) => {

                return <a key={err} href={`err${err}`}>{err}{index === errList.length -1 ? " " : "、"}</a>
            })}</em>行。
        </TipsContainer>
    )
}

const TipsContainer = styled.div`
    opacity: 1;
    padding-top: 10px;
    z-index: 500;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #FFF2F1;
    height: 50px;
    color: #C81616;
    font-size: large;
    font-weight: 700;
    padding-left: 36px;
    a {
        color: #C81616;
        &:hover {
            color: blue;
        }
    }
`