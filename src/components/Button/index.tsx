import { ButtonStyled } from './styled'

type ButtonProps = {
    text: string
}

export function Button({ text }: ButtonProps) {
    return (
        <ButtonStyled>
            {text}
        </ButtonStyled>
    )
}