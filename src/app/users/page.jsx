'use server'

import { UserList } from "./_components/UserList"
import { getUsers } from "./actions"

export default async function UserPage() {
    const users = await getUsers()

    return (
        <>
            <UserList data={users.data} />
        </>
    )
}