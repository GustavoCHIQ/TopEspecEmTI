import './cardUser.css'

type cardUserProps = {
    user: {
        img: string,
        name: string
    }
}

export function CardUser({ user }: cardUserProps) {
    return (
        <div className="card-user">
            <img src={user.img} />
            <div className="info">
                <h3>{user.name}</h3>
                <button>Ver Perfil</button>
            </div>
        </div>
    )
}