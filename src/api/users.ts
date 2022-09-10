export async function getUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5&nat=br')
        const data = await response.json()
        return data
    } catch (error) {
        return []
    }
}