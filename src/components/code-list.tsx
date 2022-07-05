import styled from "@emotion/styled";

export const CodeList = ({ code, err }: { code: string | undefined, err: number[] }) => {
    const codeList = code?.split('\n');
    if(!codeList?.length) {
        return null
    }
    return (
        <CodeOl>
            { codeList?.map((code, index) => {
                let num = index + 1;
                return <CodeItem id={`err${num}`} errorColor={err.includes(num)} key={index} dangerouslySetInnerHTML={{__html: code}}/>
            }) }
        </CodeOl>
    )
}

const CodeOl = styled.ol`
  margin: 0 32px 0 20px;
  max-width: 100vw;
  overflow: auto;
`;

const CodeItem = styled.li<{errorColor: boolean}>`
  position: relative;
  padding: 0 32px;
  width: 100%;
  height: 23px;
  color: #163D5E;
  border-bottom: 1px dashed #E7E9DE;
  background-color: ${props => props.errorColor ? "#D08F79" : undefined};
`;
