export async function getAllEvents(series: string) {
    const currentYear: number = new Date().getFullYear();

    const apiURL: URL = new URL(`https://raw.githubusercontent.com/sportstimes/f1/main/_db/${series}/${currentYear}.json`);
    const res: Response = await fetch(apiURL);

    const allEvents = await res.json();

    return allEvents['races']
}