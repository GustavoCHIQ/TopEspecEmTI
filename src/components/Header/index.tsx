import { ReactNode } from 'react';
import { HeaderStyle } from './styled'

type HeaderProps = {
    title: string,
    logo: ReactNode,
}

export function Header({ title, logo }: HeaderProps) {
    return (
        <HeaderStyle>
            <div className="header">
                {logo}
                <h1>{title}</h1>
            </div>
        </HeaderStyle>
    )
}