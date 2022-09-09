import { Button } from '../Button'
import { CardUserStyled } from './styled'

type CardUserProps = {
    user: {
        img: string,
        name: string
    },
    textButton: string,
}
export function CardUser({ user, textButton }: CardUserProps) {
    return (
        <CardUserStyled>
            <img src={user.img} />
            <div className='info'>
                <h3>{user.name}</h3>
                <Button text={textButton} />
            </div>
        </CardUserStyled>
    )
}
