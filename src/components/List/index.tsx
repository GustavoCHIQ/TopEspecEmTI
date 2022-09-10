import { useEffect, useState } from "react";
import { getUsers } from "../../api/users";
import { CardUser } from "../CardUser";

export function List() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers()
            .then(data => {
                setUsers(data);
            }).catch(err => {
                console.log(err);
            }
            );
    }, []);

    return (
        <div>
            {
                users.map(user => <CardUser user={user} textButton="Ver Perfil" />)
            }
        </div>
    )
}