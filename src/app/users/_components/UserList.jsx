export function UserList({ data }) {
    const users = data.map(user =>
        <li key={user.id}>{user.id} - {user.name}</li>
    )

    return (
       <ul>{users}</ul>
    )
}